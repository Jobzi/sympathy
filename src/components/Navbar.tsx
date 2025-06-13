import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3">
            <img 
              src="/Sympathy (Foto de perfil de Facebook).zip - 6.svg" 
              alt="Sympathy Studio Logo" 
              className="w-8 h-8"
            />
            <span className="text-white text-xl font-light tracking-wider">
              SYMPATHY <span className="font-medium">STUDIO</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Portfolio', 'Services'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-orange-400 transition-colors tracking-wide text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            {['Home', 'Portfolio', 'Services'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-orange-400 transition-colors py-2 text-center text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;