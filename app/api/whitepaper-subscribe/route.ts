import { NextRequest, NextResponse } from "next/server";
import { sendFormEmails } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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
