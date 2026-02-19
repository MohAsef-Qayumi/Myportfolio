import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.EMAIL_REC;
    if (!receiverEmail) {
      return NextResponse.json(
        { error: "Receiver email is not configured." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: receiverEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Message from Portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 100px;">Name:</td>
              <td style="padding: 8px 0; color: #6b7280;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #6b7280;">
                <a href="mailto:${email}" style="color: #4f46e5;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
              <td style="padding: 8px 0; color: #6b7280;">${subject}</td>
            </tr>
          </table>
          <div style="background: #f9fafb; padding: 16px; border-radius: 6px; margin-top: 10px;">
            <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Message:</p>
            <p style="color: #6b7280; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; text-align: center;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}