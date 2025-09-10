import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { id: 'hero', label: 'Anasayfa' },
  { id: 'services', label: 'Hizmetlerimiz' },
  { id: 'about', label: 'Hakkımızda' },
  { id: 'contact', label: 'İletişim' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const getNavItemClass = (id: string) => {
    if (activeSection === id) {
      return 'text-orange-500 border-b-2 border-orange-500 pb-1';
    }
    return isScrolled ? 'text-gray-700' : 'text-gray-800';
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
          >
            <img 
              src="/src/assets/logo.png" 
              alt="Gurme Kepçe Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-gray-800 hidden sm:block">
              Gurme Kepçe Catering & Tabldot
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  text-sm font-medium transition-colors duration-300 hover:text-orange-500
                  ${getNavItemClass(item.id)}
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-colors text-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden transition-all duration-300 ease-in-out overflow-hidden
            ${isMenuOpen 
              ? 'max-h-96 opacity-100 pb-4' 
              : 'max-h-0 opacity-0'
            }
          `}
        >
          <nav className="flex flex-col space-y-3 bg-white rounded-lg shadow-lg p-4 mt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors
                  ${activeSection === item.id 
                    ? 'bg-orange-50 text-orange-500' 
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
