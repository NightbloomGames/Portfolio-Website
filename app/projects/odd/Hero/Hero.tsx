import AnomalyText from "../ui/AnomalyText"

export default function Hero() {
    return(
        <section className = "relative h-[70vh] overflow-hidden">

           {/* Screenshot */}
           <img src = "/OddNumberTrouble.png" alt = "Odd Number Troubles" className = "h-full w-full object-cover object-center"/>
           {/* Gradient */}
           <div className = "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
           <div className = "absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.18),transparent_60%)]"/>
           {/* Title */} 
           <div className="absolute bottom-16 left-16 z-10">
            <p className = "uppercase tracking-[0.4em] text-amber-300"> Featured Project</p>
            <h1 className = "mt-4 text-7xl font-bold"> <AnomalyText text = "Odd Number Trouble"/></h1>
            <p className = "mt-4 text-xl text-white/70"> A game jam experiment in controlled chaos.</p>
           </div>
        </section>
    )
}