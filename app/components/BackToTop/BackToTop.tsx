"use client"

import { useEffect, useState} from "react";
export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button onClick={() => document.getElementById("hero")?.scrollIntoView({behavior: "smooth",})} className = {`fixed bottom-8 right-8 z-50 h-14 w-14
            rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-xl text-white/70 transition-all duration-500 hover:scale-110
            hover:text-purple-300 hover:border-purple-400/40 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}>
                 ▲ </button>
    )
}