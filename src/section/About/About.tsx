import React from 'react';
import { personalInterests } from "@/data/personalInterests";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { SectionWrapper } from "@/components/SectionWrapper/SectionWrapper";
import { AboutContent } from "@/components/AboutContent/AboutContent";
import { PersonalInterest } from "@/components/AboutContent/PersonalInterest";

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" data-testid="about" aria-label="About Me section" variant="primary">
      <div className="prose dark:prose-dark mb-16">
        <SectionHeader title={"About Me"}/>
        <AboutContent/>
      </div>
      
      <div className="prose dark:prose-dark mb-16">
        <h3 className="text-xl font-medium text-primary-dark dark:text-zinc-50 text-center mt-8 mb-16">
          When I&apos;m Not Coding
        </h3>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
          {personalInterests.map((interest) => (
            <PersonalInterest key={`interest-${interest.label}`} icon={interest.icon} label={interest.label}/>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
