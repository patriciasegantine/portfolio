import React from "react";
import { Section } from "@/components/ui/Section/Section";
import { SkillCard } from "@/components/ui/SkillCard/SkillCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll/RevealOnScroll";
import { beyondCodeInterests } from "@/data/beyondCodeInterests";
import { SectionTitle } from "@/components/ui/SectionTitle/SectionTitle";

const BeyondCode: React.FC = () => {
  return (
    <Section
      id="beyond-code"
      variant="secondary"
      aria-label="Beyond the Code"
      className="py-14"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle title={"Beyond the Code"}/>
          <p className="mx-auto my-3 max-w-2xl text-sm leading-relaxed text-secondary">
            Outside work, I enjoy a few simple things that help me recharge and stay grounded.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 auto-rows-fr gap-5 md:grid-cols-4">
          {beyondCodeInterests.map(({ name, icon, subtitle }, index) => (
            <RevealOnScroll key={name} delay={index * 0.04} yOffset={12} className="h-full">
              <SkillCard name={name} icon={icon} subtitle={subtitle}/>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BeyondCode;
