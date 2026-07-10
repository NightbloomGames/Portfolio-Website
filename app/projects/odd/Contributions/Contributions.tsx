"use client"
import AnomalyText from "../ui/AnomalyText";

export default function Contributions() {

    const contributions = [
    {
        title: "Gameplay Programming",
        icon: "🎮",
        description:
            "Designed and programmed the core gameplay systems, player controls, and puzzle interactions that formed the foundation of the experience."
    },

    {
        title: "Puzzle Design",
        icon: "🧩",
        description:
            "Created puzzles centered around intentional chaos, encouraging players to adapt and rethink their solutions when the unexpected happened."
    },

    {
        title: "UI & Player Experience",
        icon: "🖥️",
        description:
            "Designed and implemented the user interface, menus, and player feedback systems to create a polished and intuitive experience."
    },

    {
        title: "Project Integration",
        icon: "⚙️",
        description:
            "Integrated gameplay systems, assets, level design, and game flow into a complete, playable prototype within the game jam timeframe."
    },

    {
        title: "Solo Development",
        icon: "🚀",
        description:
            "Managed every aspect of development independently, including design, programming, debugging, testing, and iteration from start to finish."
    },

    {
        title: "Rapid Prototyping",
        icon: "⏱️",
        description:
            "Worked within the strict time constraints of a game jam, prioritizing features and making quick design decisions to successfully deliver a finished project."
    }
];

    return (
    <section className = "mx-auto max-w-6xl px-8 py-24">
        <p className = "uppercase tracking-[0.4em] text-amber-300"> Responsibilities</p>
        <h2 className = "mt-6 text-5xl font-bold"> <AnomalyText text = "Building an Entire Game Solo"/></h2>
        <p className = "mt-6 max-w-3xl text-lg leading-8 text-white/70"> Odd Number Trouble was developed as my first solo game jam project, giving me
        responsibility for every stage of development. From designing gameplay mechanics and programming puzzle systems to building the user interface,
        integrating assets, debugging, and polishing the final experience, every aspect of the project was developed independently within the limited game
        jam timeframe.</p>
        <div className = "mt-12 grid gap-6 md:grid-cols-2"> {contributions.map((item) => (<div key = {item.title} className ="rounded-3xl border 
        border-white/10 bg-white/5 backdrop-blur-md p-8 transition hover:-translate-y-2 hover:border-amber-400/40">
                    <div className = "flex items-center gap-4">
                        <span className = "text-3xl"> {item.icon}</span>
                        <h3 className = "text-2xl font-bold"> {item.title}</h3>
                    </div>
                    <p className = "mt-5 leading-8 text-white/70"> {item.description}</p>
                </div>
            ))}
        </div>

    </section>
);
}