import { NextRequest, NextResponse } from "next/server";
import { sendFormEmails } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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
