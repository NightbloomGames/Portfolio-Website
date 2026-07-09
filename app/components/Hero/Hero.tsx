export default function Hero() {
  return (
    <section className = "flex h-screen items-center justify-center px-24">
      <div className = "relative flex items-center justify-center w-full">

        {/* Hero Card */}
        <div className = "relative max-w-2xl rounded-2xl border border-white/10 bg-purple-500/[0.03] backdrop-blur-md p-10">
          <p className = "mb-4 text-sm tracking-[0.4em] text-purple-300 uppercase"> Gameplay Programmer</p>
          <h1 className = "text-7xl font-bold leading-none"> Jacob</h1>
          <h2 className = "mt-3 text-3xl text-white/70"> Building immersive gameplay systems</h2>
          <p className = "mt-8 max-w-xl text-lg leading-8 text-white/60"> I'm a game development student specializing in gameplay programming and combat systems, with a passion for creating
            engaging and rewarding player experiences in Unreal Engine 5.</p>
          <div className = "mt-12 flex gap-5">
            <button onClick={() => {document.getElementById("featured-projects") ?.scrollIntoView({behavior: "smooth",}); }} className ="rounded-full border border-purple-400 bg-purple-500/20 
            px-8 py-3 transition hover:bg-purple-500/30"> View Projects</button>
            <a href = "/Flat2VR Studios Resume.pdf" target = "_blank" rel = "noopener noreferrer" className = "rounded-full border border-white/20 px-8 py-3 transition hover:bg-white/10"> 
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