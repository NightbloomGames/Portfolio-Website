"use client";
import AnomalyText from "../ui/AnomalyText";

export default function Overview() {
    return (
        <section className = "mx-auto max-w-6xl px-8 py-24">
            <div className = "relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10">
            <div className = "absolute inset-0 rounded-3xl bg-amber-500/5 blur-3xl -z-10"/>
                <p className = "uppercase tracking-[0.4em] text-amber-300"> Project Overview</p>
                <h2 className = "mt-6 text-5xl font-bold"> <AnomalyText text = "Embracing Controlled Chaos"/></h2>
                <p className = "mt-8 max-w-4xl text-lg leading-9 text-white/70">  Odd Number Trouble is a puzzle game created during my first game jam
                experience, designed around the idea that things intentionally do not go according to plan. Instead of relying on predictable puzzle
                solutions, the game challenges players to adapt, experiment, and overcome unexpected situations.</p>
                <p className = "mt-8 max-w-4xl text-lg leading-9 text-white/70">  As the Gameplay Programmer, I focused on implementing gameplay mechanics
                and interactive systems while working within the limited development timeline of a game jam. The project pushed me to rapidly prototype
                ideas, prioritize important features, and create a playable experience under tight constraints.</p>
            </div>
        </section>
    );
}