import React from 'react';
import { Crosshair, MapPin, Mountain } from 'lucide-react';

export const Viewfinder: React.FC = () => {
  return (
    <section id="pedra-do-bau" className="py-24 px-4 sm:px-8 bg-dk-bg relative overflow-hidden border-t border-dk-border">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 font-sans text-xs text-hl-moss uppercase tracking-wider font-semibold">
            <Crosshair className="w-3.5 h-3.5" />
            LANDMARK VISUAL · COMPASS VIEW
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-dk-text tracking-tight leading-tight">
            A Pedra do Baú não é plano de fundo. <br />
            <span className="text-dk-secondary-text font-light">Ela faz parte da estadia.</span>
          </h2>
          <p className="font-sans text-xs text-dk-secondary-text max-w-xl mx-auto leading-relaxed">
            A orientação dos chalés foi desenhada para colocar o maciço rochoso no centro da sua rotina diária no Refúgio.
          </p>
        </div>

        {/* Viewfinder Framed Image Container */}
        <div className="relative rounded-xl overflow-hidden border border-dk-border bg-dk-bg h-[480px] sm:h-[600px] shadow-2xl">
          <img
            src="/images/7e55aa96-d831-4324-a119-31710f05edac.jpeg"
            alt="Vista frontal da Pedra do Baú a partir do deck"
            className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.9]"
          />
          
          {/* Subtle Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-dk-bg/95 via-transparent to-dk-bg/40 pointer-events-none"></div>

          {/* Viewfinder Crosshair Cues */}
          <div className="absolute inset-8 sm:inset-16 border border-limestone/20 pointer-events-none flex flex-col justify-between p-4">
            {/* Top Corners */}
            <div className="flex justify-between font-sans text-[10px] text-dk-text/80">
              <span className="flex items-center gap-1 font-medium">
                <span className="w-2 h-2 border-l border-t border-hl-moss inline-block"></span>
                FRAME ID // 0917
              </span>
              <span className="flex items-center gap-1 font-medium">
                ALTITUDE: SÃO BENTO DO SAPUCAÍ
                <span className="w-2 h-2 border-r border-t border-hl-moss inline-block"></span>
              </span>
            </div>

            {/* Center Target Pointer */}
            <div className="self-center flex flex-col items-center gap-2">
              <div className="w-16 h-16 border border-hl-moss/60 rounded-full flex items-center justify-center relative">
                <div className="w-2 h-2 bg-hl-moss rounded-full animate-ping"></div>
                <div className="w-1 h-1 bg-hl-moss rounded-full"></div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-sans text-hl-moss">N</div>
              </div>
              <div className="font-sans text-[11px] text-white bg-white/10 px-3.5 py-1 border border-white/10 rounded-full text-center backdrop-blur-md font-semibold tracking-wide shadow-sm">
                PEDRA DO BAÚ · COMPLEXO DO BAÚ
              </div>
            </div>

            {/* Bottom Corners */}
            <div className="flex justify-between font-sans text-[10px] text-white/90">
              <span className="flex items-center gap-1 font-medium">
                <span className="w-2 h-2 border-l border-b border-hl-moss inline-block"></span>
                PAIOL GRANDE
              </span>
              <span className="flex items-center gap-1 font-medium">
                SERRA DA MANTIQUEIRA · SP
                <span className="w-2 h-2 border-r border-b border-hl-moss inline-block"></span>
              </span>
            </div>
          </div>

          {/* Bottom Caption Bar */}
          <div className="absolute bottom-6 left-6 right-6 font-sans text-xs text-white/80 bg-white/10 backdrop-blur-md p-4 border border-white/10 rounded-full px-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
            <div className="flex items-center gap-3">
              <Mountain className="w-5 h-5 text-white/90" />
              <div>
                <span className="text-white font-bold block">Complexo Pedras do Baú</span>
                <span className="text-[11px] text-white/70">Pedra do Baú, Ana Chata e Bauzinho acessíveis a partir da região.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-right">
              <MapPin className="w-4 h-4 text-white/90" />
              <span className="text-white text-[11px] font-semibold">Bairro Paiol Grande — SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
