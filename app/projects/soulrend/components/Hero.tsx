import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
      <section className = "relative flex min-h-screen flex-col items-center justify-center text-center px-8 overflow-hidden">
          {/* spotlight background */}
          <div className ="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] h-[700px] w-[700px] rounded-full blur-3xl 
          bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.45)_0%,rgba(147,51,234,0.10)_45%,transparent_75%)]"/>
          <img src = "/SoulrendLogo.png" className="w-[500px] relative z-10"/>
          <p className = "mt-8 max-w-2xl text-white/70 text-xl relative z-10"> A Soulslike action RPG focused on aggressive,
            risk-versus-reward combat and stance-driven gameplay.</p>

      </section>
  );
}