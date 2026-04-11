import Hero from "@/components/section/Hero/Hero";
import About from "@/components/section/About/About";
import Projects from "@/components/section/Projects/Projects";
import Skills from "@/components/section/Skills/Skills";
import Contact from "@/components/section/Contact/Contact";
import BeyondCode from "@/components/section/BeyondCode/BeyondCode";
import RevealOnScroll from "@/components/ui/RevealOnScroll/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Hero/>
      <RevealOnScroll>
        <About/>
      </RevealOnScroll>
      <RevealOnScroll delay={0.08}>
        <Projects/>
      </RevealOnScroll>
      <RevealOnScroll delay={0.08}>
        <Skills/>
      </RevealOnScroll>
      <RevealOnScroll delay={0.08}>
        <Contact/>
      </RevealOnScroll>
      <RevealOnScroll delay={0.08}>
        <BeyondCode/>
      </RevealOnScroll>
    </>
  )
}
