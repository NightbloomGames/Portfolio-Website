import { projectData } from "@/data/projects";

export default function Systems() {
    const project = projectData.soulrend;
    return(
        <section className = "mx-auto max-w-6xl px-8 py-24">
            <h2 className = "mb-12 text-5xl font-bold"> Gameplay Systems</h2>
            <div className = "grid gap-8 md:grid-cols-2">
                {project.systems.map((system) => (
                    <div key = {system.title} className = "rounded-xl border border-white/10 bg-white/5 p-8">
                        <h3 className = "text-2xl font-semibold"> {system.title}</h3>
                        <p className="mt-4 text-white/70 leading-8"> {system.text}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}