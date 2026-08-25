import React from 'react';
import { Mountain, ArrowUpRight, ShieldCheck, Flame, Layers } from 'lucide-react';

export const AconcaguaSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-dk-bg relative overflow-hidden border-t border-dk-border">
      {/* Mineral Contour Background Pattern */}
      <div className="absolute inset-0 bg-topo-pattern opacity-[0.06] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-dk-border pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-hl-moss uppercase tracking-wider font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-hl-moss"></span>
              ROTA / ACONCÁGUA
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-dk-text tracking-tight leading-tight max-w-3xl">
              Pedra, madeira e um pedaço dos Andes na Mantiqueira.
            </h2>
          </div>

          <div className="font-sans text-xs text-dk-secondary-text border-l-2 border-hl-clay pl-4 py-1">
            ROTA MINERAL // 6.961m Inspiração <br />
            Construção em pedra maciça com cobertura de telhado verde.
          </div>
        </div>

        {/* Mineral Architecture Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Block Left */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="bg-dk-secondary/80 border border-dk-border p-8 rounded-xl space-y-6 shadow-sm">
              <div className="space-y-3">
                <span className="font-sans text-xs text-hl-moss uppercase tracking-wider font-semibold">
                  ARQUITETURA MINERAL & TELHADO VIVO
                </span>
                <h3 className="font-display font-medium text-2xl text-dk-text">
                  Inspirado na maior montanha das Américas.
                </h3>
                <p className="font-sans text-sm text-dk-secondary-text leading-relaxed">
                  Diferente da leveza em madeira do Kilimanjaro, o Chalé Aconcágua traz a presença mineral das grandes cordilheiras. Parede em pedra natural, massa térmica e um telhado verde que se funde à paisagem da montanha.
                </p>
              </div>

              {/* Verified Features */}
              <div className="space-y-3 pt-4 border-t border-dk-border font-sans text-xs text-dk-text font-medium">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-hl-moss" />
                  <span>Construção com alvenaria de pedra maciça</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="w-4 h-4 text-hl-moss" />
                  <span>Telhado verde bioclimático (cobertura vegetal)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-hl-moss" />
                  <span>Jacuzzi privativa & praça de fogo externa</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-hl-moss" />
                  <span>Isolamento térmico natural e conforto acústico</span>
                </div>
              </div>

              <div className="pt-4 border-t border-dk-border">
                <a
                  href="https://www.airbnb.com.br/rooms/917479622006307880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-hl-forest hover:bg-hl-forest/90 text-dk-text font-sans text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md shadow-hl-forest/10"
                >
                  Consultar Chalé Aconcágua no Airbnb
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Large Image Right */}
          <div className="lg:col-span-7 relative group rounded-lg overflow-hidden border border-dk-border bg-dk-secondary min-h-[380px] lg:min-h-[460px] order-1 lg:order-2">
            <img
              src="/images/4b2c825e-c320-4d9b-b7b2-11f02bb08f21.jpeg"
              alt="Construção integrada à natureza do Refúgio Santalena"
              className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dk-bg via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 font-sans text-xs text-dk-text bg-dk-bg/90 backdrop-blur-md p-4 border border-dk-border rounded-lg flex items-center justify-between shadow-sm">
              <div>
                <span className="block text-[10px] text-hl-terracotta uppercase font-bold tracking-wider">MATERIALIDADE</span>
                <span className="font-semibold text-dk-text">Pedra, Rocha & Cobertura Vegetal</span>
              </div>
              <span className="text-hl-terracotta font-bold tracking-wider">ACONCÁGUA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
