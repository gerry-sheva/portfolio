import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Works from "@/app/components/Works";
import Intro from "@/app/components/Intro";
import CTA from "@/app/components/CTA";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
      <div className={"space-y-24 mb-16"}>
          <Header />
          <Hero />
          <Works />
          <Projects />
          <Intro />
          <CTA />
      </div>
  );
}
