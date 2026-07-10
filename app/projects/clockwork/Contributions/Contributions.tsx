"use client"

export default function Contributions() {

    const contributions = [
        {
            title: "Title Screen & UI",
            icon: "🎨",
            description:
                "Developed the title screen experience, implemented menu interactions, and helped create a polished player-facing interface."
        },

        {
            title: "Audio Implementation",
            icon: "🔊",
            description:
                "Integrated gameplay and UI audio systems, including interactive sound feedback and audio behavior."
        },

        {
            title: "Unreal Engine Development",
            icon: "⚙️",
            description:
                "Worked with Unreal Engine 5 workflows, implementing features and debugging technical issues throughout development."
        },

        {
            title: "Gameplay Systems",
            icon: "🧩",
            description:
                "Supported gameplay functionality by integrating interactive elements and refining systems through testing and iteration."
        },

        {
            title: "Team Collaboration",
            icon: "🤝",
            description:
                "Collaborated with teammates through development, iteration, and version control workflows."
        }
    ];

    return (
        <section className = "mx-auto max-w-6xl px-8 py-24">
            <p className = "uppercase tracking-[0.4em] text-cyan-300"> Contributions</p>
            <h2 className = "mt-6 text-5xl font-bold"> My Role</h2>
            <p className = "mt-6 max-w-3xl text-lg leading-8 text-white/70"> During development, I focused on implementing player-facing features, 
            supporting gameplay systems, and creating polished interactions through Unreal Engine 5.</p>
            <div className = "mt-12 grid gap-6 md:grid-cols-2"> {contributions.map((item) => (<div key = {item.title} className ="rounded-3xl border 
            border-white/10 bg-white/5 backdrop-blur-md p-8 transition hover:-translate-y-2 hover:border-cyan-400/40">
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