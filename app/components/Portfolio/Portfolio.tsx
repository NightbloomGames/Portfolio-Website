import Hero from "../Hero/Hero";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import OtherProjects from "../OtherProjects/OtherProjects";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";

export default function Portfolio() {
  return (
    <main className = "min-h-screen text-white">
      <Hero/>
      <FeaturedProjects/>
      <OtherProjects/>
      <Experience/>
      <Contact/>
    </main>
  );
}