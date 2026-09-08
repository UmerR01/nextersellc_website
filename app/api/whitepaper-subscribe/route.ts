import { NextRequest, NextResponse } from "next/server";
import { sendFormEmails } from "@/lib/mailer";
import { HONEYPOT_FIELD_NAME } from "@/lib/honeypot";
import { isBlockedByPreCheck } from "@/lib/antiSpamGate";
import { TURNSTILE_FIELD_NAME, verifyTurnstileToken } from "@/lib/turnstile";
import { isValidEmail } from "@/lib/formValidation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (isBlockedByPreCheck(req, body[HONEYPOT_FIELD_NAME], "whitepaper-subscribe")) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const remoteIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const turnstileResult = await verifyTurnstileToken(body[TURNSTILE_FIELD_NAME], remoteIp, "whitepaper-subscribe");
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
      formName: "Whitepaper subscription",
      submitterName: name,
      submitterEmail: email,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
      ],
      sourceUrl: req.headers.get("referer") ?? undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Whitepaper subscribe API error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
