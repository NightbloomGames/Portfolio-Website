import Hero from "../Hero/Hero";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";

export default function Portfolio() {
  return (
    <main className = "min-h-screen text-white">
      <Hero/>
      <FeaturedProjects/>
    </main>
  );
}