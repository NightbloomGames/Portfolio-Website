import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className = "relative flex min-h-screen flex-col items-center justify-center px-8">

      <Link href = "/"className = "absolute left-8 top-8 text-white/60 hover:text-white"> ← Return</Link>

      <Image src = "/SoulrendLogo.png" alt = "Soulrend" width = {550} height = {250}/>
      <p className = "mt-8 max-w-2xl text-center text-xl text-white/70"> A Soulslike action RPG focused on aggressive combat, 
      risk-versus-reward gameplay, and immersive worldbuilding.</p>

    </section>
  );
}