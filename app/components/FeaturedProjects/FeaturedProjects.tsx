import Link from "next/link";

export default function SoulrendShowcase() {
  return (
    <section id = "featured-projects" className = "min-h-screen flex items-center justify-center px-8 py-40">
      <div className = "max-w-6xl w-full">
        {/* Artwork */}
        <div className = "relative overflow-hidden rounded-3xl border border-white/10">
        <div className = "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
          <img src = "/SoulrendScreenshot.png" alt = "Soulrend" className = "h-full w-full object-cover object-top"/>
        </div>
        {/* Information */}
        <div className = "rounded-b-3xl border-x border-b border-white/10 bg-black/60 backdrop-blur-md p-10">
          <p className = "uppercase tracking-[0.4em] text-purple-300"> Featured Project</p>
          <h2 className = "mt-6 text-7xl font-bold leading-tight"> Soulrend: <br/> The Death of Life</h2>
          <p className = "mt-6 max-w-3xl text-lg leading-8 text-white/70"> A Soulslike action RPG exploring aggressive combat, risk-driven decision making, and the fragile balance between control
          and chaos.</p>
          {/* Tags */}
          <div className = "mt-10 grid grid-cols-3 gap-6">
              <div>
              <p className = "text-sm uppercase tracking-widget text-white/40"> Status</p>
              <p className = "mt-2 text-white/80"> ● In Development</p>
              </div>

              <div>
              <p className = "text-sm uppercase tracking-widget text-white/40"> Engine</p>
              <p className = "mt-2 text-white/80"> ● Unreal Engine 5</p>
              </div>

              <div>
              <p className = "text-sm uppercase tracking-widget text-white/40"> Language</p>
              <p className = "mt-2 text-white/80"> ● C++</p>
              </div>

              </div>
            <Link href = "/projects/soulrend" className = "mt-12 inline-flex rounded-full border border-white/20 px-8 py-3 transition hover:bg-white/10"> 
            Enter Dossier →</Link>
          </div>
        </div>
  
    </section>
  );
}