import { NextRequest, NextResponse } from "next/server";
import { sendFormEmails } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, intention, discuss, company, companyType, whitepaper } = body;

    if (!name || !email || !intention || !discuss) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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
