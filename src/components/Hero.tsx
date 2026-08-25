import React from 'react';
import { ArrowDown, MapPin, Mountain, Flame, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 overflow-hidden bg-dk-bg">
      {/* Background Image Layer with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/5906e06f-1029-488b-a81a-e3748c0c388b.jpeg"
          alt="Refúgio Santalena - Vista para as montanhas"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
        />
        {/* Subtle vignette and mountain cartography overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dk-bg/95 via-dk-bg/40 to-dk-bg/75"></div>
        <div className="absolute inset-0 bg-topo-pattern opacity-15 pointer-events-none"></div>
      </div>

      {/* Cartographic Line Decorative SVG */}
      <svg
        className="absolute top-1/4 right-8 md:right-16 w-48 md:w-80 h-auto z-10 opacity-15 pointer-events-none text-dk-secondary-text"
        viewBox="0 0 200 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M10,20 Q60,80 120,40 T190,120 T100,240 T20,290" strokeDasharray="3 3" />
        <circle cx="120" cy="40" r="3" fill="#A65F43" />
        <circle cx="100" cy="240" r="2" fill="#C8BDB0" />
        <text x="130" y="45" fill="#F3EDE3" fontSize="8" fontFamily="DM Sans">WAYPOINT 01</text>
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto py-12 flex flex-col items-start">
        {/* Monospace Eyebrow Badge (Borderless & text-only per instructions) */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Compass className="w-3.5 h-3.5 text-hl-terracotta animate-spin-slow" />
          <span className="font-sans text-xs text-dk-text uppercase tracking-wider font-semibold">
            REFÚGIO SANTALENA / PAIOL GRANDE / SP
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight text-dk-text leading-[1.12] max-w-4xl mb-6">
          Entre montanhas, <br />
          <span className="text-dk-text underline decoration-hl-terracotta/70 underline-offset-8">
            existe um lugar para ficar.
          </span>
        </h1>

        {/* Body Text */}
        <p className="font-sans text-base sm:text-xl text-dk-secondary-text max-w-2xl font-light leading-[1.65] mb-10">
          Chalés privativos próximos à Pedra do Baú, feitos para duas pessoas, com natureza, fogo, água quente e uma vista que muda o plano do fim de semana.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <a
            href="#chales"
            className="w-full sm:w-auto text-center px-8 py-4 bg-hl-forest hover:bg-hl-forest/90 text-dk-text font-sans text-sm font-semibold uppercase tracking-wider rounded-full shadow-xl shadow-hl-forest/10 transition-all duration-200"
          >
            Escolher meu chalé
          </a>
          <a
            href="#refugio"
            className="w-full sm:w-auto text-center px-8 py-4 bg-dk-text/10 hover:bg-dk-text/20 text-dk-text border border-dk-text/20 font-sans text-sm font-medium uppercase tracking-wider rounded-full backdrop-blur-sm transition-all duration-200"
          >
            Explorar o Refúgio
          </a>
        </div>
      </div>

      {/* Field Guide Bottom Metadata Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-dk-border grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans text-dk-secondary-text">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-hl-moss" />
          <div>
            <span className="block text-[10px] text-hl-moss uppercase tracking-wider font-semibold">LANDMARK</span>
            <span className="text-dk-text font-medium">Pedra do Baú (Visível)</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mountain className="w-4 h-4 text-hl-moss" />
          <div>
            <span className="block text-[10px] text-hl-moss uppercase tracking-wider font-semibold">LOCALIZAÇÃO</span>
            <span className="text-dk-text font-medium">São Bento do Sapucaí — SP</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-hl-moss" />
          <div>
            <span className="block text-[10px] text-hl-moss uppercase tracking-wider font-semibold">EXPERIÊNCIA</span>
            <span className="text-dk-text font-medium">Jacuzzi · Lareira · Fogueira</span>
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-end gap-2">
          <div className="text-right">
            <span className="block text-[10px] text-hl-moss uppercase tracking-wider font-semibold">CAPACIDADE</span>
            <span className="text-dk-text font-medium">02 Pessoas / Chalé</span>
          </div>
          <a
            href="#refugio"
            className="w-8 h-8 rounded-full bg-dk-secondary flex items-center justify-center text-dk-text hover:text-hl-terracotta transition-colors border border-dk-border ml-2"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
