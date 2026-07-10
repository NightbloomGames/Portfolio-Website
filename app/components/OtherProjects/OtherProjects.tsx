import Link from "next/link";

export default function OtherProjects() {
    const projects = [
        {
            title: "Clockwork Trials",
            description: "A time-loop puzzle prototype focused on interactive systems, gameplay programming, and environmental problem solving.",
            tags: [
                "Unreal Engine 5",
                "C++",
                "Gameplay Programming",
            ],
            link: "/projects/clockwork",
        },
        {
            title: "Odd Number Trouble",
            description: "A puzzle-focused project exploring unique gameplay mechanics, player interaction, and creative solving.",
            tags: [
                "Gameplay Programming",
                "Systems Design",
                "Puzzle Design",
            ],
            link: "/projects/odd",
        },
    ];

    return(
        <section id = "other-projects" className = "mx-auto max-w-6xl px-8 py-40">
            <p className = "uppercase tracking-[0.4em] text-purple-300"> Other Projects</p>
            <h2 className = "mt-6 text-6xl font-bold"> More things I've built.</h2>
            <p className = "mt-6 max-w-3xl text-lg leading-8 text-white/70"> Additional projects showcasing my experience with gameplay programming, 
            systems design, and interactive experiences.</p>
            <div className = "mt-16 grid gap-8 md:grid-cols-2"> {projects.map((project) => (<div key = {project.title} className ="rounded-3xl border
            border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-2 hover:border-purple-400/40">
                <h3 className = "text-3xl font-bold"> {project.title}</h3>
                <p className = "mt-5 leading-8 text-white/70"> {project.description}</p>
                <div className = "mt-6 flex flex-wrap gap-3"> {project.tags.map((tag) => (<span key = {tag} className ="rounded-full border 
                border-white/20 px-3 py-1 text-sm text-white/70"> {tag}</span> ))}
                </div>
                <Link href = {project.link} className = "mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 transition hover:bg-white/10">
                View Project →</Link>

                </div>))}
                
            </div>
        </section>
    )
}