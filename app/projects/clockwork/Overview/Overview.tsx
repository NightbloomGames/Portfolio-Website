"use client";

export default function Overview() {
    return (
        <section className = "mx-auto max-w-6xl px-8 py-24">
            <div className = "relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <div className = "absolute inset-0 rounded-3xl bg-cyan-500/5 blur-3xl -z-10"/>
                <p className = "uppercase tracking-[0.4em] text-cyan-300"> Overview</p>
                <h2 className = "mt-6 text-5xl font-bold"> Project Overview</h2>
                <p className = "mt-8 max-w-4xl text-lg leading-9 text-white/70"> Clockwork Trials is a first-person, single-player time-loop puzzle game
                developed in Unreal Engine 5. Players are trapped in a facility moments before a nuclear missile launches, forcing them to repeatedly
                relive the same stretch of time while solving environmental puzzles, uncovering clues, and finding the correct sequence of actions needed
                to prevent disaster.</p>
                <p className = "mt-8 max-w-4xl text-lg leading-9 text-white/70"> As the Gameplay Programmer on a four-person development team, I focused on
                implementing gameplay mechanics, interactive systems, and technical features that brought the time-loop experience to life. Working closely
                with teammates throughout development, I translated design concepts into functional gameplay systems while continuously refining mechanics
                through testing, debugging, and iteration.</p>
            </div>
        </section>
    );
}