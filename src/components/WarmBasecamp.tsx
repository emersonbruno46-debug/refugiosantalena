import { Flame, Droplets, Utensils, BedDouble } from 'lucide-react';

export const WarmBasecamp: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-[#151715] relative overflow-hidden border-t border-[#292A27]">
      {/* Background Cartography */}
      <div className="absolute inset-0 bg-topo-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D86A3E] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D86A3E]"></span>
            DEPOIS DA TRILHA / OU MESMO SEM ELA
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#EDE9DF] tracking-tight leading-tight">
            Chegue. Tire as botas. Fique.
          </h2>
          <p className="font-sans text-base text-[#B9B3A6] leading-relaxed">
            O Refúgio foi pensado tanto para quem passou o dia caminhando pelas cristas da Mantiqueira quanto para quem quer apenas acender a lareira, abrir um vinho e observar o vento passar pelas copas das árvores.
          </p>
        </div>

        {/* Tactile Collage Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main Photo Collage Left */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="rounded-sm overflow-hidden border border-[#77756E]/30 bg-[#292A27] h-64 sm:h-80 group">
                <img
                  src="/images/0af6a9a8-c099-4c1d-8923-e3a8c469d032.jpeg"
                  alt="Jacuzzi externa e iluminação aquecida"
                  className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 font-mono text-[10px] text-[#EDE9DF] bg-[#151715]/80 p-1.5 rounded-xs">
                  AQUACULTURA // Jacuzzi sob Teto de Vidro
                </div>
              </div>

              <div className="rounded-sm overflow-hidden border border-[#77756E]/30 bg-[#292A27] h-48 sm:h-56 group">
                <img
                  src="/images/07ccd2ef-2c03-4a0a-9a73-683f21a29395.jpeg"
                  alt="Lareira interna a lenha e poltronas"
                  className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 font-mono text-[10px] text-[#EDE9DF] bg-[#151715]/80 p-1.5 rounded-xs">
                  FOGO // Lareira Interna a Lenha
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-sm overflow-hidden border border-[#77756E]/30 bg-[#292A27] h-52 sm:h-64 group">
                <img
                  src="/images/b6e3622a-77a0-4f98-bc74-b6a2182ff270.jpeg"
                  alt="Cama Queen e roupões para aquecimento"
                  className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 font-mono text-[10px] text-[#EDE9DF] bg-[#151715]/80 p-1.5 rounded-xs">
                  REPOUSO // Cama Queen & Roupões
                </div>
              </div>

              <div className="rounded-sm overflow-hidden border border-[#77756E]/30 bg-[#292A27] h-60 sm:h-72 group">
                <img
                  src="/images/c5d28a38-12c9-46b5-b126-afa5c25513a8.jpeg"
                  alt="Café da manhã no deck ao ar livre"
                  className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 font-mono text-[10px] text-[#EDE9DF] bg-[#151715]/80 p-1.5 rounded-xs">
                  ALVORADA // Deck Solarium em Madeira
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hospitalities Matrix */}
          <div className="md:col-span-5 bg-[#292A27]/60 border border-[#77756E]/30 p-8 rounded-sm space-y-6">
            <h3 className="font-display font-bold text-2xl text-[#EDE9DF]">
              Hospitalidade de abrigo de montanha.
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-[#151715]/80 border border-[#77756E]/30 rounded-xs space-y-1">
                <div className="flex items-center gap-2 text-[#D86A3E] font-bold">
                  <Droplets className="w-4 h-4" />
                  <span>JACUZZI EXTERNA PRIVATIVA</span>
                </div>
                <p className="text-[#B9B3A6] text-[11px] leading-relaxed">
                  Água aquecida instalada sob teto de vidro, permitindo contemplar a chuva ou o céu estrelado em total privacidade.
                </p>
              </div>

              <div className="p-4 bg-[#151715]/80 border border-[#77756E]/30 rounded-xs space-y-1">
                <div className="flex items-center gap-2 text-[#D86A3E] font-bold">
                  <Flame className="w-4 h-4" />
                  <span>LAREIRA & PRAÇA DE FOGUEIRA</span>
                </div>
                <p className="text-[#B9B3A6] text-[11px] leading-relaxed">
                  Calor interno para as noites frias da serra e espaço externo privativo para fogueira sob as estrelas.
                </p>
              </div>

              <div className="p-4 bg-[#151715]/80 border border-[#77756E]/30 rounded-xs space-y-1">
                <div className="flex items-center gap-2 text-[#D86A3E] font-bold">
                  <Utensils className="w-4 h-4" />
                  <span>COZINHA COMPLETA & CHURRASQUEIRA</span>
                </div>
                <p className="text-[#B9B3A6] text-[11px] leading-relaxed">
                  Utensílios para refeições, cafeteira, cooktop, geladeira e churrasqueira para autonomia total na estadia.
                </p>
              </div>

              <div className="p-4 bg-[#151715]/80 border border-[#77756E]/30 rounded-xs space-y-1">
                <div className="flex items-center gap-2 text-[#D86A3E] font-bold">
                  <BedDouble className="w-4 h-4" />
                  <span>CONFORTO TÉRMICO & ENXOVAL</span>
                </div>
                <p className="text-[#B9B3A6] text-[11px] leading-relaxed">
                  Cama queen size, travesseiros macios, roupões de banho e duchas de alta vazão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
