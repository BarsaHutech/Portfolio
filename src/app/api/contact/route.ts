import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
const toEmail = process.env.CONTACT_TO_EMAIL;

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data?.email || !data?.name || !data?.message) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 }
      );
    }
    if (!resend || !toEmail) {
      console.log("Contact form submission:", data);
      return NextResponse.json({
        ok: true,
        message: "Email not configured, logged to console",
      });
    }

    await resend.emails.send({
      from: "Portfolio <noreply@resend.dev>",
      to: [toEmail],
      replyTo: data.email,
      subject: `New inquiry from ${data.name}`,
      text: `${data.name} <${data.email}>\n\n${data.message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
