import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name = "",
      phone = "",
      email = "",
      companion = "General Enquiry",
      location = "",
      serviceType = "Outcall",
      preferredTime = "Immediate / Flexible",
      message = "",
    } = body;

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { success: false, error: "Please provide your name and contact number/email." },
        { status: 400 }
      );
    }

    const subject = `💌 New Booking Enquiry from ${name} (${phone || email}) - ${siteConfig.siteName}`;
    const text = `
You have received a new contact / booking message from your website:

• Client Name: ${name}
• Phone / WhatsApp: ${phone}
• Client Email: ${email || "Not provided"}
• Requested Companion: ${companion}
• Location / Area: ${location}
• Service Type: ${serviceType}
• Preferred Time: ${preferredTime}

Message / Special Request:
"${message || "No additional message provided"}"

Time: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
    `.trim();

    const html = `
<div style="font-family: Arial, sans-serif; background-color: #0f0a10; color: #f4f4f5; padding: 24px; border-radius: 12px; border: 2px solid #e11d74;">
  <h2 style="color: #f5b324; margin-top: 0;">💌 New Booking &amp; Contact Enquiry</h2>
  <p style="color: #e4e4e7; font-size: 15px;">A client has submitted a booking request on <strong>${siteConfig.siteName}</strong>.</p>
  
  <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa; width: 160px;">Client Name:</td>
      <td style="padding: 10px 0; color: #ffffff; font-weight: bold; font-size: 16px;">${name}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Phone / WhatsApp:</td>
      <td style="padding: 10px 0; color: #22c55e; font-weight: bold; font-size: 16px;">
        <a href="tel:+91${phone}" style="color: #22c55e; text-decoration: none;">📞 ${phone}</a> | 
        <a href="https://wa.me/91${phone.replace(/[^0-9]/g, '')}" style="color: #22c55e; text-decoration: none;">💬 WhatsApp</a>
      </td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Client Email:</td>
      <td style="padding: 10px 0; color: #ffffff;">${email ? `<a href="mailto:${email}" style="color: #f5b324;">${email}</a>` : "Not provided"}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Requested Model:</td>
      <td style="padding: 10px 0; color: #f5b324; font-weight: bold;">${companion}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Location / Area:</td>
      <td style="padding: 10px 0; color: #ffffff;">${location}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Service Type:</td>
      <td style="padding: 10px 0; color: #ffffff;">${serviceType}</td>
    </tr>
    <tr style="border-bottom: 1px solid #27272a;">
      <td style="padding: 10px 0; color: #a1a1aa;">Preferred Time:</td>
      <td style="padding: 10px 0; color: #ffffff;">${preferredTime}</td>
    </tr>
  </table>

  <div style="margin-top: 20px; padding: 16px; background: #1c141d; border-radius: 8px; border-left: 4px solid #e11d74;">
    <strong style="color: #f5b324; display: block; margin-bottom: 6px;">Client Message:</strong>
    <p style="margin: 0; color: #e4e4e7; line-height: 1.5; font-style: italic;">
      "${message || "No specific comments provided."}"
    </p>
  </div>
</div>
    `.trim();

    await sendNotificationEmail({ subject, text, html });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent to our management. We will contact you shortly!",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please call or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
