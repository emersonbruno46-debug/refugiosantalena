import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#151715]/90 backdrop-blur-md border-b border-[#292A27]/80 py-3'
          : 'bg-gradient-to-b from-[#151715]/80 via-[#151715]/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm bg-[#292A27] border border-[#77756E]/30 flex items-center justify-center group-hover:border-[#D86A3E] transition-colors overflow-hidden p-1">
            <img src="/LOGO SANTALENA.svg" alt="Refúgio Santalena" className="w-full h-full object-contain filter invert opacity-90" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-base text-[#EDE9DF] group-hover:text-[#D86A3E] transition-colors uppercase">
              REFÚGIO SANTALENA
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#B9B3A6] uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D86A3E] animate-pulse"></span>
              Paiol Grande · SP
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 bg-[#292A27]/40 border border-[#77756E]/20 px-6 py-2 rounded-full backdrop-blur-sm">
          <a href="#refugio" className="font-mono text-xs text-[#B9B3A6] hover:text-[#EDE9DF] transition-colors flex items-center gap-1.5 uppercase">
            <span className="text-[#D86A3E]">01.</span> O Refúgio
          </a>
          <a href="#chales" className="font-mono text-xs text-[#B9B3A6] hover:text-[#EDE9DF] transition-colors flex items-center gap-1.5 uppercase">
            <span className="text-[#D86A3E]">02.</span> Chalés
          </a>
          <a href="#pedra-do-bau" className="font-mono text-xs text-[#B9B3A6] hover:text-[#EDE9DF] transition-colors flex items-center gap-1.5 uppercase">
            <span className="text-[#D86A3E]">03.</span> Pedra do Baú
          </a>
          <a href="#avaliacoes" className="font-mono text-xs text-[#B9B3A6] hover:text-[#EDE9DF] transition-colors flex items-center gap-1.5 uppercase">
            <span className="text-[#D86A3E]">04.</span> Avaliações
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.airbnb.com.br/rooms/917479622006307880"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#D86A3E] hover:bg-[#c45b30] text-[#151715] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#D86A3E]/20"
          >
            <span>Ver Disponibilidade</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-sm bg-[#292A27] text-[#EDE9DF] border border-[#77756E]/30"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#151715] border-b border-[#292A27] px-6 py-6 space-y-4">
          <a
            href="#refugio"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono text-sm text-[#EDE9DF] hover:text-[#D86A3E]"
          >
            01. O REFÚGIO
          </a>
          <a
            href="#chales"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono text-sm text-[#EDE9DF] hover:text-[#D86A3E]"
          >
            02. CHALÉS
          </a>
          <a
            href="#pedra-do-bau"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono text-sm text-[#EDE9DF] hover:text-[#D86A3E]"
          >
            03. PEDRA DO BAÚ
          </a>
          <a
            href="#avaliacoes"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-mono text-sm text-[#EDE9DF] hover:text-[#D86A3E]"
          >
            04. AVALIAÇÕES
          </a>
          <div className="pt-4 border-t border-[#292A27]">
            <a
              href="https://www.airbnb.com.br/rooms/917479622006307880"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#D86A3E] text-[#151715] font-mono text-xs font-bold uppercase rounded-sm"
            >
              Ver Disponibilidade no Airbnb
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
