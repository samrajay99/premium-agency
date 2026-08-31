import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => ({}));
    const {
      url = "/",
      referrer = "Direct Entry",
      screen = "Unknown",
      action = "Website Page Visit",
      timestamp = new Date().toISOString(),
    } = data;

    const userAgent = req.headers.get("user-agent") || "Unknown Browser";
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "Unknown IP";

    const city =
      req.headers.get("x-vercel-ip-city") ||
      req.headers.get("cf-ipcity") ||
      "Hyderabad / India Region";

    const country =
      req.headers.get("x-vercel-ip-country") ||
      req.headers.get("cf-ipcountry") ||
      "India";

    const isAgeGate = action.toLowerCase().includes("18") || action.toLowerCase().includes("age");
    const subject = isAgeGate
      ? `🔞 [18+ Verified User Alert] Visitor Entered Site - ${siteConfig.siteName}`
      : `🌐 [Visitor Alert] New Page View (${url}) - ${siteConfig.siteName}`;

    const text = `
${isAgeGate ? "🔞 VISITOR CONFIRMED 18+ AGE & ENTERED WEBSITE" : "🌐 NEW VISITOR LANDED ON WEBSITE"}

• Action: ${action}
• Time: ${new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
• Page Visited: ${url}
• Traffic Source: ${referrer}
• Estimated Location: ${city}, ${country}
• Device / Screen: ${screen}
• IP Address: ${ip}
• User Agent: ${userAgent}

Website: ${siteConfig.siteUrl}
Management Email: ${siteConfig.email}
    `.trim();

    const html = `
<div style="font-family: Arial, sans-serif; background-color: #0f0a10; color: #f4f4f5; padding: 24px; border-radius: 12px; border: 2px solid ${isAgeGate ? "#22c55e" : "#e11d74"};">
  <div style="display: inline-block; padding: 6px 12px; border-radius: 6px; background-color: ${isAgeGate ? "#22c55e" : "#e11d74"}; color: #ffffff; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 12px;">
    ${isAgeGate ? "🔞 18+ Age Verified & Accepted" : "🌐 Live Website Visit"}
  </div>

  <h2 style="color: #f5b324; margin-top: 0; font-size: 20px;">
    ${isAgeGate ? "Visitor Confirmed 'I am 18 or older'" : "New Visitor Landed on Website"}
  </h2>

  <p style="color: #e4e4e7; font-size: 14px; margin-bottom: 16px;">
    A visitor has interacted with <strong>${siteConfig.siteName}</strong>. Details captured below:
  </p>

  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa; width: 150px;">Trigger Action:</td>
      <td style="padding: 10px 0; color: ${isAgeGate ? "#22c55e" : "#f5b324"}; font-weight: bold;">${action}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Time (IST):</td>
      <td style="padding: 10px 0; color: #ffffff; font-weight: bold;">${new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Page Visited:</td>
      <td style="padding: 10px 0; color: #f5b324; font-weight: bold;"><a href="${url}" style="color: #f5b324; text-decoration: none;">${url}</a></td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Traffic Source:</td>
      <td style="padding: 10px 0; color: #ffffff;">${referrer}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Approx. Location:</td>
      <td style="padding: 10px 0; color: #ffffff;">${city}, ${country}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Device / Screen:</td>
      <td style="padding: 10px 0; color: #ffffff;">${screen}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Visitor IP Address:</td>
      <td style="padding: 10px 0; color: #22c55e; font-family: monospace; font-size: 15px;">${ip}</td>
    </tr>
  </table>

  <div style="margin-top: 20px; padding: 12px; background: #1c141d; border-radius: 8px; font-size: 11px; color: #a1a1aa; word-break: break-all;">
    <strong>Browser User-Agent:</strong> ${userAgent}
  </div>
</div>
    `.trim();

    await sendNotificationEmail({ subject, text, html });

    return NextResponse.json({ success: true, message: "Visit notification triggered" });
  } catch (error) {
    console.error("Visit notification error:", error);
    return NextResponse.json({ success: false, error: "Failed to record visit" }, { status: 500 });
  }
}
