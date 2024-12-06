import React from 'react'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen pt-16"
    >
      <div className="text-center">
        <Image
          src="/profile.jpg"
          alt="Seu Nome"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6 object-cover"
        />
        <h1 className="text-4xl font-bold mb-4 text-dark">
          Olá, eu sou <span className="text-primary">Seu Nome</span>
        </h1>
        <p className="text-xl text-gray-600">
          Desenvolvedor Web Full Stack | React | Next.js | Node.js
        </p>
      </div>
    </section>
  )
}

export default Hero
