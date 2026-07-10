import Link from "next/link";
import Hero from "./Hero/Hero";

export default function Home() {
    return(
            <main>
            <Link href = "/" className ="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 
            bg-black/40 backdrop-blur-md text-xs tracking-[0.3em] text-white/50 transition-all duration-300 hover:text-white hover:border-white/30 
            hover:bg-white/5 hover:scale-[1.03]"> ← RETURN</Link>

            <Hero/>
            </main>
    );
}