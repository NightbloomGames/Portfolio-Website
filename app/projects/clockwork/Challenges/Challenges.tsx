export default function Challenges() {

    const challenges = [
        {
            title: "Unreal Engine Debugging",
            icon: "🛠️",
            description:
                "Worked through gameplay and engine-related issues by analyzing unexpected behavior, testing solutions, and refining implementations through iteration."
        },

        {
            title: "Audio System Integration",
            icon: "🔊",
            description:
                "Implemented and refined UI and gameplay audio systems, including sound transitions and audio behavior using Unreal Engine's audio tools."
        },

        {
            title: "Asset & Component Setup",
            icon: "🧩",
            description:
                "Resolved technical issues involving imported assets, component organization, and Unreal Engine actor setups to ensure systems functioned correctly."
        },

        {
            title: "Collaborative Development",
            icon: "🤝",
            description:
                "Adapted to a team development workflow by managing project changes, communicating solutions, and working within version control."
        }
    ];

    return (
        <section className = "mx-auto max-w-6xl px-8 py-24">
            <p className = "uppercase tracking-[0.4em] text-cyan-300"> Challenges</p>
            <h2 className = "mt-6 text-5xl font-bold"> Problems Solved</h2>
            <p className = "mt-6 max-w-3xl text-lg leading-8 text-white/70"> Throughout development, I encountered technical challenges that required
            debugging, iteration, and problem solving within Unreal Engine 5.</p>
            <div className = "mt-12 grid gap-6 md:grid-cols-2"> {challenges.map((challenge) => (<div key = {challenge.title} className ="rounded-3xl border
            border-white/10 bg-white/5 backdrop-blur-md p-8 transition hover:-translate-y-2 hover:border-cyan-400/40">
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