
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/university/1920/1080')" }}>
      <div className="absolute inset-0 bg-brand-blue bg-opacity-70"></div>
      <div className="relative z-10 text-center text-white px-6">
        <AnimatedSection>
          <div className="mb-4">
            <span className="text-brand-gold text-lg font-semibold">CESE-UJC</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Clube de Estudos Sociais e Econômicos
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Uma iniciativa do NEFEN-UJC
          </p>
          <a href="#sobre" className="bg-brand-gold text-brand-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
            Saiba Mais
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
