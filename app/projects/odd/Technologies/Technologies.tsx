export default function Technologies() {

    const technologies = [
        "> Unreal Engine 5",
        "> Blueprint",
    ];

    return (
        <section className = "mx-auto max-w-6xl px-8 py-24">
            <p className = "uppercase tracking-[0.4em] text-amber-300"> Technologies</p>
            <h2 className = "mt-6 text-5xl font-bold"> Tools Used</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70"> Odd Number Trouble was developed in Unreal Engine 5 using Blueprint visual
            scripting to rapidly prototype gameplay mechanics and puzzle interactions. Working as a solo developer, I used these tools to iterate quickly,
            test ideas, and deliver a complete playable game within the limited timeframe of my first game jam.</p>
            <div className = "mt-10 flex flex-wrap gap-4"> {technologies.map((technology) => ( <div key = {technology} className ="rounded-full border
            border-amber-400/30 bg-amber-400/10 px-5 py-3 text-sm text-white/80 transition hover:bg-amber-400/20"> {technology}</div>
                ))}
            </div>
        </section>
    );
}