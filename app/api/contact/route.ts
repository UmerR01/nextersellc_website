import { NextRequest, NextResponse } from "next/server";
import { sendFormEmails } from "@/lib/mailer";
import { HONEYPOT_FIELD_NAME } from "@/lib/honeypot";
import { isBlockedByPreCheck } from "@/lib/antiSpamGate";
import { TURNSTILE_FIELD_NAME, verifyTurnstileToken } from "@/lib/turnstile";
import { isValidEmail } from "@/lib/formValidation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Silently "succeed" without sending mail — see lib/honeypot.ts. No
    // distinct response for a caught bot, so a script gets no signal it
    // was filtered rather than genuinely accepted.
    if (isBlockedByPreCheck(req, body[HONEYPOT_FIELD_NAME], "contact")) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const remoteIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const turnstileResult = await verifyTurnstileToken(body[TURNSTILE_FIELD_NAME], remoteIp, "contact");
    if (!turnstileResult.ok) {
      if (turnstileResult.reason === "unavailable") {
        return NextResponse.json(
          { error: "Our verification service is temporarily unavailable. Please try again in a moment." },
          { status: 503 }
        );
      }
      return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await sendFormEmails({
      formName: "Contact form",
      submitterName: name,
      submitterEmail: email,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Message", value: message },
      ],
      sourceUrl: req.headers.get("referer") ?? undefined,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
