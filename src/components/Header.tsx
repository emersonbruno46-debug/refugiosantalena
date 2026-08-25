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
          ? 'bg-dk-bg/95 backdrop-blur-md border-b border-dk-border py-3 shadow-sm'
          : 'bg-gradient-to-b from-dk-bg/85 via-dk-bg/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-dk-secondary border border-dk-border flex items-center justify-center group-hover:border-hl-terracotta transition-colors overflow-hidden p-1">
            <img src="/LOGO SANTALENA.svg" alt="Refúgio Santalena" className="w-full h-full object-contain filter invert opacity-90" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium tracking-tight text-base text-dk-text group-hover:text-hl-terracotta transition-colors uppercase">
              REFÚGIO SANTALENA
            </span>
            <span className="font-sans text-[10px] tracking-wider text-dk-secondary-text uppercase flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-hl-terracotta animate-pulse"></span>
              Paiol Grande · SP
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 bg-dk-secondary/40 border border-dk-border px-6 py-2 rounded-full backdrop-blur-sm">
          <a href="#refugio" className="font-sans text-xs text-dk-secondary-text hover:text-dk-text transition-colors flex items-center gap-1.5 uppercase font-medium tracking-wider">
            <span className="text-hl-moss">01.</span> O Refúgio
          </a>
          <a href="#chales" className="font-sans text-xs text-dk-secondary-text hover:text-dk-text transition-colors flex items-center gap-1.5 uppercase font-medium tracking-wider">
            <span className="text-hl-moss">02.</span> Chalés
          </a>
          <a href="#pedra-do-bau" className="font-sans text-xs text-dk-secondary-text hover:text-dk-text transition-colors flex items-center gap-1.5 uppercase font-medium tracking-wider">
            <span className="text-hl-moss">03.</span> Pedra do Baú
          </a>
          <a href="#avaliacoes" className="font-sans text-xs text-dk-secondary-text hover:text-dk-text transition-colors flex items-center gap-1.5 uppercase font-medium tracking-wider">
            <span className="text-hl-moss">04.</span> Avaliações
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.airbnb.com.br/rooms/917479622006307880"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-hl-forest hover:bg-hl-forest/90 text-dk-text font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md shadow-hl-forest/10"
          >
            <span>Ver Disponibilidade</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-dk-secondary text-dk-text border border-dk-border"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dk-bg border-b border-dk-border px-6 py-6 space-y-4 font-sans text-xs font-medium">
          <a
            href="#refugio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-dk-text hover:text-hl-terracotta uppercase tracking-wider py-1"
          >
            <span className="text-hl-moss mr-2">01.</span> O REFÚGIO
          </a>
          <a
            href="#chales"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-dk-text hover:text-hl-terracotta uppercase tracking-wider py-1"
          >
            <span className="text-hl-moss mr-2">02.</span> CHALÉS
          </a>
          <a
            href="#pedra-do-bau"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-dk-text hover:text-hl-terracotta uppercase tracking-wider py-1"
          >
            <span className="text-hl-moss mr-2">03.</span> PEDRA DO BAÚ
          </a>
          <a
            href="#avaliacoes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-dk-text hover:text-hl-terracotta uppercase tracking-wider py-1"
          >
            <span className="text-hl-moss mr-2">04.</span> AVALIAÇÕES
          </a>
          <div className="pt-4 border-t border-dk-border">
            <a
              href="https://www.airbnb.com.br/rooms/917479622006307880"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-hl-forest hover:bg-hl-forest/90 text-dk-text font-sans text-xs font-bold uppercase rounded-full shadow-md shadow-hl-forest/10"
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
