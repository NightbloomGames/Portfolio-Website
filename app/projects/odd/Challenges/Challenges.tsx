export default function Challenges() {

    const challenges = [
        {
            title: "Scope Management",
            icon: "📋",
            description:
                "Learning what to build—and what not to build—was one of the biggest challenges. I prioritized core gameplay mechanics over unnecessary features to ensure the project reached a polished, playable state within the game jam deadline."
        },

        {
            title: "Rapid Prototyping",
            icon: "⚡",
            description:
                "With only a limited amount of time available, I quickly prototyped mechanics, tested ideas, and refined gameplay through constant iteration instead of pursuing perfect first implementations."
        },

        {
            title: "Designing Controlled Chaos",
            icon: "🧩",
            description:
                "Creating puzzles that felt intentionally unpredictable without becoming frustrating required careful balancing. Each puzzle needed to surprise players while still remaining fair and solvable."
        },

        {
            title: "Solo Development",
            icon: "🚀",
            description:
                "Managing programming, puzzle design, UI, testing, and overall project organization alone taught me how to balance multiple disciplines while maintaining forward progress."
        }
    ];

    return (
        <section className = "mx-auto max-w-6xl px-8 py-24">
            <p className = "uppercase tracking-[0.4em] text-amber-300"> Challenges</p>
            <h2 className = "mt-6 text-5xl font-bold"> Problems Solved</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70"> Developing Odd Number Trouble introduced a completely different set of challenges
            than traditional class projects. As my first game jam, learning to make rapid design decisions while delivering a complete game taught me valuable
            lessons about scope, iteration, and finishing projects. Working alone under the time constraints of a game jam required creative problem solving and
            the ability to prioritize features while still delivering a complete and enjoyable experience.</p>
            <div className = "mt-12 grid gap-6 md:grid-cols-2"> {challenges.map((challenge) => (<div key = {challenge.title} className ="rounded-3xl border
            border-white/10 bg-white/5 backdrop-blur-md p-8 transition hover:-translate-y-2 hover:border-amber-400/40">
                        <div className = "flex items-center gap-4">
                            <span className = "text-3xl"> {challenge.icon}</span>
                            <h3 className = "text-2xl font-bold"> {challenge.title}</h3>
                        </div>
                        <p className = "mt-5 leading-8 text-white/70"> {challenge.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}