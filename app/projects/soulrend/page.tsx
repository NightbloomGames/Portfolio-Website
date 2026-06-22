import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Systems from "./components/Systems";
import Showcase from "./components/Showcase";
import ProjectInfo from "./components/ProjectInfo";
import Gallery from "./components/Gallery";

export default function SoulrendPage() {
  return (
    <main className="bg-black text-white">

      <Hero/>

      <Overview/>

      <Systems/>

      <Showcase/>

      <ProjectInfo/>

      <Gallery/>

    </main>
  );
}