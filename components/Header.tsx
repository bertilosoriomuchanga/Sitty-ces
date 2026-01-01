
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#quotas', label: 'Quotas' },
  { href: '#atividades', label: 'Atividades' },
  { href: '#contato', label: 'Contato' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleLinkClick = () => {
    if(isMenuOpen){
      setIsMenuOpen(false);
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className={`font-extrabold text-2xl ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
          CESE-UJC
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-brand-blue' : 'text-white hover:text-brand-gold'}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`focus:outline-none ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick} className="font-medium text-gray-700 hover:text-brand-blue w-full text-center py-2">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
