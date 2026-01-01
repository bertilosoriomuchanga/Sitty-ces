
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Por favor, preencha todos os campos.');
      return;
    }
    // Simulação de envio
    setStatus('Mensagem enviada com sucesso! (Simulação)');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contato" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-blue mb-4">Contato e Redes Sociais</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-12"></div>
        </AnimatedSection>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info */}
          <AnimatedSection className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Entre em Contato</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-brand-gold w-6"></i>
                  <a href="mailto:cese.ujc@gmail.com" className="ml-3 hover:text-brand-blue">cese.ujc@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-facebook text-brand-gold w-6"></i>
                  <a href="https://www.facebook.com/ceseujc" target="_blank" rel="noopener noreferrer" className="ml-3 hover:text-brand-blue">/ceseujc</a>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-instagram text-brand-gold w-6"></i>
                  <a href="https://www.instagram.com/cese_ujc" target="_blank" rel="noopener noreferrer" className="ml-3 hover:text-brand-blue">@cese_ujc</a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="w-full lg:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-brand-blue mb-6">Envie uma Mensagem</h3>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
                        <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"/>
                    </div>
                    <textarea name="message" placeholder="Sua Mensagem" rows={5} value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-brand-gold"></textarea>
                    <button type="submit" className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors duration-300">
                        Enviar Mensagem
                    </button>
                    {status && <p className="mt-4 text-center">{status}</p>}
                </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
