import Link from "next/link";

export default function SoulrendShowcase() {
  return (
    <section className = "min-h-screen flex flex-col items-center justify-center px-24">

      <p className = "uppercase tracking-[0.4em] text-purple-300"> Featured Project</p>
      <h2 className = "mt-6 text-7xl font-bold"> Soulrend:</h2>
      <p className = "mt-4 text-2xl text-white/70"> The Death of Life </p>

      {/* Artwork goes here */}

      {/* Description */}

      {/* Buttons */}
      <Link href = "/projects/soulrend" className = "rounded-full border border-white/20 px-8 py-3 transition hover:bg-white/10"> Learn More</Link>

    </section>
  );
}