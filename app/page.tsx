"use client";

import { useState } from "react";
import IntroScreen from "./components/intro/IntroScreen";
import Portfolio from "./components/Portfolio/Portfolio";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="relative min-h-screen">

      {/* Portfolio */}
      <div
        className={`
          transition-opacity duration-[2000ms]
          ${introDone ? "opacity-100" : "opacity-0"}
        `}
      >
        <Portfolio />
      </div>

      {/* Intro */}
      {loading && (
        <div className="fixed inset-0 z-50">
          <IntroScreen
            onComplete={() => {
              setIntroDone(true);

              setTimeout(() => {
                setLoading(false);
              }, 1800);
            }}
          />
        </div>
      )}

    </main>
  );
}