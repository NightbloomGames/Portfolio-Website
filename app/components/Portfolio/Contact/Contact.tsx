import Link from "next/link";

export default function Contact() {
  return (
    <section id = "contact" className = "min-h-screen flex items-center justify-center px-8 py-40">
      <div className = "max-w-4xl w-full text-center">
        <p className = "uppercase tracking-[0.4em] text-purple-300"> Contact</p>
        <h2 className = "mt-6 text-6xl font-bold"> Let's build something.</h2>
        <p className = "mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70"> Interested in collaborating, discussing opportunities, or learning more
        about my work? I'd love to connect.</p>
        <div className = "mt-12 flex justify-center gap-6 flex-wrap">
          <a href = "mailto:Jacob.cunningham12@outlook.com" className = "rounded-full border border-white/20 px-8 py-3 transition hover:bg-white/10">
          Email →</a>
          <a href = "https://www.linkedin.com/in/jacob-cunningham-554333363/" target = "_blank" className ="rounded-full border border-white/20 px-8 py-3
          transition hover:bg-white/10"> LinkedIn →</a>
          <a href = "https://github.com/NightbloomGames" target = "_blank" className ="rounded-full border border-white/20 px-8 py-3 transition 
          hover:bg-white/10"> GitHub →</a>
        </div>

      </div>
    </section>
  );
}