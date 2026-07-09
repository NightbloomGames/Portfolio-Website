"use client";

import { useState } from "react";
import IntroScreen from "./components/intro/IntroScreen";
import Portfolio from "./components/Portfolio/Portfolio";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-black">

      {/* INTRO */}
      {!introComplete && (
        <div className="fixed inset-0 z-50">
          <IntroScreen
            onComplete={() => {
              console.log("INTRO FINISHED");
              setIntroComplete(true);
            }}
          />
        </div>
      )}


      {/* PORTFOLIO */}
      <div
        className={`
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

    </main>
  );
}