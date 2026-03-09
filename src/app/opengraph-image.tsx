import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Igniwave | Wellness Intelligence Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1B3A2D 0%, #2a5242 50%, #4A7C5C 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#4A7C5C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#A8D5BA" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="#A8D5BA" />
            </svg>
          </div>
          <span style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: "700", letterSpacing: "-0.5px" }}>
            Igniwave
          </span>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            color: "#A8D5BA",
            fontSize: "16px",
            fontWeight: "600",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Privacy-First Wellness Intelligence
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "64px",
            fontWeight: "800",
            lineHeight: "1.1",
            letterSpacing: "-1.5px",
            maxWidth: "800px",
            marginBottom: "32px",
          }}
        >
          Your Health Story,{" "}
          <span style={{ color: "#A8D5BA" }}>Intelligently Told</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "rgba(255,255,255,0.70)",
            fontSize: "22px",
            lineHeight: "1.5",
            maxWidth: "700px",
          }}
        >
          Connect your wearables. See meaningful insights. Share with your care
          team — fully on your terms.
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: "absolute",
            bottom: "72px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(168,213,186,0.15)",
            border: "1px solid rgba(168,213,186,0.3)",
            borderRadius: "100px",
            padding: "10px 20px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#A8D5BA",
            }}
          />
          <span style={{ color: "#A8D5BA", fontSize: "15px", fontWeight: "600" }}>
            matt-site-ten.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
