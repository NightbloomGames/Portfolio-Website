"use client"

export default function Metadata() {
    return(
        <section className = "mx-auto max-w-6xl px-8 py-20">
            <div className = "grid gap-6 md:grid-cols-4">
                <div className = "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className = "text-xs uppercase tracking-[0.3em] text-amber-300"> Status</p>
                <p className = "mt-3 text-xl font-semibold"> Completed</p>
            </div>
            <div className = "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className = "text-xs uppercase tracking-[0.3em] text-amber-300"> Role</p>
            <p className = "mt-3 text-xl font-semibold"> Gameplay Programmer</p>
            </div>
            <div className = "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className = "text-xs uppercase tracking-[0.3em] text-amber-300"> Engine</p>
            <p className = "mt-3 text-xl font-semibold"> Unreal Engine 5</p>
            </div>
            <div className = "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className = "text-xs uppercase tracking-[0.3em] text-amber-300"> Type</p>
            <p className = "mt-3 text-xl font-semibold"> Game Jam Project</p>
            </div>

    </div>

</section>
    )
}