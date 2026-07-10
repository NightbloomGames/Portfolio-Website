"use client";

import { useEffect, useState } from "react";

interface Props {
    text: string;
    className?: string;
}

export default function AnomalyText({
    text,
    className = "",
}: Props) {

    const [subtitle, setSubtitle] = useState("");

    useEffect(() => {

        const warnings = [
    "SYSTEM FAILURE",
    "ANOMALY DETECTED",
    "REALITY CORRUPTED",
    "SIMULATION UNSTABLE",
    "PUZZLE COMPROMISED",
    "UNEXPECTED OUTCOME",
];

        const interval = setInterval(() => {

            // ~18% chance every 15 seconds
            if (Math.random() > 0.18) return;

            const randomWarning =
                warnings[Math.floor(Math.random() * warnings.length)];

            setSubtitle(randomWarning);

            setTimeout(() => {
                setSubtitle("");
            }, 900);

        }, 15000);

        return () => clearInterval(interval);

    }, []);

    return (
    <div className={className}>
        <div>{text}</div>

        <div className={`overflow-hidden transition-all duration-300 text-sm tracking-[0.45em] text-amber-400 ${subtitle ? "max-h-10 opacity-100 mt-2"
                        : "max-h-0 opacity-0"}`}>
                            <div className = "flex items-center gap-2">
                                <span className = "text-amber-300">{">"}</span>
                                <span className = "tracking-[0.45em]">
        {subtitle}
    </span>
</div>
        </div>
    </div>
);
}