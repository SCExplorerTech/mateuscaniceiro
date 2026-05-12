import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
        }}
      >
        {/* Mic body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
          }}
        >
          <div
            style={{
              width: "9px",
              height: "13px",
              background: "#e11d48",
              borderRadius: "5px",
            }}
          />
          <div
            style={{
              width: "15px",
              height: "7px",
              border: "2px solid #e11d48",
              borderTop: "none",
              borderRadius: "0 0 8px 8px",
              marginTop: "-1px",
            }}
          />
          <div
            style={{
              width: "2px",
              height: "4px",
              background: "#e11d48",
            }}
          />
          <div
            style={{
              width: "9px",
              height: "2px",
              background: "#e11d48",
              borderRadius: "1px",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
