import { NextRequest, NextResponse } from "next/server";
import { sendFormEmails } from "@/lib/mailer";
import { HONEYPOT_FIELD_NAME, isHoneypotTriggered } from "@/lib/honeypot";
import { isValidEmail } from "@/lib/formValidation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (isHoneypotTriggered(body[HONEYPOT_FIELD_NAME])) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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
