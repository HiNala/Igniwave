import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("email" in body) ||
    typeof (body as Record<string, unknown>).email !== "string"
  ) {
    return NextResponse.json({ error: "Missing or invalid email field." }, { status: 400 });
  }

  const email = ((body as Record<string, string>).email).trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  // Optional: forward to an email service if WAITLIST_API_KEY is configured.
  // Supports Resend (https://resend.com) out of the box.
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (apiKey && audienceId) {
    try {
      const res = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, unsubscribed: false }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("[waitlist] Resend error:", res.status, text);
        return NextResponse.json(
          { error: "Failed to add to waitlist. Please try again." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("[waitlist] Network error calling Resend:", err);
      return NextResponse.json(
        { error: "Service unavailable. Please try again later." },
        { status: 503 }
      );
    }
  } else {
    // No email service configured — log for now.
    // Wire RESEND_API_KEY + RESEND_AUDIENCE_ID in Vercel env vars to activate.
    console.log(`[waitlist] New signup: ${email}`);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
