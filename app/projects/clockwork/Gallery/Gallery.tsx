export default function Gallery() {
    return (
        <section className = "mx-auto max-w-6xl px-8 py-24">
            <p className = "uppercase tracking-[0.4em] text-cyan-300"> Showcase</p>
            <h2 className="mt-6 text-5xl font-bold"> Project Gallery</h2>
            <div className = "mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                <img src = "/ClockworkTrialsTimeMachine.png" alt = "Clockwork Trials Time Machine" className = "w-full object-cover"/>
                <div className = "p-8">
                    <h3 className = "text-2xl font-bold"> Time Machine</h3>
                    <p className="mt-4 text-white/70 leading-8"> The central gameplay device that supports the game's time-loop mechanics and player 
                    progression.</p>
                </div>
            </div>
        </section>
    );
}