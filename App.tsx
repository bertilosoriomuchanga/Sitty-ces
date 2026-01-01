
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Structure from './components/Structure';
import Quotas from './components/Quotas';
import Activities from './components/Activities';
import Calendar from './components/Calendar';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-brand-blue flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
            <div className="text-white text-3xl font-bold">CESE-UJC</div>
            <div className="w-16 h-1 bg-brand-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Structure />
        <Quotas />
        <Activities />
        <Calendar />
        <Publications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
