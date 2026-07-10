import Hero from "../Hero/Hero";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import OtherProjects from "../OtherProjects/OtherProjects";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";

export default function Portfolio() {
  return (
    <main className = "relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div className = "fixed inset-0 -z-0 bg-black"/>
      <div className = "fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.18),transparent_45%)]"/>
      <div className = "fixed inset-0 -z-0 bg-[radial-gradient(circle_at_bottom,rgba(185,28,28,0.12),transparent_45%)]"/>
      {/* Content */}
      <div className = "relative z-10">
      <Hero/>
      <FeaturedProjects/>
      <OtherProjects/>
      <Experience/>
      <Contact/>
      </div>
    </main>
  );
}