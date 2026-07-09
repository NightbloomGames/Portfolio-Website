"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import IntroScreen from "./components/intro/IntroScreen";
import Portfolio from "./components/Portfolio/Portfolio";

export default function Home() {
  const searchParams = useSearchParams();

  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const skipIntro =
      searchParams.get("skipIntro") === "true";

    if (skipIntro) {
      setIntroComplete(true);
    } else {
      setShowIntro(true);
    }
  }, [searchParams]);

  return (
    <main className="relative min-h-screen bg-black">

      {/* Portfolio */}
      <div
        className ={`
          transition-opacity duration-1000
          ${
            introComplete
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <Portfolio />
      </div>

      {/* Intro */}
      {showIntro && (
        <div className="fixed inset-0 z-50">
          <IntroScreen
            onComplete={() => {
              setShowIntro(false);
              setIntroComplete(true);
            }}
          />
        </div>
      )}

    </main>
  );
}