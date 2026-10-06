import nodemailer from "nodemailer";

function cleanEmail(value: unknown) {
  return String(value ?? "").trim().slice(0, 254);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const { email: rawEmail } = await request.json();
    const email = cleanEmail(rawEmail);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASSWORD } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
      console.error("Newsletter SMTP configuration is missing.");
      return Response.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 465),
      secure: SMTP_SECURE === "true",
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    const safeEmail = escapeHtml(email);
    await transporter.sendMail({
      from: `"ZTERABYTE Newsletter" <${SMTP_USER}>`,
      to: "info@zterabyte.com",
      replyTo: email,
      subject: "New Newsletter Subscription",
      text: `A visitor subscribed to the ZTERABYTE newsletter.\n\nEmail: ${email}`,
      html: `<div style="font-family:Arial,sans-serif;color:#071827"><h2>New Newsletter Subscription</h2><p>A visitor subscribed to the ZTERABYTE newsletter.</p><p><strong>Email:</strong> ${safeEmail}</p></div>`,
    });

    return Response.json({ success: true, message: "Subscription received." });
  } catch (error) {
    console.error("Newsletter subscription email error:", error);
    return Response.json(
      { success: false, message: "Unable to subscribe right now. Please try again." },
      { status: 500 },
    );
  }
}
