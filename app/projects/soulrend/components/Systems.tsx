export default function Systems() {
    return(
        <section className = "border-t border-white/5 py-36">
  <div className = "mx-auto max-w-7xl px-8">
    <p className = "text-center uppercase tracking-[0.4em] text-purple-300"> Core Combat System</p>
    <h2 className = "mt-4 text-center text-6xl font-bold"> Scales of Ruin</h2>
    <p className = "mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-white/70"> Every encounter revolves around two opposing combat states.
      Mastering when the scales shift is the key to surviving Soulrend.</p>
    <div className = "mt-24 grid gap-12 lg:grid-cols-[1fr_auto_1fr] items-center">
      {/* JUDGEMENT */}
      <div className = "rounded-2xl border border-purple-500/30 bg-purple-500/5 p-10 backdrop-blur-md">
        <p className = "text-5xl text-center">⚖</p>
        <h3 className = "mt-6 text-center text-3xl font-bold text-purple-300"> Judgement</h3>
        <ul className = "mt-8 space-y-4 text-center text-white/70"> 
          <li> Precision</li>
          <li> Control</li>
          <li> Patience</li>
          <li> Neutral Combat State</li>
        </ul>
      </div>
      {/* CENTER */}
      <div className = "text-center">
        <div className = "text-7xl text-white/30"> ⇄</div>
        <p className = "mt-4 text-sm uppercase tracking-[0.35em] text-white/40"> Shift</p>
      </div>
      {/* REND */}
      <div className = "rounded-2xl border border-red-500/30 bg-red-500/5 p-10 backdrop-blur-md">
        <p className = "text-5xl text-center"> ☠</p>
        <h3 className = "mt-6 text-center text-3xl font-bold text-red-300"> Rend</h3>
        <ul className = "mt-8 space-y-4 text-center text-white/70">
          <li> Aggression</li>
          <li> Higher Damage</li>
          <li> Lifesteal</li>
          <li> Higher Risk</li>
        </ul>
      </div>

    </div>
    <p className = "mx-auto mt-20 max-w-4xl text-center text-lg leading-9 text-white/70"> Rather than rewarding passive defense, Soulrend encourages players 
    to commit to aggressive combat. Entering Rend dramatically increases offensive potential while making every mistake more punishing, creating a constant tension between control and risk.</p>
  </div>
</section>
    )
}