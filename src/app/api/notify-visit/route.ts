import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";
import { siteConfig } from "@/config/site";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => ({}));
    const { url = "/", referrer = "Direct", screen = "Unknown", timestamp = new Date().toISOString() } = data;

    const userAgent = req.headers.get("user-agent") || "Unknown Browser";
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "Unknown IP";

    const subject = `🚨 New Website Visitor Alert - ${siteConfig.siteName}`;
    const text = `
A new visitor has just opened your website:

• Time: ${new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} (IST)
• Page Visited: ${url}
• Referrer: ${referrer}
• Device / Screen: ${screen}
• IP Address: ${ip}
• User Agent: ${userAgent}

Website: ${siteConfig.siteUrl}
    `.trim();

    const html = `
<div style="font-family: Arial, sans-serif; background-color: #0f0a10; color: #f4f4f5; padding: 24px; border-radius: 12px; border: 1px solid #e11d74;">
  <h2 style="color: #f5b324; margin-top: 0;">🚨 New Website Visitor Alert</h2>
  <p style="color: #e4e4e7; font-size: 15px;">A new visitor has just landed on <strong>${siteConfig.siteName}</strong>.</p>
  
  <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 8px 0; color: #a1a1aa;">Time (IST):</td>
      <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 8px 0; color: #a1a1aa;">Page Visited:</td>
      <td style="padding: 8px 0; color: #f5b324; font-weight: bold;">${url}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 8px 0; color: #a1a1aa;">Traffic Source:</td>
      <td style="padding: 8px 0; color: #ffffff;">${referrer}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 8px 0; color: #a1a1aa;">Device / Screen:</td>
      <td style="padding: 8px 0; color: #ffffff;">${screen}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 8px 0; color: #a1a1aa;">IP Address:</td>
      <td style="padding: 8px 0; color: #ffffff;">${ip}</td>
    </tr>
  </table>

  <div style="margin-top: 20px; padding: 12px; background: #1c141d; border-radius: 8px; font-size: 12px; color: #71717a;">
    User Agent: ${userAgent}
  </div>
</div>
    `.trim();

    await sendNotificationEmail({ subject, text, html });

    return NextResponse.json({ success: true, message: "Visit recorded" });
  } catch (error) {
    console.error("Visit notification error:", error);
    return NextResponse.json({ success: false, error: "Failed to record visit" }, { status: 500 });
  }
}
