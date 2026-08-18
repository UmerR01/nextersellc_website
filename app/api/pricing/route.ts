import { NextRequest, NextResponse } from "next/server";
import { sendFormEmails, type FormField } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, formName, fields } = body as {
      name?: string;
      email?: string;
      formName?: string;
      fields?: FormField[];
    };

    if (!name || !email || !Array.isArray(fields) || fields.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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
