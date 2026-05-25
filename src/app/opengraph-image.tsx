import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Top red bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#e11d48",
            display: "flex",
          }}
        />

        {/* Red radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "30%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(225,29,72,0.15) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            display: "flex",
          }}
        />

        {/* Tag */}
        <div
          style={{
            display: "flex",
            color: "#e11d48",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Stand Up Comedy • Curitiba
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#ffffff", fontSize: "130px", fontWeight: 900 }}>
            MATEUS
          </span>
          <span style={{ color: "#e11d48", fontSize: "130px", fontWeight: 900 }}>
            CANICEIRO
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.5)",
            fontSize: "26px",
            marginTop: "36px",
          }}
        >
          Show de Stand Up em Evento Corporativo, Bares e Teatros.
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "28px",
            color: "rgba(255,255,255,0.35)",
            fontSize: "20px",
          }}
        >
          <span>+800 shows</span>
          <span>·</span>
          <span>+14 anos de carreira</span>
          <span>·</span>
          <span>mateuscaniceiro.com.br</span>
        </div>

        {/* Bottom right mic icon */}
        <div
          style={{
            position: "absolute",
            right: "100px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            opacity: 0.08,
          }}
        >
          <div
            style={{
              width: "120px",
              height: "180px",
              background: "#ffffff",
              borderRadius: "60px",
              display: "flex",
            }}
          />
          <div
            style={{
              width: "180px",
              height: "90px",
              border: "16px solid #ffffff",
              borderTop: "none",
              borderRadius: "0 0 100px 100px",
              marginTop: "-8px",
              display: "flex",
            }}
          />
          <div style={{ width: "16px", height: "60px", background: "#ffffff", display: "flex" }} />
          <div style={{ width: "100px", height: "16px", background: "#ffffff", borderRadius: "8px", display: "flex" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
