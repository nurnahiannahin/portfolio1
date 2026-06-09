import Hero from "@/components/hero-section";
import Projects from "@/components/project";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}
