
import React from 'react';
import AnimatedSection from './AnimatedSection';

const events = [
    { date: 'Fevereiro 2026', title: 'Debate Inaugural', description: 'A desigualdade social em Moçambique.', icon: 'fa-calendar-day' },
    { date: 'Março 2026', title: 'Mesa Redonda', description: 'A juventude e o desemprego: desafios e soluções.', icon: 'fa-users' },
    { date: 'Abril 2026', title: 'Debate Competitivo', description: 'O papel do Estado na economia.', icon: 'fa-gavel' },
    { date: 'Maio 2026', title: 'Debate Livre', description: 'Globalização: oportunidade ou ameaça?', icon: 'fa-globe' },
];

const Calendar: React.FC = () => {
    return (
        <section id="calendario" className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue mb-4">Calendário de Eventos</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">O nosso calendário de eventos para 2026 está em fase de planejamento. Fique atento para um ano repleto de debates, workshops e muito mais!</p>
                </AnimatedSection>

                <div className="relative max-w-2xl mx-auto">
                    {/* Linha vertical */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-brand-blue/30 hidden md:block"></div>

                    {events.map((event, index) => (
                        <AnimatedSection key={index}>
                           <div className="relative mb-8 flex flex-col md:flex-row items-center md:justify-between w-full">
                               <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3 md:text-right'}`}>
                                    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                                        <p className="font-bold text-brand-gold">{event.date}</p>
                                        <h3 className="text-xl font-bold text-brand-blue mt-1">{event.title}</h3>
                                        <p className="text-gray-600 mt-2">{event.description}</p>
                                    </div>
                               </div>
                               <div className="z-10 bg-brand-gold text-white w-12 h-12 rounded-full flex items-center justify-center text-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex">
                                   <i className={`fas ${event.icon}`}></i>
                               </div>
                               <div className="md:w-5/12"></div>
                           </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Calendar;
