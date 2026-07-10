export default function Technologies() {

    const technologies = [
        "Unreal Engine 5",
        "C++",
        "Visual Studio",
        "Perforce",
    ];


    return (
        <section className="mx-auto max-w-6xl px-8 py-24">

            <p className="uppercase tracking-[0.4em] text-cyan-300">
                Technologies
            </p>

            <h2 className="mt-6 text-5xl font-bold">
                Tools Used
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                The project was developed using Unreal Engine 5 alongside
                industry-standard tools for programming, collaboration, and
                development workflows.
            </p>


            <div className="mt-10 flex flex-wrap gap-4">

                {technologies.map((technology) => (

                    <div
                        key={technology}
                        className="
                            rounded-full
                            border
                            border-cyan-400/30
                            bg-cyan-400/10
                            px-5
                            py-3
                            text-sm
                            text-white/80
                            transition
                            hover:bg-cyan-400/20
                        "
                    >
                        {technology}
                    </div>

                ))}

            </div>

        </section>
    );
}