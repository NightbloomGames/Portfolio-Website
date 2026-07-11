"use client"

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import IntroScreen from "../intro/IntroScreen";
import Portfolio from "..//Portfolio/Portfolio";

export default function HomeContent() {
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
    <main className = "relative min-h-screen bg-black">

      {/* Portfolio */}
      <div className = {`transition-all duration-[1800ms] ease-out ${introComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}><Portfolio/>
      </div>

      {/* Intro */}
      {showIntro && (<div className = "fixed inset-0 z-50"> <IntroScreen onComplete = {() => {setShowIntro(false); setIntroComplete(true);}}/></div>
      )}

    </main>
  );
}