import Link from "next/link";
import Hero from "./Hero/Hero";
import Metadata from "./Metadata/ProjectMetadata";
import Overview from "./Overview/Overview";
import Contributions from "./Contributions/Contributions";
import Technologies from "./Technologies/Technologies";
import Gallery from "./Gallery/Gallery";
import Challenges from "./Challenges/Challenges";
import LessonsLearned from "./LessonsLearned/LessonsLearned";

export default function Home() {
    return(
            <main>
            <Link href = "/?skipIntro=true" className ="fixed top-6 left-6 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 
                bg-black/40 backdrop-blur-md text-xs tracking-[0.3em] text-white/50 transition-all duration-300 hover:text-white hover:border-white/30 
                hover:bg-white/5 hover:scale-[1.03]"> ← EXIT DOSSIER</Link>
                <Hero/>
                <Metadata/>
                <Overview/>
                <Contributions/>
                <Challenges/>
                <Technologies/>
                <Gallery/>
                <LessonsLearned/>
            </main>
    );
}