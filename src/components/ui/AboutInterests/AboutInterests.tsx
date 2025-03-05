import { FC } from 'react'
import { personalInterests } from "@/data/personalInterests"
import { SectionSubtitle } from "@/components/ui/SectionSubtitle/SectionSubtitle";
import { SkillCard } from "@/components/ui/SkillCard/SkillCard";

export const AboutInterests: FC = () => {
  return (
    <div className="prose dark:prose-dark mb-16">
      <SectionSubtitle subtitle="When I'm not Coding"/>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
        {personalInterests.map(({icon, name}) => (
          <SkillCard
            key={name}
            icon={icon}
            name={name}
          />
        ))}
      </div>
    </div>
  )
}
