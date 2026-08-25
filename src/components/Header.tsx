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
          ? 'bg-white/60 backdrop-blur-md border-b border-black/5 py-2 shadow-sm'
          : 'bg-gradient-to-b from-dk-bg/85 via-dk-bg/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Only - Enlarged and Color-Inverted on Scroll */}
        <a href="#" className="flex items-center group">
          <div className={`rounded-xl flex items-center justify-center transition-all duration-300 p-1.5 ${
            scrolled ? 'w-12 h-12 bg-white/40 border border-black/5 shadow-sm' : 'w-14 h-14 bg-dk-secondary border border-dk-border'
          } group-hover:border-hl-terracotta`}>
            <img
              src="/LOGO SANTALENA.svg"
              alt="Refúgio Santalena"
              className={`w-full h-full object-contain transition-all duration-300 ${
                scrolled ? 'filter brightness-0' : 'filter brightness-0 invert'
              }`}
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`hidden md:flex items-center gap-8 border px-6 py-2 rounded-full backdrop-blur-sm transition-colors duration-300 ${
          scrolled
            ? 'bg-white/45 border-black/5'
            : 'bg-dk-secondary/40 border-dk-border'
        }`}>
          <a href="#refugio" className={`font-sans text-xs transition-colors flex items-center gap-1.5 uppercase font-medium tracking-wider ${
            scrolled ? 'text-wl-text hover:text-hl-terracotta' : 'text-dk-secondary-text hover:text-dk-text'
          }`}>
            <span className="text-hl-moss">01.</span> O Refúgio
          </a>
          <a href="#chales" className={`font-sans text-xs transition-colors flex items-center gap-1.5 uppercase font-medium tracking-wider ${
            scrolled ? 'text-wl-text hover:text-hl-terracotta' : 'text-dk-secondary-text hover:text-dk-text'
          }`}>
            <span className="text-hl-moss">02.</span> Chalés
          </a>
          <a href="#pedra-do-bau" className={`font-sans text-xs transition-colors flex items-center gap-1.5 uppercase font-medium tracking-wider ${
            scrolled ? 'text-wl-text hover:text-hl-terracotta' : 'text-dk-secondary-text hover:text-dk-text'
          }`}>
            <span className="text-hl-moss">03.</span> Pedra do Baú
          </a>
          <a href="#avaliacoes" className={`font-sans text-xs transition-colors flex items-center gap-1.5 uppercase font-medium tracking-wider ${
            scrolled ? 'text-wl-text hover:text-hl-terracotta' : 'text-dk-secondary-text hover:text-dk-text'
          }`}>
            <span className="text-hl-moss">04.</span> Avaliações
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.airbnb.com.br/rooms/917479622006307880"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-hl-forest hover:bg-hl-forest/90 text-white font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md shadow-hl-forest/10"
          >
            <span>Ver Disponibilidade</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg border transition-colors ${
            scrolled
              ? 'bg-white/50 text-wl-text border-black/5'
              : 'bg-dk-secondary text-dk-text border-dk-border'
          }`}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-6 py-6 space-y-4 font-sans text-xs font-medium backdrop-blur-md ${
          scrolled
            ? 'bg-white/85 border-black/5'
            : 'bg-dk-bg/95 border-dk-border'
        }`}>
          <a
            href="#refugio"
            onClick={() => setMobileMenuOpen(false)}
            className={`block uppercase tracking-wider py-1 ${scrolled ? 'text-wl-text hover:text-hl-terracotta' : 'text-dk-text hover:text-hl-terracotta'}`}
          >
            <span className="text-hl-moss mr-2">01.</span> O REFÚGIO
          </a>
          <a
            href="#chales"
            onClick={() => setMobileMenuOpen(false)}
            className={`block uppercase tracking-wider py-1 ${scrolled ? 'text-wl-text hover:text-hl-terracotta' : 'text-dk-text hover:text-hl-terracotta'}`}
          >
            <span className="text-hl-moss mr-2">02.</span> CHALÉS
          </a>
          <a
            href="#pedra-do-bau"
            onClick={() => setMobileMenuOpen(false)}
            className={`block uppercase tracking-wider py-1 ${scrolled ? 'text-wl-text hover:text-hl-terracotta' : 'text-dk-text hover:text-hl-terracotta'}`}
          >
            <span className="text-hl-moss mr-2">03.</span> PEDRA DO BAÚ
          </a>
          <a
            href="#avaliacoes"
            onClick={() => setMobileMenuOpen(false)}
            className={`block uppercase tracking-wider py-1 ${scrolled ? 'text-wl-text hover:text-hl-terracotta' : 'text-dk-text hover:text-hl-terracotta'}`}
          >
            <span className="text-hl-moss mr-2">04.</span> AVALIAÇÕES
          </a>
          <div className={`pt-4 border-t ${scrolled ? 'border-black/5' : 'border-dk-border'}`}>
            <a
              href="https://www.airbnb.com.br/rooms/917479622006307880"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-hl-forest hover:bg-hl-forest/90 text-white font-sans text-xs font-bold uppercase rounded-full shadow-md shadow-hl-forest/10"
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
