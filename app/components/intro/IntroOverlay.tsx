"use client";

import { useEffect, useState } from "react";

// Minimal IntroOverlay skeleton
export default function IntroOverlay({
  introPhase,
  setIntroPhase,
}: {
  introPhase: "typing" | "loading" | "symbol" | "sweep" | "petals" | "done";
  setIntroPhase: (phase: typeof introPhase) => void;
}) {
  const typingText = "INITIALIZING SYSTEM";
  const [displayText, setDisplayText] = useState("");
  const [progress, setProgress] = useState(0);

  // Typing phase
  useEffect(() => {
    if (introPhase !== "typing") return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(typingText.slice(0, i));
      i++;

      if (i > typingText.length) {
        clearInterval(interval);
        // small delay before moving to loading
        setTimeout(() => setIntroPhase("loading"), 400);
      }
    }, 100); // adjust speed here
    return () => clearInterval(interval);
  }, [introPhase]);

  // Loading phase (percent)
  useEffect(() => {
    if (introPhase !== "loading") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIntroPhase("symbol"), 200); // move to symbol phase
          return 100;
        }
        return prev + 1;
      });
    }, 25); // adjust speed of percent fill
    return () => clearInterval(interval);
  }, [introPhase]);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="relative px-10 py-8 border border-white/30 bg-black/40 backdrop-blur-md rounded-full flex flex-col items-center gap-2">
        {/* Typing text */}
        {introPhase === "typing" && (
          <div className="text-white text-[10px] tracking-[0.3em]">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
        )}

        {/* Loading percent */}
        {introPhase === "loading" && (
          <div className="text-white text-sm tracking-widest">
            {progress}%
          </div>
        )}

        {/* Symbol placeholder */}
        {introPhase === "symbol" && (
          <div className="text-white text-2xl">
            {/* Replace this with your symbol component or SVG */}
            ✦
          </div>
        )}
      </div>
    </div>
  );
}