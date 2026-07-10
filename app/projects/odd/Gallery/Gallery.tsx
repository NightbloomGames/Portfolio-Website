export default function Gallery() {
    return (
        <section className = "mx-auto max-w-6xl px-8 py-24">
            <p className = "uppercase tracking-[0.4em] text-amber-300"> Showcase</p>
            <h2 className="mt-6 text-5xl font-bold"> Puzzle Showcase</h2>
            <div className = "mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                <img src = "/OddNumberTroubleScreenshot.png" alt = "Odd Number Trouble Puzzle 2" className = "w-full object-cover"/>
                <div className = "p-8">
                    <h3 className = "text-2xl font-bold"> Puzzle 2</h3>
                    <p className = "mt-4 text-white/70 leading-8"> One of the later puzzles in <strong> Odd Number Trouble</strong>, designed to reinforce
                    the game's core idea that expected solutions don't always work. Instead of relying on conventional puzzle logic, players must experiment,
                    adapt, and embrace the unexpected to progress.</p>
                </div>
            </div>
        </section>
    );
}