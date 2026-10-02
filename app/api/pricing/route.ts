import { NextRequest, NextResponse } from "next/server";
import { sendFormEmails, type FormField } from "@/lib/mailer";
import { HONEYPOT_FIELD_NAME } from "@/lib/honeypot";
import { isBlockedByPreCheck } from "@/lib/antiSpamGate";
import { TURNSTILE_FIELD_NAME, verifyTurnstileToken } from "@/lib/turnstile";
import { CAPTCHA_ANSWER_FIELD, CAPTCHA_TOKEN_FIELD, captchaGuard } from "@/lib/captcha";
import { isValidEmail } from "@/lib/formValidation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, formName, fields } = body as {
      name?: string;
      email?: string;
      formName?: string;
      fields?: FormField[];
    };

    if (isBlockedByPreCheck(req, body[HONEYPOT_FIELD_NAME], "pricing")) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !Array.isArray(fields) || fields.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const captchaBlock = captchaGuard(body[CAPTCHA_TOKEN_FIELD], body[CAPTCHA_ANSWER_FIELD], "pricing");
    if (captchaBlock) return captchaBlock;

    const remoteIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const turnstileResult = await verifyTurnstileToken(body[TURNSTILE_FIELD_NAME], remoteIp, "pricing");
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
      formName: formName || "Pricing estimate request",
      submitterName: name,
      submitterEmail: email,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        ...fields,
      ],
      highlightLabel: "",
      sourceUrl: req.headers.get("referer") ?? undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Pricing API error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
