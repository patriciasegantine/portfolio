import About from "@/section/About/About";
import Skills from "@/section/Skills/Skills";
import Hero from "@/components/Hero/Hero";
import Projects from "@/section/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </>
  )
}
