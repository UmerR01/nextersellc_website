import { NextRequest, NextResponse } from "next/server";
import { fileToAttachment, sendFormEmails } from "@/lib/mailer";
import { HONEYPOT_FIELD_NAME } from "@/lib/honeypot";
import { isBlockedByPreCheck } from "@/lib/antiSpamGate";
import { TURNSTILE_FIELD_NAME, verifyTurnstileToken } from "@/lib/turnstile";
import { CAPTCHA_ANSWER_FIELD, CAPTCHA_TOKEN_FIELD, captchaGuard } from "@/lib/captcha";
import { isValidEmail, isValidName, isValidPhone } from "@/lib/formValidation";
import { EMPLOYEES, PARTNERSHIP_TYPES, SOURCES, LIMITS, MIN_LENGTH } from "@/lib/partnerForm";

const text = (formData: FormData, key: string) => formData.get(key)?.toString().trim() ?? "";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data") && !contentType.includes("application/x-www-form-urlencoded")) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const formData = await req.formData();

    if (isBlockedByPreCheck(req, formData.get(HONEYPOT_FIELD_NAME), "partner-inquiry")) {
      return NextResponse.json({ success: true });
    }

    const firstName = text(formData, "firstName");
    const lastName = text(formData, "lastName");
    const email = text(formData, "email");
    const phone = text(formData, "phone");
    const companyEmail = text(formData, "companyEmail");
    const industry = text(formData, "industry");
    const employees = text(formData, "employees");
    const whyPartner = text(formData, "whyPartner");
    const contribution = text(formData, "contribution");
    const partnershipType = text(formData, "partnershipType");
    const source = text(formData, "source");
    const file = formData.get("file");

    if (
      !firstName || !lastName || !email || !phone || !companyEmail || !industry ||
      !employees || !whyPartner || !contribution || !partnershipType || !source
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const captchaBlock = captchaGuard(formData.get(CAPTCHA_TOKEN_FIELD), formData.get(CAPTCHA_ANSWER_FIELD), "partner-inquiry");
    if (captchaBlock) return captchaBlock;

    const remoteIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const turnstileResult = await verifyTurnstileToken(formData.get(TURNSTILE_FIELD_NAME), remoteIp, "partner-inquiry");
    if (!turnstileResult.ok) {
      if (turnstileResult.reason === "unavailable") {
        return NextResponse.json(
          { error: "Our verification service is temporarily unavailable. Please try again in a moment." },
          { status: 503 }
        );
      }
      return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 400 });
    }

    if (!isValidName(firstName) || !isValidName(lastName)) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }
    if (!isValidEmail(email) || !isValidEmail(companyEmail)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }

    if (
      firstName.length > LIMITS.name || lastName.length > LIMITS.name ||
      phone.length > LIMITS.phone ||
      industry.length < MIN_LENGTH.industry || industry.length > LIMITS.industry ||
      whyPartner.length < MIN_LENGTH.message || whyPartner.length > LIMITS.message ||
      contribution.length < MIN_LENGTH.message || contribution.length > LIMITS.message
    ) {
      return NextResponse.json({ error: "Invalid field length" }, { status: 400 });
    }
    if (!EMPLOYEES.includes(employees) || !PARTNERSHIP_TYPES.includes(partnershipType) || !SOURCES.includes(source)) {
      return NextResponse.json({ error: "Invalid selection" }, { status: 400 });
    }

    const attachment = await fileToAttachment(file);

    await sendFormEmails({
      formName: "Partner enquiry",
      submitterName: `${firstName} ${lastName}`,
      submitterEmail: email,
      fields: [
        { label: "First name", value: firstName },
        { label: "Last name", value: lastName },
        { label: "Email", value: email },
        { label: "Phone number", value: phone },
        { label: "Company email", value: companyEmail },
        { label: "Industry", value: industry },
        { label: "Employees", value: employees },
        { label: "Why partner with Nexterse LLC", value: whyPartner },
        { label: "What they bring to the partnership", value: contribution },
        { label: "Type of partnership", value: partnershipType },
        { label: "How they heard about us", value: source },
      ],
      attachments: attachment ? [attachment] : undefined,
      sourceUrl: req.headers.get("referer") ?? undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Partner inquiry API error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
