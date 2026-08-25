import React from 'react';
import { Crosshair, MapPin, Mountain } from 'lucide-react';

export const Viewfinder: React.FC = () => {
  return (
    <section id="pedra-do-bau" className="py-24 px-4 sm:px-8 bg-[#151715] relative overflow-hidden border-t border-[#292A27]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D86A3E] uppercase tracking-widest bg-[#292A27] px-3 py-1 border border-[#77756E]/30 rounded-xs">
            <Crosshair className="w-3.5 h-3.5" />
            LANDMARK VISUAL · COMPASS VIEW
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#EDE9DF] tracking-tight leading-tight">
            A Pedra do Baú não é plano de fundo. <br />
            <span className="text-[#B9B3A6] font-light">Ela faz parte da estadia.</span>
          </h2>
          <p className="font-mono text-xs text-[#B9B3A6] max-w-xl mx-auto leading-relaxed">
            A orientação dos chalés foi desenhada para colocar o maciço rochoso no centro da sua rotina diária no Refúgio.
          </p>
        </div>

        {/* Viewfinder Framed Image Container */}
        <div className="relative rounded-sm overflow-hidden border border-[#77756E]/40 bg-[#292A27] h-[480px] sm:h-[600px] shadow-2xl">
          <img
            src="/images/7e55aa96-d831-4324-a119-31710f05edac.jpeg"
            alt="Vista frontal da Pedra do Baú a partir do deck"
            className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.9]"
          />
          
          {/* Subtle Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151715]/90 via-transparent to-[#151715]/40 pointer-events-none"></div>

          {/* Viewfinder Crosshair Cues */}
          <div className="absolute inset-8 sm:inset-16 border border-[#B9B3A6]/20 pointer-events-none flex flex-col justify-between p-4">
            {/* Top Corners */}
            <div className="flex justify-between font-mono text-[10px] text-[#EDE9DF]/80">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 border-l border-t border-[#D86A3E] inline-block"></span>
                FRAME ID // 0917
              </span>
              <span className="flex items-center gap-1">
                ALTITUDE: SÃO BENTO DO SAPUCAÍ
                <span className="w-2 h-2 border-r border-t border-[#D86A3E] inline-block"></span>
              </span>
            </div>

            {/* Center Target Pointer */}
            <div className="self-center flex flex-col items-center gap-2">
              <div className="w-16 h-16 border border-[#D86A3E]/60 rounded-full flex items-center justify-center relative">
                <div className="w-2 h-2 bg-[#D86A3E] rounded-full animate-ping"></div>
                <div className="w-1 h-1 bg-[#D86A3E] rounded-full"></div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#D86A3E]">N</div>
              </div>
              <div className="font-mono text-[11px] text-[#EDE9DF] bg-[#151715]/90 px-3 py-1 border border-[#77756E]/40 rounded-xs text-center backdrop-blur-md">
                PEDRA DO BAÚ · COMPLEXO DO BAÚ
              </div>
            </div>

            {/* Bottom Corners */}
            <div className="flex justify-between font-mono text-[10px] text-[#EDE9DF]/80">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 border-l border-b border-[#D86A3E] inline-block"></span>
                PAIOL GRANDE
              </span>
              <span className="flex items-center gap-1">
                SERRA DA MANTIQUEIRA · SP
                <span className="w-2 h-2 border-r border-b border-[#D86A3E] inline-block"></span>
              </span>
            </div>
          </div>

          {/* Bottom Caption Bar */}
          <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-[#B9B3A6] bg-[#151715]/90 backdrop-blur-md p-4 border border-[#77756E]/40 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mountain className="w-5 h-5 text-[#D86A3E]" />
              <div>
                <span className="text-[#EDE9DF] font-bold block">Complexo Pedras do Baú</span>
                <span className="text-[11px]">Pedra do Baú, Ana Chata e Bauzinho acessíveis a partir da região.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-right">
              <MapPin className="w-4 h-4 text-[#D86A3E]" />
              <span className="text-[#EDE9DF] text-[11px]">Bairro Paiol Grande — SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
