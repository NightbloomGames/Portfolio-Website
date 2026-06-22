"use client";

import { useEffect, useState } from "react";
import PetalStorm from "./PetalStorm";

type Phase =
  | "typing"
  | "loading"
  | "erase"
  | "typeWelcome"
  | "symbol"
  | "petals"
  | "fadeOut"
  | "done";

type Props = {
  onComplete: () => void;
  onPetalsStart?: () => void;
};

export default function LoadingPanel({
  onComplete, onPetalsStart
}: Props) {
  const [phase, setPhase] = useState<Phase>("typing");

  const [currentText, setCurrentText] = useState("");
  const [progress, setProgress] = useState(0);

  const [petalCount, setPetalCount] = useState(0);
  const [coverOpacity, setCoverOpacity] = useState(0);

  // =====================
  // Typing
  // =====================

  useEffect(() => {
    if (phase !== "typing") return;

    const target = "INITIALIZING • 0%";
    let i = 0;

    const interval = setInterval(() => {
      setCurrentText(target.slice(0, i + 1));
      i++;

      if (i >= target.length) {
        clearInterval(interval);

        setTimeout(() => {
          setPhase("loading");
        }, 250);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [phase]);

  // =====================
  // Loading
  // =====================

  useEffect(() => {
    if (phase !== "loading") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        setCurrentText(
          `INITIALIZING • ${next}%`
        );

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setPhase("erase");
          }, 300);

          return 100;
        }

        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [phase]);

  // =====================
  // Erase
  // =====================

  useEffect(() => {
    if (phase !== "erase") return;

    let text = currentText;

    const interval = setInterval(() => {
      text = text.slice(0, -1);

      setCurrentText(text);

      if (text.length === 0) {
        clearInterval(interval);
        setPhase("typeWelcome");
      }
    }, 35);

    return () => clearInterval(interval);
  }, [phase]);

  // =====================
  // Welcome
  // =====================

  useEffect(() => {
    if (phase !== "typeWelcome") return;

    const target = "WELCOME, TRAVELLER";
    let i = 0;

    const interval = setInterval(() => {
      setCurrentText(
        target.slice(0, i + 1)
      );

      i++;

      if (i >= target.length) {
        clearInterval(interval);

        setTimeout(() => {
          setPhase("symbol");
        }, 800);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [phase]);

  // =====================
  // Symbol pause
  // =====================

  useEffect(() => {
    if (phase !== "symbol") return;

    const timer = setTimeout(() => {
      setPhase("petals");
    }, 500);

    return () => clearTimeout(timer);
  }, [phase]);

  // =====================
  // Petal Storm
  // =====================

  useEffect(() => {
    if (phase !== "petals") return;
    onPetalsStart?.();
    let count = 0;

    const interval = setInterval(() => {
      count += 15 + Math.floor(count / 6);

      setPetalCount(count);

      setCoverOpacity(
        Math.min(count / 700, 1)
      );

      if (count >= 900) {
        clearInterval(interval);

        // Hold storm briefly
        setTimeout(() => {
          setPhase("fadeOut");
        }, 400);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [phase]);

  // =====================
  // Fade Out
  // =====================

useEffect(() => {
  if (phase !== "fadeOut") return;

  const signalTimer = setTimeout(() => {
    onComplete();
  }, 1200);

  return () => clearTimeout(signalTimer);
}, [phase, onComplete]);

  // =====================
  // Complete
  // =====================

  useEffect(() => {
    if (phase !== "done") return;

    onComplete();
  }, [phase, onComplete]);

  return (
    <div className="relative z-10 flex items-center justify-center overflow-hidden">

      {(phase === "petals" ||
        phase === "fadeOut") && (
        <PetalStorm
          count={petalCount}
          opacity={coverOpacity}
          fading={phase === "fadeOut"}
        />
      )}

      <div
        className={`
          relative
          px-12 py-8
          border border-white/30
          bg-black/40
          backdrop-blur-md
          rounded-full

          min-h-[90px]
          min-w-[420px]

          flex items-center justify-center
          text-center

          transition-all duration-[700ms]

          ${
            phase === "fadeOut"
              ? "opacity-0 scale-95 blur-md"
              : "opacity-100 scale-100"
          }
        `}
      >
        {/* Corners */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-white/60" />
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-white/60" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-white/60" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-white/60" />

        <div className="text-[20px] tracking-[0.15em] text-white/70">

          {[
            "typing",
            "loading",
            "erase",
            "typeWelcome",
          ].includes(phase) ? (
            <span>
              {currentText}
              <span className="cursor-blink font-bold">
                |
              </span>
            </span>
          ) : (
            <div className="flex items-center justify-center gap-6">
              <span>{currentText}</span>

              <span className="text-3xl animate-pulse">
                ✦
              </span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}