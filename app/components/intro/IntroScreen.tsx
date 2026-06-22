"use client";

import { useState } from "react";
import RotatingText from "./RotatingText";
import LoadingPanel from "./LoadingPanel";

export default function IntroScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [hideBackground, setHideBackground] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center">
        <RotatingText visible={!hideBackground} />
      </div>

      {/* FOREGROUND PANEL */}
      <LoadingPanel
        onPetalsStart={() => setHideBackground(true)}
        onComplete={onComplete}
      />
    </div>
  );
}