import { NextRequest, NextResponse } from "next/server";
import { fileToAttachment, sendFormEmails } from "@/lib/mailer";
import { HONEYPOT_FIELD_NAME, isHoneypotTriggered } from "@/lib/honeypot";
import { isValidEmail } from "@/lib/formValidation";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    if (isHoneypotTriggered(formData.get(HONEYPOT_FIELD_NAME))) {
      return NextResponse.json({ success: true });
    }

    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const position = formData.get("position")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const linkedinUrl = formData.get("linkedinUrl")?.toString().trim() ?? "";
    const githubUrl = formData.get("githubUrl")?.toString().trim() ?? "";
    const portfolioUrl = formData.get("portfolioUrl")?.toString().trim() ?? "";
    const resume = formData.get("resume");

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resumeAttachment = await fileToAttachment(resume);

    await sendFormEmails({
      formName: "Careers application",
      submitterName: name,
      submitterEmail: email,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Phone", value: phone || "-" },
        ...(position ? [{ label: "Position", value: position }] : []),
        { label: "LinkedIn", value: linkedinUrl || "-" },
        { label: "GitHub", value: githubUrl || "-" },
        { label: "Portfolio", value: portfolioUrl || "-" },
        { label: "Message", value: message },
      ],
      attachments: resumeAttachment ? [resumeAttachment] : undefined,
      sourceUrl: req.headers.get("referer") ?? undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Careers API error]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
