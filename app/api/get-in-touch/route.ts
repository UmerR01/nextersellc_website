import { NextRequest, NextResponse } from "next/server";
import { fileToAttachment, sendFormEmails } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";
    const file = formData.get("file");

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const attachment = await fileToAttachment(file);

    await sendFormEmails({
      formName: "Get in touch",
      submitterName: name,
      submitterEmail: email,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Message", value: message },
      ],
      attachments: attachment ? [attachment] : undefined,
      sourceUrl: req.headers.get("referer") ?? undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Get in touch API error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
