import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";

export interface EmailPayload {
  subject: string;
  text: string;
  html: string;
}

export async function sendNotificationEmail(
  payload: EmailPayload
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const recipient = siteConfig.email || "hello.escorts.service@gmail.com";

  // Check if SMTP credentials are provided in environment variables (.env.local)
  const smtpUser = (process.env.SMTP_USER || process.env.GMAIL_USER || "hello.escorts.service@gmail.com").trim();
  const smtpPass = (process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "").trim().replace(/\s+/g, "");

  if (smtpPass) {
    try {
      // Create nodemailer transporter with Gmail service preset
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: `"${siteConfig.siteName}" <${smtpUser}>`,
        to: recipient,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
      });

      console.log(`✅ [EMAIL SENT TO ${recipient}]: ${payload.subject} (ID: ${info.messageId})`);
      return { success: true, messageId: info.messageId };
    } catch (error: unknown) {
      console.error("❌ Gmail SMTP send failed:", error);
      return { success: false, error: String(error) };
    }
  }

  // If SMTP password is not set yet in .env.local
  console.warn("\n=======================================================");
  console.warn("⚠️  REAL EMAIL NOT SENT: GMAIL APP PASSWORD IS MISSING!");
  console.warn("👉 To receive real emails in hello.escorts.service@gmail.com, add:");
  console.warn("   SMTP_PASS=your_16_digit_app_password to .env.local");
  console.warn("=======================================================");
  console.log(`[SIMULATED EMAIL DISPATCH TO: ${recipient}]`);
  console.log(`Subject: ${payload.subject}`);
  console.log(`Body:\n${payload.text}\n`);

  return {
    success: true,
  };
}
