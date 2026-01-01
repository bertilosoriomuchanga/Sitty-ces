
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Publications: React.FC = () => {
  return (
    <section id="publicacoes" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
            <i className="fas fa-newspaper text-6xl text-brand-gold mb-4"></i>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publicações</h2>
            <p className="text-xl font-light max-w-3xl mx-auto">
                Em breve! O CESE está a preparar as suas primeiras publicações científicas, artigos de opinião e boletins informativos, com lançamento previsto para 2026.
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Publications;
