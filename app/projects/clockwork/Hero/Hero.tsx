export default function Hero() {
    return(
        <section className = "relative h-[70vh] overflow-hidden">

           {/* Screenshot */}
           <img src = "/ClockworkTrials.png" alt = "Clockwork Trials" className = "h-full w-full object-cover object-center"/>
           {/* Gradient */}
           <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/60 via-transparent to-transparent"/>
           {/* Title */} 
           <div className="absolute bottom-16 left-16 z-10">
            <p className = "uppercase tracking-[0.4em] text-cyan-300"> Featured Project</p>
            <h1 className = "mt-4 text-7xl font-bold"> Clockwork Trials</h1>
            <p className = "mt-4 text-xl text-white/70"> Time-Loop Puzzle Prototype</p>
           </div>
        </section>
    )
}