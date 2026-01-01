
import React from 'react';
import AnimatedSection from './AnimatedSection';

const objectives = [
  { icon: 'fa-magnifying-glass-chart', title: 'Análise Crítica', text: 'Promover análise crítica e aprofundada de questões socioeconômicas atuais.' },
  { icon: 'fa-database', title: 'Pesquisa e Dados', text: 'Desenvolver competências em pesquisa e análise de dados para embasar argumentos.' },
  { icon: 'fa-comments', title: 'Oratória e Debate', text: 'Fortalecer habilidades de oratória, debate construtivo e argumentação.' },
  { icon: 'fa-people-arrows', title: 'Intercâmbio', text: 'Fomentar o intercâmbio de conhecimento entre estudantes e a comunidade.' },
];

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue mb-4">Sobre o CESE</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-semibold text-brand-blue mb-2">Nossa Missão</h3>
            <p className="text-lg text-gray-600 mb-8">"Constituir-se como um polo de excelência na UJC através da análise, argumentação e pesquisa, cultivando o espírito crítico entre os estudantes."</p>
            <h3 className="text-2xl font-semibold text-brand-blue mb-2">Nossa Visão</h3>
            <p className="text-lg text-gray-600">Ser uma referência em debate acadêmico, produção científica e na formação de cidadãos conscientes e participativos na Universidade Joaquim Chissano.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((obj, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-brand-gold text-4xl mb-4 inline-block">
                    <i className={`fas ${obj.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-2">{obj.title}</h4>
                <p className="text-gray-600">{obj.text}</p>
                </div>
            ))}
            </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-16 text-center bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-gold">
              <p className="text-lg text-gray-700">O CESE é orgulhosamente promovido pelo <span className="font-bold text-brand-blue">Núcleo de Estudantes da Faculdade de Economia e Negócios (NEFEN-UJC)</span>.</p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default About;
