import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0D0D1F]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-2xl">
              <span className="text-[#0066FF]">DRAPER</span> NETWORK
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</a>
            <a href="#network" className="text-white/80 hover:text-white transition-colors">Network</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            <button className="bg-[#0066FF] hover:bg-[#0055CC] text-white px-5 py-2 rounded-full transition-all transform hover:scale-105">
              Pitch Your Startup
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D1F] absolute top-full left-0 w-full">
          <div className="px-4 py-5 space-y-4">
            <a href="#about" className="block text-white/80 hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="block text-white/80 hover:text-white transition-colors">Portfolio</a>
            <a href="#network" className="block text-white/80 hover:text-white transition-colors">Network</a>
            <a href="#contact" className="block text-white/80 hover:text-white transition-colors">Contact</a>
            <button className="w-full bg-[#0066FF] hover:bg-[#0055CC] text-white px-5 py-2 rounded-full transition-all">
              Pitch Your Startup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;