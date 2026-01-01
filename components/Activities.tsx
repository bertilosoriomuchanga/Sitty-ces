
import React from 'react';
import AnimatedSection from './AnimatedSection';

const activities = [
    { icon: 'fa-comments', name: 'Debates Mensais' },
    { icon: 'fa-chalkboard-user', name: 'Workshops de Oratória' },
    { icon: 'fa-microphone-lines', name: 'Simulações de Conferências' },
    { icon: 'fa-flask', name: 'Produção Científica' },
    { icon: 'fa-handshake', name: 'Parcerias Institucionais' },
    { icon: 'fa-calendar-star', name: 'Eventos Públicos' },
];

const Activities: React.FC = () => {
    return (
        <section id="atividades" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue mb-4">Atividades Principais</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity, index) => (
                            <div key={index} className="bg-brand-gray p-8 rounded-lg shadow-md text-center flex flex-col items-center justify-center transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="text-brand-blue text-5xl mb-4">
                                    <i className={`fas ${activity.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-brand-blue">{activity.name}</h3>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Activities;
