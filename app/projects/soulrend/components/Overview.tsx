import { projectData } from "@/data/projects";

export default function Overview() {

    const project = projectData.soulrend;

    return (

        <section className = "mx-auto max-w-5xl px-8 py-32">
            <h2 className = "text-5xl font-bold"> Overview</h2>
            <p className = "mt-8 text-xl leading-9 text-white/70"> {project.summary}</p>
        </section>

    );

}