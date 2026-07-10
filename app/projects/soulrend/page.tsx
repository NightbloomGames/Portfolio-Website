import Hero from "./components/Hero";
import Overview from "./components/Overview";
import ProjectInfo from "./components/ProjectInfo";
import Systems from "./components/Systems";
import Link from "next/link";

export default function SoulrendPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Link href = "/?skipIntro=true" className ="fixed left-6 top-6 z-50 inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/40 px-4
       py-2 text-xs tracking-[0.3em] text-white/60 backdrop-blur-md transition hover:text-white hover:border-white/30 hover:bg-white/10"> ← RETURN</Link>
      
      {/* HERO */}
      <Hero/>
      {/* DESIGN INTENT */}
      <Overview/>
      {/* ================= SCALES OF RUIN ================= */}
      <Systems/>
      {/* SYSTEM CARDS */}
      <ProjectInfo/>

    </main>
  );
}