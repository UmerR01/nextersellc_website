import { NextRequest, NextResponse } from "next/server";
import { sendFormEmails } from "@/lib/mailer";
import { HONEYPOT_FIELD_NAME } from "@/lib/honeypot";
import { isBlockedByPreCheck } from "@/lib/antiSpamGate";
import { TURNSTILE_FIELD_NAME, verifyTurnstileToken } from "@/lib/turnstile";
import { isValidEmail } from "@/lib/formValidation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, intention, discuss, company, companyType, whitepaper } = body;

    if (isBlockedByPreCheck(req, body[HONEYPOT_FIELD_NAME], "whitepaper-download")) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !intention || !discuss) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const remoteIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const turnstileResult = await verifyTurnstileToken(body[TURNSTILE_FIELD_NAME], remoteIp, "whitepaper-download");
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
      formName: "Whitepaper download",
      submitterName: name,
      submitterEmail: email,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Whitepaper", value: whitepaper || "-" },
        { label: "Intention", value: intention },
        { label: "Wants to discuss project", value: discuss },
        { label: "Company", value: company || "-" },
        { label: "Company type", value: companyType || "-" },
      ],
      sourceUrl: req.headers.get("referer") ?? undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Whitepaper download API error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
