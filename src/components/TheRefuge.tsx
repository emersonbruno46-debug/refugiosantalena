import React from 'react';
import { Mountain, Compass, Shield, Wind } from 'lucide-react';

export const TheRefuge: React.FC = () => {
  return (
    <section id="refugio" className="py-24 px-4 sm:px-8 bg-summit relative overflow-hidden border-b border-graphite">
      {/* Background Topo Lines */}
      <div className="absolute inset-0 bg-topo-lines opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-signal uppercase tracking-widest font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-signal"></span>
              BASE / 01
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-paper tracking-tight leading-tight max-w-2xl">
              Seu ponto de chegada aos pés da montanha.
            </h2>
          </div>
          <div className="max-w-md font-sans text-xs text-limestone leading-relaxed border-l-2 border-signal pl-4 py-1">
            RS — SBS — SP · Bairro Paiol Grande. <br />
            Chalés pensados para quem busca silêncio, paisagem e a presença física da Pedra do Baú.
          </div>
        </div>

        {/* Graphic & Modular Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Image Box */}
          <div className="lg:col-span-7 relative group rounded-lg overflow-hidden border border-rock/30 bg-graphite min-h-[420px] lg:min-h-[500px]">
            <img
              src="/images/4b2c825e-c320-4d9b-b7b2-11f02bb08f21.jpeg"
              alt="Refúgio Santalena - Imagem da propriedade e encosta"
              className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-summit via-transparent to-transparent"></div>
            
            {/* Technical Stamp Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-sans text-xs text-paper bg-summit/80 backdrop-blur-md p-4 border border-rock/40 rounded-sm">
              <div>
                <span className="block text-[10px] text-limestone uppercase tracking-wider">PROPRIEDADE</span>
                <span className="font-semibold">Refúgio Santalena · Terreno Privativo</span>
              </div>
              <span className="px-2.5 py-1 bg-graphite text-signal border border-signal/30 rounded-full text-[10px] font-medium tracking-wider">
                MANTIQUEIRA
              </span>
            </div>
          </div>

          {/* Right Modular Info & Smaller Landscape Cut */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Secondary Landscape Image */}
            <div className="relative rounded-lg overflow-hidden border border-rock/30 bg-graphite h-56 sm:h-64">
              <img
                src="/images/1ac96186-c3ca-41e8-8e46-8bf473e953bb.jpeg"
                alt="Arquitetura do chalé em meio à vegetação"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-summit/80 to-transparent"></div>
              <div className="absolute top-4 right-4 font-sans text-[10px] text-paper bg-graphite/90 px-2.5 py-1 border border-rock/40 rounded-full tracking-wider font-medium">
                FASE DE CAMPO / A-FRAME
              </div>
            </div>

            {/* Factual Narrative Blocks */}
            <div className="bg-graphite/60 border border-rock/30 p-6 rounded-lg space-y-6">
              <div className="space-y-3">
                <h3 className="font-display font-medium text-xl text-paper">
                  Natureza bruta com o conforto exato.
                </h3>
                <p className="font-sans text-sm text-limestone leading-relaxed">
                  O Refúgio Santalena não é um hotel nem uma pousada convencional. É uma coleção de chalés individuais situados no vale do Paiol Grande, desenhados para acolher duas pessoas em busca de isolamento, vista limpa e clima de montanha.
                </p>
              </div>

              {/* Technical Spec List */}
              <div className="pt-4 border-t border-rock/30 grid grid-cols-2 gap-4 font-sans text-xs">
                <div className="flex items-center gap-2 text-limestone">
                  <Shield className="w-4 h-4 text-signal" />
                  <span>100% Privativo</span>
                </div>
                <div className="flex items-center gap-2 text-limestone">
                  <Mountain className="w-4 h-4 text-signal" />
                  <span>Pés da Pedra do Baú</span>
                </div>
                <div className="flex items-center gap-2 text-limestone">
                  <Wind className="w-4 h-4 text-signal" />
                  <span>Ar Puro de Altitude</span>
                </div>
                <div className="flex items-center gap-2 text-limestone">
                  <Compass className="w-4 h-4 text-signal" />
                  <span>Acesso às Trilhas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
