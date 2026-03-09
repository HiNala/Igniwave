import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const ipLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  ipLog.set(ip, [...timestamps, now]);
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;

  // Honeypot check
  if (typeof payload.website === "string" && payload.website.length > 0) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const role = typeof payload.role === "string" ? payload.role.trim() : "";

  if (!name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 422 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Please enter a message (at least 10 characters)." },
      { status: 422 }
    );
  }

  // Optional: forward to Resend if configured
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL;

  if (apiKey && notifyEmail) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Igniwave Contact <no-reply@igniwave.com>",
          to: [notifyEmail],
          subject: `Contact form: ${name} (${role || "unknown role"})`,
          text: `Name: ${name}\nEmail: ${email}\nRole: ${role || "—"}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("[contact] Resend error:", res.status, text);
      }
    } catch (err) {
      console.error("[contact] Resend network error:", err);
    }
  } else {
    console.log(`[contact] New submission from ${name} <${email}> (${role || "—"}): ${message}`);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
