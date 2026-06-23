"use client";

import { useState } from "react";

export default function ProjectInfo() {
  const milestones = [
    {
      icon: "📖",
      title: "Research",
      text: "Studied the combat philosophies behind Dark Souls, Sekiro, Lies of P, and The First Berserker: Khazan to understand how risk, timing, and player commitment create satisfying melee combat.",
    },
    {
      icon: "⚒",
      title: "Forging the Vision",
      text: "Experimented with multiple weapon concepts, combat mechanics, and gameplay ideas before establishing Soulrend's identity around aggressive, stance-driven combat.",
    },
    {
      icon: "⚖",
      title: "Scales of Ruin",
      text: "Developed the game's signature combat mechanic, balancing Judgement and Rend to create a system that rewards calculated aggression over passive defense.",
    },
    {
      icon: "🌸",
      title: "The Journey Continues",
      text: "Soulrend remains an active personal project as new enemies, mechanics, environments, and gameplay systems continue to evolve through iteration.",
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className = "mx-auto max-w-7xl px-8 py-40">
      {/* HEADER */}
      <p className = "text-center uppercase tracking-[0.4em] text-purple-300"> Forged Through Iteration</p>
      <h2 className="mt-5 text-center text-6xl font-bold">
        Every mechanic has a story.
      </h2>
      <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-white/70">
        Soulrend wasn't built in a straight line.
        Each iteration refined the game's combat philosophy,
        transforming scattered ideas into a focused gameplay experience.
      </p>
      {/* TIMELINE */}
      <div className="relative mt-28">
        <p className="mb-12 text-center text-xs uppercase tracking-[0.35em] text-white/40">
          ACCESS ARCHIVED DEVELOPMENT LOGS
        </p>
        <div className="absolute left-0 right-0 top-16 h-px bg-white/10" />
        <div className="relative flex justify-between">
          {milestones.map((step, index) => (
            <button
              key={step.title}
              onClick={() =>
                setSelected(selected === index ? null : index)
              }
              className="group flex flex-col items-center"
            >
              {/* DIAMOND */}
              <div
                className={`
                  flex h-10 w-10 items-center justify-center
                  rotate-45 border bg-black transition-all duration-300

                  ${
                    selected === index
                      ? "border-purple-300 shadow-[0_0_24px_rgba(168,85,247,0.7)] scale-110"
                      : "border-white/20 group-hover:border-purple-400 group-hover:scale-110"
                  }
                `}
              >
                <span className="-rotate-45 text-lg">
                  {step.icon}
                </span>
              </div>

              {/* LABEL */}
              <p className="mt-6 text-center text-sm uppercase tracking-[0.35em] text-white/60">
                {step.title}
              </p>

              {/* HINT */}
              <p
                className={`
                  mt-2 text-[10px] uppercase tracking-[0.3em]
                  transition-colors

                  ${
                    selected === index
                      ? "text-purple-300"
                      : "text-white/30 group-hover:text-purple-300"
                  }
                `}
              >
                {selected === index ? "DOSSIER OPEN" : "OPEN DOSSIER"}
              </p>

            </button>
          ))}

        </div>

        {/* DOSSIER PANEL */}
        <div
          className={`
            mt-20 overflow-hidden transition-all duration-500
            ${
              selected !== null
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          {selected !== null && (
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">

              {/* subtle top glow line */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

              <p className="text-xs uppercase tracking-[0.35em] text-purple-300">
                ARCHIVED DOSSIER
              </p>

              <div className="mt-8 flex items-start gap-6">

                <div className="text-6xl">
                  {milestones[selected].icon}
                </div>

                <div>
                  <h3 className="text-4xl font-bold">
                    {milestones[selected].title}
                  </h3>

                  <p className="mt-6 max-w-3xl leading-8 text-white/70">
                    {milestones[selected].text}
                  </p>
                </div>

              </div>

            </div>
          )}
        </div>

      </div>

    </section>
  );
}