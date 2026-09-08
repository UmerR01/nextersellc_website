import { NextRequest, NextResponse } from "next/server";
import { fileToAttachment, sendFormEmails } from "@/lib/mailer";
import { HONEYPOT_FIELD_NAME } from "@/lib/honeypot";
import { isBlockedByPreCheck } from "@/lib/antiSpamGate";
import { TURNSTILE_FIELD_NAME, verifyTurnstileToken } from "@/lib/turnstile";
import { isValidEmail } from "@/lib/formValidation";

export async function POST(req: NextRequest) {
  try {
    // req.formData() throws on any other Content-Type (e.g. a script
    // POSTing raw JSON at this endpoint) — that throw was falling through
    // to the catch block's generic 500 below, which is both slow (an
    // exception-driven path that got measurably slower under concurrent
    // load in testing) and noisy in logs. A malformed request is a client
    // error, not a server error — reject it fast and cheaply instead. See
    // track/spam-attack-drill.md.
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data") && !contentType.includes("application/x-www-form-urlencoded")) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const formData = await req.formData();

    if (isBlockedByPreCheck(req, formData.get(HONEYPOT_FIELD_NAME), "careers")) {
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

    const remoteIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const turnstileResult = await verifyTurnstileToken(formData.get(TURNSTILE_FIELD_NAME), remoteIp, "careers");
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
