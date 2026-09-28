import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";

export interface EmailPayload {
  to?: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendNotificationEmail(
  payload: EmailPayload
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const recipient = payload.to?.trim() || siteConfig.email || "hello.escorts.service@gmail.com";

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
      console.error(`❌ Gmail SMTP send to ${recipient} failed:`, error);
      return { success: false, error: String(error) };
    }
  }

  // If SMTP password is not set yet in .env.local
  console.warn("\n=======================================================");
  console.warn(`⚠️  SMTP PASSWORD IS MISSING! Simulated dispatch to: ${recipient}`);
  console.warn(`   Subject: ${payload.subject}`);
  console.warn("=======================================================");
  console.log(`Body:\n${payload.text}\n`);

  return {
    success: true,
  };
}

export async function sendClientReviewThankYouEmail({
  to,
  clientName,
  companion,
  rating,
}: {
  to: string;
  clientName: string;
  companion: string;
  rating: number;
}): Promise<{ success: boolean; error?: string }> {
  const stars = "★".repeat(Math.min(5, Math.max(1, Number(rating)))) + "☆".repeat(Math.max(0, 5 - Number(rating)));
  const displayName = clientName && clientName.trim() ? clientName.trim() : "Valued Client";

  const subject = `⭐ Thank You for Your Review & Feedback — ${siteConfig.siteName}`;

  const text = `
Dear ${displayName},

Thank you for submitting your feedback regarding your recent experience with ${companion} on ${siteConfig.siteName}.

We truly value your rating (${rating}/5 Stars: ${stars}) and your kind words. Your trust and satisfaction are our highest priorities.

As a preferred client, you are eligible for:
• Priority 25-minute VIP outcall dispatch
• Exclusive advance previews of new models and seasonal arrivals
• 100% confidential, verified 5-star service anytime in Hyderabad

For future bookings or special arrangements:
• Direct VIP WhatsApp: ${siteConfig.whatsappDisplay} (${siteConfig.whatsappHref})
• Call Support: ${siteConfig.phoneDisplay}

Warm regards,
Private Management Team
${siteConfig.siteName}
Hyderabad, Telangana
${siteConfig.siteUrl}
  `.trim();

  const html = `
<div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #0b070c; color: #f4f4f5; padding: 32px 20px; max-width: 600px; margin: 0 auto; border-radius: 16px; border: 1px solid #f5b324;">
  <div style="text-align: center; margin-bottom: 24px;">
    <h1 style="color: #f5b324; font-size: 24px; margin: 0; font-family: Georgia, serif; text-transform: uppercase; letter-spacing: 1px;">
      ${siteConfig.siteName}
    </h1>
    <p style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-top: 6px;">
      VIP Client Services &amp; Discretion
    </p>
  </div>

  <div style="background-color: #160f18; padding: 24px; border-radius: 12px; border-left: 4px solid #f5b324; margin-bottom: 24px;">
    <h2 style="color: #ffffff; font-size: 18px; margin-top: 0;">Dear ${displayName},</h2>
    <p style="color: #e4e4e7; line-height: 1.6; font-size: 14px;">
      Thank you for taking the time to share your feedback regarding your experience with <strong style="color: #f43f5e;">${companion}</strong>.
    </p>
    <div style="margin: 14px 0; padding: 12px; background: #221424; border-radius: 8px;">
      <span style="color: #a1a1aa; font-size: 13px;">Your Submitted Rating: </span>
      <strong style="color: #f5b324; font-size: 16px;">${stars} (${rating} / 5 Stars)</strong>
    </div>
    <p style="color: #e4e4e7; line-height: 1.6; font-size: 14px; margin-bottom: 0;">
      Your review helps us maintain our stringent standards of hygiene, punctuality, and world-class companionship across Hyderabad.
    </p>
  </div>

  <div style="background-color: #120b13; padding: 20px; border-radius: 12px; border: 1px solid #27272a; margin-bottom: 24px;">
    <h3 style="color: #f5b324; font-size: 15px; margin-top: 0; text-transform: uppercase;">
      🌟 VIP Client Privileges
    </h3>
    <ul style="color: #d4d4d8; font-size: 13px; line-height: 1.8; margin: 0; padding-left: 20px;">
      <li>Fast 25–30 minute priority 5-star hotel outcall dispatch</li>
      <li>Early access to new verified models &amp; celebrity profiles</li>
      <li>Zero advance required — Cash on Delivery (COD) guaranteed</li>
      <li>100% discrete and confidential billing &amp; communication</li>
    </ul>
  </div>

  <div style="text-align: center; margin-bottom: 24px;">
    <a href="${siteConfig.whatsappHref}" style="display: inline-block; background-color: #22c55e; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 30px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(34,197,94,0.3);">
      💬 Connect via WhatsApp
    </a>
  </div>

  <div style="border-top: 1px solid #27272a; padding-top: 16px; text-align: center; font-size: 12px; color: #71717a;">
    <p style="margin: 4px 0;">Need direct assistance? Call us 24/7 at <strong style="color: #ffffff;">${siteConfig.phoneDisplay}</strong></p>
    <p style="margin: 4px 0;">© ${new Date().getFullYear()} ${siteConfig.siteName}. All rights reserved.</p>
  </div>
</div>
  `.trim();

  return sendNotificationEmail({
    to,
    subject,
    text,
    html,
  });
}
