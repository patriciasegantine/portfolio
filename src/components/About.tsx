import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-dark">
          Sobre Mim
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            Sou um desenvolvedor web apaixonado por criar soluções digitais inovadoras.
            Tenho experiência em tecnologias modernas como React, Next.js, Node.js e
            estou sempre buscando aprender e me atualizar no mundo da programação.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
