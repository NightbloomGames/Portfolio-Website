export default function Experience() {

  const skills = [
 {
   title: "Gameplay Programming",
   icon: "🎮",
   skills: [
    "Unreal Engine 5",
    "C++",
    "Gameplay Systems",
    "Combat Mechanics",
    "Blueprints"
   ]
 },

 {
   title: "Software Development",
   icon: "💻",
   skills: [
    "C++",
    "C#",
    "React",
    "TypeScript",
    "Git"
   ]
 },

 {
  title: "Graphics & Tools",
  icon: "⚙️",
  skills: [
    "Vulkan Rendering",
    "Shader Programming",
    "CMake",
    "Model Loading",
    "Visual Studio"
  ]
},

 {
   title: "Design & Production",
   icon: "📖",
   skills: [
    "Systems Design",
    "Game Design Documents",
    "Debugging",
    "Iteration",
    "Documentation"
   ]
 }
];

  return (
    <section id = "experience" className = "mx-auto max-w-6xl px-8 py-40">
      <p className = "uppercase tracking-[0.4em] text-purple-300"> Experience</p>
      <h2 className = "mt-6 text-6xl font-bold"> Building worlds through code.</h2>
      <p className = "mt-6 max-w-3xl text-lg leading-8 text-white/70"> Gameplay programmer and systems designer focused on building interactive experiences
      through gameplay mechanics, technical problem solving, and creative iteration.</p>
      <div className = "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (<div key = {skill.title} className = "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="text-4xl"> {skill.icon}</div>
            <h3 className = "mt-5 text-2xl font-bold"> {skill.title}</h3>
            <ul className = "mt-6 space-y-3 text-white/70"> {skill.skills.map((item) => (<li key = {item}> • {item}</li>))}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}