import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail, sendClientReviewThankYouEmail } from "@/lib/mailer";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

// Simple helper to extract email if entered anywhere in fields
function extractEmail(...fields: (string | undefined)[]): string | null {
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i;
  for (const field of fields) {
    if (field && typeof field === "string") {
      const match = field.match(emailRegex);
      if (match) return match[1].trim();
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name = "Verified Client",
      email = "",
      rating = 5,
      companion = "General Service",
      location = "Hyderabad",
      review = "",
      title = "Client Experience Feedback",
    } = body;

    if (!review || !review.trim()) {
      return NextResponse.json(
        { success: false, error: "Please write your review before submitting." },
        { status: 400 }
      );
    }

    // Detect client email if provided in explicit field or entered in title/name
    const clientEmail = extractEmail(email, title, name, review);

    const starString = "★".repeat(Number(rating)) + "☆".repeat(Math.max(0, 5 - Number(rating)));

    const subject = `⭐ New Client Review (${rating}/5 Stars) from ${name} for ${companion} - ${siteConfig.siteName}`;
    const text = `
You have received a new Client Review on your website:

• Client Name / Alias: ${name}
• Client Email: ${clientEmail || "Not provided (Anonymous)"}
• Star Rating: ${rating} / 5 (${starString})
• Companion Availed: ${companion}
• Location / City: ${location}, Hyderabad
• Review Title: ${title}

Client Review Message:
"${review.trim()}"

Submitted on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
Website: ${siteConfig.siteUrl}
    `.trim();

    const html = `
<div style="font-family: Arial, sans-serif; background-color: #0f0a10; color: #f4f4f5; padding: 24px; border-radius: 12px; border: 2px solid #f5b324;">
  <h2 style="color: #f5b324; margin-top: 0;">⭐ New Client Review Received</h2>
  <p style="color: #e4e4e7; font-size: 15px;">A client has submitted a post-service review on <strong>${siteConfig.siteName}</strong>.</p>
  
  <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa; width: 160px;">Client Name:</td>
      <td style="padding: 10px 0; color: #ffffff; font-weight: bold; font-size: 16px;">${name}</td>
    </tr>
    ${
      clientEmail
        ? `<tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Client Email:</td>
      <td style="padding: 10px 0; color: #38bdf8; font-weight: bold;"><a href="mailto:${clientEmail}" style="color: #38bdf8; text-decoration: none;">${clientEmail}</a></td>
    </tr>`
        : ""
    }
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Star Rating:</td>
      <td style="padding: 10px 0; color: #f5b324; font-weight: bold; font-size: 18px;">
        ${starString} (${rating} / 5)
      </td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Companion Availed:</td>
      <td style="padding: 10px 0; color: #e11d74; font-weight: bold;">${companion}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Location:</td>
      <td style="padding: 10px 0; color: #ffffff;">${location}, Hyderabad</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Review Heading:</td>
      <td style="padding: 10px 0; color: #ffffff; font-weight: bold;">${title}</td>
    </tr>
  </table>

  <div style="margin-top: 20px; padding: 18px; background: #1c141d; border-radius: 8px; border-left: 4px solid #f5b324;">
    <strong style="color: #f5b324; display: block; margin-bottom: 8px; font-size: 15px;">Client Review:</strong>
    <p style="margin: 0; color: #e4e4e7; line-height: 1.6; font-size: 14px; font-style: italic;">
      "${review.trim()}"
    </p>
  </div>

  <div style="margin-top: 20px; font-size: 12px; color: #71717a; text-align: center;">
    Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST • Notification sent to ${siteConfig.email}
  </div>
</div>
    `.trim();

    // 1. Send notification to agency management
    await sendNotificationEmail({ subject, text, html });

    // 2. If client email is available, automatically dispatch thank you follow-up message
    if (clientEmail) {
      try {
        await sendClientReviewThankYouEmail({
          to: clientEmail,
          clientName: name,
          companion,
          rating: Number(rating),
        });
        console.log(`✉️ Automated thank-you follow-up email dispatched to: ${clientEmail}`);
      } catch (clientEmailErr) {
        console.error("Failed to send client thank-you auto-reply:", clientEmailErr);
      }
    }

    return NextResponse.json({
      success: true,
      autoReplySent: Boolean(clientEmail),
      message: clientEmail
        ? "Thank you for your valuable review! A confirmation follow-up has been sent to your email."
        : "Thank you for your valuable review! Your feedback has been sent directly to management.",
    });
  } catch (error) {
    console.error("Review submission API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit review. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
