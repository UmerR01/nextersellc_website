import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const position = formData.get("position")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    if (!name || !email || !position || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: Send to HR email via nodemailer/Resend/SendGrid
    console.log("[Careers Application]", { name, email, position, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Careers API error]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
