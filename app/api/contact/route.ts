import { sendEmail } from "@/lib/email.client";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import ContactEmail from "@/emails/contact-email";

export async function POST(req: Request) {
  try {
    const { name, subject, message, email } = await req.json();
    await sendEmail({
      from: process.env.SMTP_FROM_EMAIL,
      subject,
      html: render(ContactEmail({ fullName: name, subject, email, message })),
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (e) {
    console.log("[CONTACT_POST]", e);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
