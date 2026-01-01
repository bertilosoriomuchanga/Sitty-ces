
import React from 'react';
import AnimatedSection from './AnimatedSection';

const quotaData = [
  { category: 'Membro Participante', responsibility: 'Baixa', monthly: '10 MT', annual: '120 MT' },
  { category: 'Membro de Equipa', responsibility: 'Média', monthly: '20 MT', annual: '240 MT' },
  { category: 'Diretoria Executiva', responsibility: 'Alta', monthly: '35 MT', annual: '420 MT' },
  { category: 'Conselho de Administração', responsibility: 'Máxima', monthly: '50 MT', annual: '600 MT' },
];

const Quotas: React.FC = () => {
  return (
    <section id="quotas" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue mb-4">Sistema de Quotas</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-brand-blue text-white hidden md:table-header-group">
                <tr>
                  <th className="p-4 font-semibold">Categoria</th>
                  <th className="p-4 font-semibold">Responsabilidade</th>
                  <th className="p-4 font-semibold">Quota Mensal</th>
                  <th className="p-4 font-semibold">Quota Anual</th>
                </tr>
              </thead>
              <tbody>
                {quotaData.map((item, index) => (
                  <tr key={index} className="block md:table-row border-b last:border-b-0 border-gray-200 md:border-none">
                    <td data-label="Categoria" className="block md:table-cell p-4 font-bold md:font-normal text-brand-blue md:text-gray-800 before:content-[attr(data-label)] before:font-semibold before:mr-2 before:inline-block md:before:hidden">{item.category}</td>
                    <td data-label="Responsabilidade" className="block md:table-cell p-4 before:content-[attr(data-label)] before:font-semibold before:mr-2 before:inline-block md:before:hidden">{item.responsibility}</td>
                    <td data-label="Quota Mensal" className="block md:table-cell p-4 before:content-[attr(data-label)] before:font-semibold before:mr-2 before:inline-block md:before:hidden">{item.monthly}</td>
                    <td data-label="Quota Anual" className="block md:table-cell p-4 font-bold text-brand-blue md:font-normal md:text-gray-800 before:content-[attr(data-label)] before:font-semibold before:mr-2 before:inline-block md:before:hidden">{item.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection>
            <div className="mt-12 text-center text-gray-600 max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-brand-blue text-lg mb-2">Prazos de Pagamento</h4>
                    <p>O pagamento mensal é devido até ao dia 16 de cada mês. O pagamento anual deve ser efetuado até ao final do primeiro mês de atividades letivas.</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-brand-blue text-lg mb-2">Inadimplência</h4>
                    <p>O não cumprimento dos pagamentos pode levar à suspensão de direitos, como voto e elegibilidade para cargos, conforme o regulamento.</p>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
                <p>Valores aprovados conforme Norma Financeira 01/2025.</p>
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Quotas;
