import React from 'react';
import { ArrowDown, MapPin, Mountain, Flame, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 overflow-hidden bg-[#151715]">
      {/* Background Image Layer with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/5906e06f-1029-488b-a81a-e3748c0c388b.jpeg"
          alt="Refúgio Santalena - Vista para as montanhas"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
        />
        {/* Subtle vignette and mountain cartography overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151715] via-[#151715]/40 to-[#151715]/70"></div>
        <div className="absolute inset-0 bg-topo-pattern opacity-30 pointer-events-none"></div>
      </div>

      {/* Cartographic Line Decorative SVG */}
      <svg
        className="absolute top-1/4 right-8 md:right-16 w-48 md:w-80 h-auto z-10 opacity-25 pointer-events-none text-[#B9B3A6]"
        viewBox="0 0 200 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M10,20 Q60,80 120,40 T190,120 T100,240 T20,290" strokeDasharray="3 3" />
        <circle cx="120" cy="40" r="3" fill="#D86A3E" />
        <circle cx="100" cy="240" r="2" fill="#B9B3A6" />
        <text x="130" y="45" fill="#EDE9DF" fontSize="8" fontFamily="IBM Plex Mono">WAYPOINT 01</text>
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto py-12 flex flex-col items-start">
        {/* Monospace Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#292A27]/80 border border-[#77756E]/40 backdrop-blur-md mb-6">
          <Compass className="w-3.5 h-3.5 text-[#D86A3E] animate-spin-slow" />
          <span className="font-mono text-xs text-[#EDE9DF] uppercase tracking-widest">
            REFÚGIO SANTALENA / PAIOL GRANDE / SP
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#EDE9DF] leading-[1.08] max-w-4xl mb-6">
          Entre montanhas, <br />
          <span className="text-[#EDE9DF] underline decoration-[#D86A3E]/70 underline-offset-8">
            existe um lugar para ficar.
          </span>
        </h1>

        {/* Body Text */}
        <p className="font-sans text-base sm:text-xl text-[#B9B3A6] max-w-2xl font-light leading-relaxed mb-10">
          Chalés privativos próximos à Pedra do Baú, feitos para duas pessoas, com natureza, fogo, água quente e uma vista que muda o plano do fim de semana.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <a
            href="#chales"
            className="w-full sm:w-auto text-center px-8 py-4 bg-[#D86A3E] hover:bg-[#c45b30] text-[#151715] font-mono text-sm font-bold uppercase tracking-wider rounded-sm shadow-xl shadow-[#D86A3E]/20 transition-all duration-200"
          >
            Escolher meu chalé
          </a>
          <a
            href="#refugio"
            className="w-full sm:w-auto text-center px-8 py-4 bg-[#292A27]/80 hover:bg-[#292A27] text-[#EDE9DF] border border-[#77756E]/40 font-mono text-sm font-medium uppercase tracking-wider rounded-sm backdrop-blur-sm transition-all duration-200"
          >
            Explorar o Refúgio
          </a>
        </div>
      </div>

      {/* Field Guide Bottom Metadata Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-[#77756E]/30 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-[#B9B3A6]">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#D86A3E]" />
          <div>
            <span className="block text-[10px] text-[#77756E] uppercase">LANDMARK</span>
            <span className="text-[#EDE9DF]">Pedra do Baú (Visível)</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mountain className="w-4 h-4 text-[#D86A3E]" />
          <div>
            <span className="block text-[10px] text-[#77756E] uppercase">LOCALIZAÇÃO</span>
            <span className="text-[#EDE9DF]">São Bento do Sapucaí — SP</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-[#D86A3E]" />
          <div>
            <span className="block text-[10px] text-[#77756E] uppercase">EXPERIÊNCIA</span>
            <span className="text-[#EDE9DF]">Jacuzzi · Lareira · Fogueira</span>
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-end gap-2">
          <div className="text-right">
            <span className="block text-[10px] text-[#77756E] uppercase">CAPACIDADE</span>
            <span className="text-[#EDE9DF]">02 Pessoas / Chalé</span>
          </div>
          <a
            href="#refugio"
            className="w-8 h-8 rounded-full bg-[#292A27] flex items-center justify-center text-[#EDE9DF] hover:text-[#D86A3E] transition-colors border border-[#77756E]/30 ml-2"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
