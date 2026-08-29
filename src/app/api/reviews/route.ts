import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";
import { siteConfig } from "@/config/site";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name = "Verified Client",
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

    const starString = "★".repeat(Number(rating)) + "☆".repeat(Math.max(0, 5 - Number(rating)));

    const subject = `⭐ New Client Review (${rating}/5 Stars) from ${name} for ${companion} - ${siteConfig.siteName}`;
    const text = `
You have received a new Client Review on your website:

• Client Name / Alias: ${name}
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

    await sendNotificationEmail({ subject, text, html });

    return NextResponse.json({
      success: true,
      message: "Thank you for your valuable review! Your feedback has been sent directly to management.",
    });
  } catch (error) {
    console.error("Review submission API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit review. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
