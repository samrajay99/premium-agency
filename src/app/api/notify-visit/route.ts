import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

interface GeoLocationInfo {
  city: string;
  region: string;
  country: string;
  postal?: string;
  lat?: number;
  lon?: number;
  isp?: string;
  org?: string;
  as?: string;
  formatted: string;
}

function isPrivateOrLocalIp(ip: string): boolean {
  if (!ip || ip === "Unknown IP" || ip === "127.0.0.1" || ip === "::1" || ip === "localhost") {
    return true;
  }
  return (
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("172.16.") ||
    ip.startsWith("172.17.") ||
    ip.startsWith("172.18.") ||
    ip.startsWith("172.19.") ||
    ip.startsWith("172.2") ||
    ip.startsWith("172.30.") ||
    ip.startsWith("172.31.") ||
    ip.startsWith("fc00:") ||
    ip.startsWith("fe80:")
  );
}

async function resolveVisitorLocation(
  req: NextRequest,
  clientIp: string,
  clientTimezone?: string
): Promise<GeoLocationInfo> {
  // 1. Check direct Cloud / Edge CDN headers (Vercel, Cloudflare, AWS CloudFront)
  const headerCity = req.headers.get("x-vercel-ip-city") || req.headers.get("cf-ipcity");
  const headerRegion = req.headers.get("x-vercel-ip-country-region") || req.headers.get("cf-region");
  const headerCountry = req.headers.get("x-vercel-ip-country") || req.headers.get("cf-ipcountry");
  const headerLat = req.headers.get("x-vercel-ip-latitude");
  const headerLon = req.headers.get("x-vercel-ip-longitude");

  if (headerCity || headerRegion || headerCountry) {
    const city = headerCity ? decodeURIComponent(headerCity) : "";
    const region = headerRegion ? decodeURIComponent(headerRegion) : "";
    const country = headerCountry ? decodeURIComponent(headerCountry) : "";
    const parts = [city, region, country].filter(Boolean);

    return {
      city: city || "Unknown City",
      region: region || "Unknown Region",
      country: country || "India",
      lat: headerLat ? parseFloat(headerLat) : undefined,
      lon: headerLon ? parseFloat(headerLon) : undefined,
      formatted: parts.join(", ") || "Location Detected via Edge CDN",
    };
  }

  // 2. If valid public IP, dynamically lookup via IP Geolocation APIs
  if (!isPrivateOrLocalIp(clientIp)) {
    // Attempt 1: ip-api.com
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(
        `http://ip-api.com/json/${encodeURIComponent(clientIp)}?fields=status,country,regionName,city,zip,lat,lon,timezone,isp,org,as`,
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.status === "success") {
          const city = data.city || "";
          const region = data.regionName || "";
          const country = data.country || "";
          const parts = [city, region, country].filter(Boolean);

          return {
            city: city || "Unknown City",
            region: region || "Unknown Region",
            country: country || "Unknown Country",
            postal: data.zip || undefined,
            lat: data.lat,
            lon: data.lon,
            isp: data.isp || data.org || undefined,
            org: data.org || undefined,
            as: data.as || undefined,
            formatted: parts.join(", ") || "Dynamic IP Location",
          };
        }
      }
    } catch {
      // Fall through to fallback
    }

    // Attempt 2: ipwho.is fallback
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(`https://ipwho.is/${encodeURIComponent(clientIp)}`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.success) {
          const city = data.city || "";
          const region = data.region || "";
          const country = data.country || "";
          const parts = [city, region, country].filter(Boolean);

          return {
            city: city || "Unknown City",
            region: region || "Unknown Region",
            country: country || "Unknown Country",
            postal: data.postal || undefined,
            lat: data.latitude,
            lon: data.longitude,
            isp: data.connection?.isp || data.connection?.org || undefined,
            org: data.connection?.org || undefined,
            as: data.connection?.asn ? `AS${data.connection.asn}` : undefined,
            formatted: parts.join(", ") || "Dynamic IP Location",
          };
        }
      }
    } catch {
      // Fall through to timezone fallback
    }
  }

  // 3. Private / Localhost / Dev fallback
  if (isPrivateOrLocalIp(clientIp)) {
    return {
      city: "Localhost",
      region: clientTimezone || "Local Development",
      country: "Local Dev",
      formatted: clientTimezone
        ? `Localhost / Dev (${clientTimezone})`
        : "Localhost (Local Development)",
    };
  }

  // 4. Fallback if location cannot be resolved
  return {
    city: "Unknown City",
    region: clientTimezone || "Unknown Region",
    country: "Unknown Country",
    formatted: clientTimezone ? `Location via TZ (${clientTimezone})` : "Undetected Location",
  };
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => ({}));
    const {
      url = "/",
      referrer = "Direct Entry",
      screen = "Unknown",
      viewport = "Unknown",
      pixelRatio = "1x",
      colorDepth = "24-bit",
      orientation = "Unknown",
      deviceMemory = "Standard",
      cpuCores = "Standard",
      touchSupport = "Mouse Only",
      battery = "Not accessible",
      networkType = "Unknown",
      downlink = "N/A",
      rtt = "N/A",
      dataSaver = "Off",
      themePreference = "Dark Theme",
      timezone = "",
      localTime = "",
      language = "",
      languages = "",
      platform = "",
      action = "Website Page Visit",
      timestamp = new Date().toISOString(),
      campaignParams = {},
    } = data;

    const userAgent = req.headers.get("user-agent") || "Unknown Browser";
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-real-ip") ||
      "Unknown IP";

    const location = await resolveVisitorLocation(req, ip, timezone);

    const isAgeGate = action.toLowerCase().includes("18") || action.toLowerCase().includes("age");
    const subject = isAgeGate
      ? `🔞 [18+ Verified Visitor] from ${location.formatted} Entered - ${siteConfig.siteName}`
      : `🌐 [VIP Visitor Alert] New Visit from ${location.formatted} (${url}) - ${siteConfig.siteName}`;

    // Format Campaign / Attribution params if present
    const campaignEntries = Object.entries(campaignParams as Record<string, string>);
    const campaignText = campaignEntries.length > 0
      ? campaignEntries.map(([k, v]) => `${k}=${v}`).join(", ")
      : "Organic / Direct Traffic";

    const googleMapsUrl = location.lat && location.lon
      ? `https://www.google.com/maps?q=${location.lat},${location.lon}`
      : null;

    const text = `
${isAgeGate ? "🔞 VISITOR CONFIRMED 18+ AGE & ENTERED WEBSITE" : "🌐 NEW VISITOR LANDED ON WEBSITE"}

📍 GEOLOCATION & ISP INTELLIGENCE:
• Approx. Location: ${location.formatted}
• City: ${location.city}
• State / Region: ${location.region}
• Country: ${location.country}
• Postal / PIN Code: ${location.postal || "N/A"}
• Visitor IP: ${ip}
• ISP / Network: ${location.isp || "N/A"} ${location.as ? `(${location.as})` : ""}
${googleMapsUrl ? `• Map Pin: ${googleMapsUrl}` : ""}

📱 DEVICE & HARDWARE SPECS:
• Platform / OS: ${platform || "Unknown"}
• Screen Specs: ${screen} (Viewport: ${viewport}, ${pixelRatio} DPR, ${colorDepth}, ${orientation})
• Hardware Specs: ${cpuCores} • ${deviceMemory} • ${touchSupport}
• Battery Status: ${battery}
• Theme Preference: ${themePreference}

⚡ NETWORK & CONNECTION:
• Connection Type: ${networkType}
• Bandwidth Downlink: ${downlink}
• Latency (RTT): ${rtt}
• Data Saver: ${dataSaver}

🎯 VISITOR CONTEXT & ATTRIBUTION:
• Action: ${action}
• Time (IST): ${new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
• Visitor Local Time: ${localTime || "N/A"} (${timezone})
• Visited Page: ${url}
• Traffic Source: ${referrer}
• Campaign Tags: ${campaignText}
• Languages: ${languages || language}
• User Agent: ${userAgent}

Website: ${siteConfig.siteUrl}
Management Email: ${siteConfig.email}
    `.trim();

    const html = `
<div style="font-family: Arial, sans-serif; background-color: #0c080d; color: #f4f4f5; padding: 24px; border-radius: 14px; border: 2px solid ${isAgeGate ? "#22c55e" : "#e11d74"}; max-width: 680px; margin: 0 auto;">
  
  <!-- Header Badge -->
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
    <div style="display: inline-block; padding: 6px 14px; border-radius: 6px; background-color: ${isAgeGate ? "#22c55e" : "#e11d74"}; color: #ffffff; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
      ${isAgeGate ? "🔞 18+ Age Verified & Granted Access" : "🌐 Live VIP Website Visitor"}
    </div>
    <span style="color: #f5b324; font-size: 12px; font-weight: bold;">${new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</span>
  </div>

  <h2 style="color: #f5b324; margin: 0 0 8px 0; font-size: 20px; font-weight: bold;">
    ${isAgeGate ? "Visitor Confirmed 'I am 18 or older'" : "New Visitor Active on Website"}
  </h2>
  
  <p style="color: #d4d4d8; font-size: 14px; margin: 0 0 20px 0;">
    Captured from <strong>${location.formatted}</strong> on <strong>${siteConfig.siteName}</strong>.
  </p>

  <!-- CARD 1: GEOLOCATION & NETWORK -->
  <div style="background-color: #170e19; border: 1px solid #2d1830; border-radius: 10px; padding: 16px; margin-bottom: 14px;">
    <div style="color: #38bdf8; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; border-bottom: 1px solid #2d1830; padding-bottom: 6px;">
      📍 Geolocation &amp; ISP Intelligence
    </div>
    <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa; width: 140px;">Approx. Location:</td>
        <td style="padding: 6px 0; color: #38bdf8; font-weight: bold; font-size: 14px;">📍 ${location.formatted}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa;">City, Region, State:</td>
        <td style="padding: 6px 0; color: #ffffff;">${location.city}, ${location.region} (${location.country})</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa;">Visitor IP Address:</td>
        <td style="padding: 6px 0; color: #22c55e; font-family: monospace; font-weight: bold; font-size: 14px;">${ip}</td>
      </tr>
      ${
        location.isp
          ? `<tr>
        <td style="padding: 6px 0; color: #a1a1aa;">ISP / Provider:</td>
        <td style="padding: 6px 0; color: #ffffff;">${location.isp} ${location.as ? `<span style="color: #a1a1aa;">(${location.as})</span>` : ""}</td>
      </tr>`
          : ""
      }
      ${
        googleMapsUrl
          ? `<tr>
        <td style="padding: 6px 0; color: #a1a1aa;">Approx Map Coordinates:</td>
        <td style="padding: 6px 0;"><a href="${googleMapsUrl}" target="_blank" style="color: #f5b324; text-decoration: underline;">View on Google Maps ↗</a></td>
      </tr>`
          : ""
      }
    </table>
  </div>

  <!-- CARD 2: DEVICE & HARDWARE -->
  <div style="background-color: #170e19; border: 1px solid #2d1830; border-radius: 10px; padding: 16px; margin-bottom: 14px;">
    <div style="color: #f5b324; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; border-bottom: 1px solid #2d1830; padding-bottom: 6px;">
      📱 Device &amp; Hardware Telemetry
    </div>
    <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa; width: 140px;">Platform / OS:</td>
        <td style="padding: 6px 0; color: #ffffff; font-weight: bold;">${platform || "Detected via UserAgent"}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa;">Screen Resolution:</td>
        <td style="padding: 6px 0; color: #ffffff;">${screen} <span style="color: #a1a1aa;">(Viewport: ${viewport}, DPR: ${pixelRatio}, ${colorDepth}, ${orientation})</span></td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa;">Hardware Specs:</td>
        <td style="padding: 6px 0; color: #ffffff;">${cpuCores} • ${deviceMemory} • ${touchSupport}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa;">Battery Status:</td>
        <td style="padding: 6px 0; color: #ffffff;">${battery}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa;">Theme Preference:</td>
        <td style="padding: 6px 0; color: #ffffff;">${themePreference}</td>
      </tr>
    </table>
  </div>

  <!-- CARD 3: NETWORK & TRAFFIC ATTRIBUTION -->
  <div style="background-color: #170e19; border: 1px solid #2d1830; border-radius: 10px; padding: 16px; margin-bottom: 14px;">
    <div style="color: #e11d74; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; border-bottom: 1px solid #2d1830; padding-bottom: 6px;">
      ⚡ Network &amp; Traffic Attribution
    </div>
    <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa; width: 140px;">Page Visited:</td>
        <td style="padding: 6px 0; color: #f5b324; font-weight: bold;"><a href="${url}" style="color: #f5b324; text-decoration: none;">${url}</a></td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa;">Traffic Source:</td>
        <td style="padding: 6px 0; color: #ffffff;">${referrer}</td>
      </tr>
      ${
        campaignEntries.length > 0
          ? `<tr>
        <td style="padding: 6px 0; color: #a1a1aa;">Campaign / UTM:</td>
        <td style="padding: 6px 0; color: #22c55e; font-weight: bold;">${campaignText}</td>
      </tr>`
          : ""
      }
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa;">Network Speed:</td>
        <td style="padding: 6px 0; color: #ffffff;">${networkType} • ${downlink} • ${rtt}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #a1a1aa;">Client Timezone / Lang:</td>
        <td style="padding: 6px 0; color: #ffffff;">${timezone || "N/A"} • ${languages || language}</td>
      </tr>
    </table>
  </div>

  <!-- Browser User Agent -->
  <div style="padding: 12px; background: #070407; border-radius: 8px; font-size: 11px; color: #71717a; word-break: break-all; border: 1px solid #27272a;">
    <strong style="color: #a1a1aa;">User-Agent:</strong> ${userAgent}
  </div>

</div>
    `.trim();

    await sendNotificationEmail({ subject, text, html });

    return NextResponse.json({
      success: true,
      message: "Visit notification triggered",
      location: location.formatted,
    });
  } catch (error) {
    console.error("Visit notification error:", error);
    return NextResponse.json({ success: false, error: "Failed to record visit" }, { status: 500 });
  }
}
