import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: configure email sending (nodemailer / SendGrid / Resend)
    // Example with nodemailer:
    // const transporter = nodemailer.createTransporter({ ... });
    // await transporter.sendMail({ from: email, to: "info@nexterse.com", subject: `New inquiry from ${name}`, text: message });

    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
