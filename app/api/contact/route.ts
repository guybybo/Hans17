import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const to = formData.get("to") as string
    const from = formData.get("from") as string
    const message = formData.get("message") as string
    const files = formData.getAll("files") as File[]

    console.log("[v0] Contact form submission:", {
      to,
      from,
      message: message.substring(0, 50) + "...",
      fileCount: files.length,
      files: files.map((f) => ({ name: f.name, size: f.size, type: f.type })),
    })

    // In a real implementation, you would integrate with an email service like:
    // - Resend (resend.com) - supports attachments
    // - SendGrid - supports attachments
    // - Nodemailer with SMTP - supports attachments
    // - AWS SES - supports attachments

    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // const attachments = await Promise.all(
    //   files.map(async (file) => ({
    //     filename: file.name,
    //     content: Buffer.from(await file.arrayBuffer()),
    //   }))
    // );
    //
    // await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: to,
    //   reply_to: from,
    //   subject: 'New Contact Form Message',
    //   text: message,
    //   attachments: attachments,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Message received. Email functionality requires integration with an email service.",
        filesReceived: files.length,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 })
  }
}
