"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
        setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
        window.removeEventListener("scroll", onScroll);
}, []);

    return (
        <nav className = {`fixed left-1/2 -translate-x-1/2 z-50 flex items-center gap-10 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl
            shadow-[0_0_30px_rgba(168,85,247,0.08)] transition-all duration-500 ease-out ${scrolled ? "top-3 px-6 py-3" : "top-6 px-8 py-4"}`}>
            {/* Name */}
            <div className = "pr-6 border-r border-white/10">
                <p className = "font-semibold tracking-wide"> Jacob</p>
                <p className = "text-xs text-white/50 uppercase tracking-[0.25em]"> Gameplay Programmer</p>
            </div>
            {/* Navigation */}
            <button className = "transition-colors duration-300 text-white/70 hover:text-purple-300" onClick={() => 
            document.getElementById("featured-projects") ?.scrollIntoView({behavior: "smooth",})}> Projects </button>
            <button className = "transition-colors duration-300 text-white/70 hover:text-purple-300" onClick={() => 
            document.getElementById("experience") ?.scrollIntoView({behavior: "smooth",})}> Experience</button>
            <button className = "transition-colors duration-300 text-white/70 hover:text-purple-300" onClick={() => 
            document.getElementById("contact") ?.scrollIntoView({behavior: "smooth",})}> Contact</button>
            <a href = "/Flat2VR Studios Resume.pdf" target = "_blank" rel = "noopener noreferrer" className ="transition-colors duration-300 text-white/70
            hover:text-purple-300"> Resume ↗</a>
        </nav>
    );
}