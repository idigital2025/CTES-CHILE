import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#' },
  { label: 'Quiénes Somos', href: '#about' },
  { label: 'Socios', href: '#partners' },
  { label: 'Socios Jóvenes', href: '#' },
  { label: 'Noticias', href: '#news' },
  { label: 'Biblioteca', href: '#library' },
  { label: 'Calendario', href: '#events' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${isScrolled ? 'sticky top-0 bg-white/95 backdrop-blur-sm shadow-md' : 'relative bg-white'}`}>
      {/* Top Bar - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-100 text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="text-gray-500 text-[11px]">CTES Chile, representante oficial de la ITA-AITES</span>
          <div className="flex items-center space-x-6 text-gray-600 font-medium">
            <a href="#" className="flex items-center hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[16px] mr-1">person</span> Mi cuenta
            </a>
            <a href="#" className="flex items-center hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[16px] mr-1">help</span> Ayuda
            </a>
            <a href="#" className="hover:text-primary transition-colors">ES / EN</a>
            <a href="#contact" className="flex items-center hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[16px] mr-1">phone</span> Contacto
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" 
              src="img/logos-ctes.png" 
              alt="CTES Chile Logo" 
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={`text-[13px] font-semibold transition-colors border-b-2 border-transparent hover:border-primary pb-1 uppercase tracking-tight ${
                  item.label === 'Inicio' ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <a href="#" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Hazte Socio
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100">
             <a href="#" className="block w-full text-center bg-primary text-white px-5 py-3 rounded-lg text-base font-medium">
              Hazte Socio
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;