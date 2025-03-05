import { FC } from 'react'
import { personalInterests } from "@/data/personalInterests"
import { InterestCard } from '@/components/ui/InterestCard/InterestCard'
import { SectionSubtitle } from "@/components/ui/SectionSubtitle/SectionSubtitle";

export const AboutInterests: FC = () => {
  return (
    <div className="prose dark:prose-dark mb-16">
      <SectionSubtitle subtitle="When I'm not Coding"/>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
        {personalInterests.map((interest, index) => (
          <InterestCard
            key={index}
            icon={interest.icon}
            label={interest.label}
          />
        ))}
      </div>
    </div>
  )
}
