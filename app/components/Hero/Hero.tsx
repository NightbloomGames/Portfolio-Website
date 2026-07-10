export default function Hero() {
  return (
    <section id = "hero" className = "flex min-h-screen items-center justify-center px-24">
      <div className = "relative flex items-center justify-center w-full">

        {/* Hero Card */}
        <div className = "relative max-w-2xl rounded-2xl border border-white/10 bg-purple-500/[0.03] backdrop-blur-md p-10">
        <p className = "mb-4 text-sm tracking-[0.4em] text-purple-300 uppercase"> Nightbloom Voidstar</p>
          <h1 className = "text-7xl font-bold leading-none"> Jacob</h1>
          <h2 className = "mt-3 text-3xl text-white/70"> Gameplay Programmer <br/> Systems Designer</h2>
          <div className = "mt-5 flex items-center gap-3">
            <span className = "relative flex h-3 w-3">
              <span className = "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className = "relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
            </span>
            <p className = "text-sm uppercase tracking-[0.3em] text-emerald-300"> Currently Developing Soulrend</p>
            </div>
          <p className = "mt-8 max-w-xl text-lg leading-8 text-white/60"> I create interactive experiences through gameplay programming, combat systems, 
          and thoughtful design. My work focuses on building mechanics that feel responsive, rewarding, and memorable.</p>
          
          <div className = "mt-12 flex gap-5">
            <button onClick={() => {document.getElementById("featured-projects") ?.scrollIntoView({behavior: "smooth",}); }} className ="rounded-full border
            border-purple-400 bg-purple-500/20 px-8 py-3 transition hover:bg-purple-500/30 hover:scale-105 active:scale-95 transition-all 
            duration-300"> Explore Projects</button>
            <a href = "/Flat2VR Studios Resume.pdf" target = "_blank" rel = "noopener noreferrer" className ="rounded-full border border-white/20 px-8 py-3
            transition hover:bg-white/10"> 
            Resume ↗</a>
          </div>

          {/* Corner Decorations */}
          <div className = "absolute -top-2 -left-2 w-6 h-6 border-t border-l border-white/50" />
          <div className = "absolute -top-2 -right-2 w-6 h-6 border-t border-r border-white/50" />
          <div className = "absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-white/50" />
          <div className = "absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-white/50" />
        </div>

      </div>
    </section>
  );
}