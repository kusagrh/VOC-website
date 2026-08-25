import React from "react";

/**
 * Soft, slow-drifting gradient blobs layered behind hero/CTA content.
 * Pure CSS (transform + blur), so it's essentially free performance-wise
 * compared to a canvas/WebGL aurora, and still reads as "aurora-style".
 */
export default function AuroraBackground({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div
        className="absolute -top-1/4 left-[10%] h-[60vw] max-h-[620px] w-[60vw] max-w-[620px] rounded-full opacity-40 blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, #2fe0c4 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-0 right-[5%] h-[50vw] max-h-[560px] w-[50vw] max-w-[560px] rounded-full opacity-30 blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, #8b7ff2 0%, transparent 70%)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] h-[45vw] max-h-[500px] w-[45vw] max-w-[500px] rounded-full opacity-25 blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, #f2a93c 0%, transparent 70%)", animationDelay: "-11s" }}
      />
    </div>
  );
}
