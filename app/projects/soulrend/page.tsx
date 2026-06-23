import Link from "next/link";

export default function SoulrendPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Link href = "/" className ="fixed left-6 top-6 z-50 inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-4 py-2 text-xs 
      tracking-[0.3em] text-white/60 backdrop-blur-md transition hover:text-white hover:border-white/30 hover:bg-white/10"> ← RETURN</Link>
      
      {/* HERO */}
      <section className = "relative flex min-h-screen flex-col items-center justify-center text-center px-8 overflow-hidden">
          {/* spotlight background */}
          <div className ="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] h-[700px] w-[700px] rounded-full blur-3xl 
          bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.45)_0%,rgba(147,51,234,0.10)_45%,transparent_75%)]"/>
          <img src = "/SoulrendLogo.png" className="w-[500px] relative z-10"/>
          <p className = "mt-8 max-w-2xl text-white/70 text-xl relative z-10"> A Soulslike action RPG focused on aggressive,
            risk-versus-reward combat and stance-driven gameplay.</p>

      </section>

      {/* DESIGN INTENT */}
      <section className="mx-auto max-w-4xl px-8 py-32 border-t border-white/5">
        <h2 className="text-4xl font-bold"> Design Intent</h2>
        <p className="mt-6 text-white/70 leading-8">
          Soulrend was built around one idea: reward commitment.
          I wanted combat where hesitation feels dangerous, and
          aggression becomes a calculated risk rather than button mashing.
        </p>
      </section>

      {/* CORE SYSTEM */}
      <section className="mx-auto max-w-4xl px-8 py-32 border-t border-white/5">
        <h2 className="text-4xl font-bold">Core System: Scales of Ruin</h2>

        <div className="mt-10 space-y-6 text-white/70 leading-8">
          <p>
            The combat system is built around two states: Judgement and Rend.
          </p>

          <p>
            Judgement represents control and precision—your neutral stance.
          </p>

          <p>
            Rend shifts the player into high-risk aggression, increasing damage
            output at the cost of survivability.
          </p>
        </div>
      </section>

      {/* SYSTEM CARDS */}
      <section className="mx-auto max-w-6xl px-8 py-32">
        <h2 className="text-4xl font-bold mb-12">Supporting Systems</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="border border-white/10 bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Parry System</h3>
            <p className="mt-3 text-white/70">
              High-risk timing mechanic that rewards precision over defense.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Enemy Design</h3>
            <p className="mt-3 text-white/70">
              Enemies are designed to punish passive play and reward aggression.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}