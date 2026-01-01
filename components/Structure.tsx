
import React from 'react';
import AnimatedSection from './AnimatedSection';

const MemberCard = ({ name, role, description }: { name: string; role: string; description: string; }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-brand-gold text-center w-full">
        <h4 className="text-xl font-bold text-brand-blue">{name}</h4>
        <p className="text-brand-gold font-semibold mb-2">{role}</p>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

const Structure: React.FC = () => {
    return (
        <section id="estrutura" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue mb-4">Estrutura Organizacional</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
                </AnimatedSection>

                <div className="flex flex-col items-center gap-12">
                    {/* Conselho de Administração */}
                    <AnimatedSection className="w-full max-w-4xl">
                        <h3 className="text-2xl font-bold text-center text-brand-blue mb-6">Conselho de Administração</h3>
                        <div className="flex flex-col md:flex-row gap-8 justify-center">
                            <MemberCard name="Cecília Mungoi" role="Presidente do Conselho de Administração (PCA)" description="Define a visão estratégica e supervisiona as atividades do clube." />
                            <MemberCard name="Kelyussra Kumay" role="Vice-Presidente do Conselho de Administração" description="Auxilia o PCA na gestão estratégica e supervisão." />
                        </div>
                    </AnimatedSection>

                     {/* Linha de conexão */}
                    <div className="w-1 h-16 bg-brand-gold/50 rounded"></div>

                    {/* Diretoria Executiva */}
                    <AnimatedSection className="w-full max-w-5xl">
                        <h3 className="text-2xl font-bold text-center text-brand-blue mb-6">Diretoria Executiva</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <MemberCard name="Bertil Muchanga" role="Chief Executive Officer (CEO)" description="Responsável pelas operações diárias e execução dos projetos." />
                            <MemberCard name="Clayton Ngovene" role="Chief Financial Officer (CFO)" description="Gerencia as finanças, orçamento e sistema de quotas." />
                            <MemberCard name="Sousa Nantide" role="Chief Operating Officer (COO)" description="Coordena a logística, agenda de eventos e a organização interna." />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Structure;
