import React from 'react'
import Image from 'next/image'

const HeroImage: React.FC = () => {
  return (
    <div className="hero-portrait group relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-[21rem]" data-testid="hero-image">
      <div className="hero-squircle-accent absolute -bottom-3 -right-3 h-2/3 w-2/3 bg-accent-soft transition-transform duration-700 ease-out group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />

      <div className="hero-squircle relative aspect-[4/5] overflow-hidden bg-canvas-muted shadow-soft">
        <div className="hero-squircle relative h-full w-full overflow-hidden">
          <Image
            src="https://github.com/patriciasegantine.png"
            alt="Profile picture of Patricia Segantine"
            fill
            priority
            sizes="(min-width: 1024px) 21rem, (min-width: 640px) 20rem, 90vw"
            className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroImage
