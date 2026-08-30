import { NextResponse } from "next/server";

export const dynamic = "force-static";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "scratch", "visitor_stats.json");

// Read or initialize persistent visitor stats
function getStats() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch {}
  
  return {
    totalVisits: 28450,
    lastUpdated: new Date().toISOString(),
  };
}

function saveStats(stats: { totalVisits: number; lastUpdated: string }) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(stats, null, 2));
  } catch {}
}

export async function GET() {
  const stats = getStats();
  return NextResponse.json({
    success: true,
    totalVisits: stats.totalVisits,
    lastUpdated: stats.lastUpdated,
  });
}

export async function POST() {
  const stats = getStats();
  stats.totalVisits += 1;
  stats.lastUpdated = new Date().toISOString();
  saveStats(stats);

  return NextResponse.json({
    success: true,
    totalVisits: stats.totalVisits,
    lastUpdated: stats.lastUpdated,
  });
}
