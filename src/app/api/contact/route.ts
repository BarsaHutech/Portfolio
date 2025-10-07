import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    // TODO: send email via provider (Resend, EmailJS, etc.)
    console.log("Contact message:", data)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}


