import React, { useState } from 'react';
import { ArrowUpRight, Check, Star, Mountain, Users, Flame, Eye } from 'lucide-react';

interface Chalet {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  tagline: string;
  capacity: string;
  architecture: string;
  view: string;
  rating: string;
  reviewsCount: string;
  badge: string;
  mainImage: string;
  highlights: string[];
  airbnbUrl: string;
}

export const ChaletSelector: React.FC = () => {
  const chalets: Chalet[] = [
    {
      id: 'kilimanjaro',
      number: '01',
      name: 'Kilimanjaro',
      subtitle: 'Chalé A-Frame em Madeira Nobre',
      tagline: 'Vista frontal livre para a Pedra do Baú e jacuzzi sob teto de vidro voltada para a mata.',
      capacity: '02 Hóspedes · 1 Quarto · 1 Cama Queen · 1 Banheiro',
      architecture: 'Madeira maciça em formato triangular (A-Frame), deck panorâmico em madeira e ambiente integrado.',
      view: 'Frontal para a Pedra do Baú (pôr do sol) e mata nativa nos fundos.',
      rating: '4.97',
      reviewsCount: '173 avaliações',
      badge: 'Preferido dos Hóspedes · Top 10%',
      mainImage: '/images/5906e06f-1029-488b-a81a-e3748c0c388b.jpeg',
      highlights: [
        'Jacuzzi externa privativa com teto de vidro',
        'Lareira interna a lenha + TV',
        'Banheiro com parede panorâmica em vidro',
        'Deck suspenso com cadeiras de balanço',
        'Cozinha completa + área para fogueira e churrasqueira'
      ],
      airbnbUrl: 'https://www.airbnb.com.br/rooms/917479622006307880'
    },
    {
      id: 'aconcagua',
      number: '02',
      name: 'Aconcágua',
      subtitle: 'Chalé Mineral em Pedra Maciça & Telhado Verde',
      tagline: 'Estrutura robusta em rocha, arquitetura de inspiração andina e conforto térmico natural.',
      capacity: '02 Hóspedes · 1 Quarto · 1 Cama Queen · 1 Banheiro',
      architecture: 'Alvenaria em pedra vulcânica/maciça, telhado verde com cobertura vegetal e vigamento rústico.',
      view: 'Vale do Paiol Grande e maciço da Mantiqueira.',
      rating: '4.95',
      reviewsCount: 'Superhost',
      badge: 'Coleção Mineral Santalena',
      mainImage: '/images/4b2c825e-c320-4d9b-b7b2-11f02bb08f21.jpeg',
      highlights: [
        'Construção autêntica em pedra e telhado vivo',
        'Jacuzzi aquecida com iluminação noturna',
        'Lareira de pedra e espaço para fogueira externa',
        'Ambiente aquecido e rústico de alta montanha',
        'Privacidade total cercada por vegetação nativa'
      ],
      airbnbUrl: 'https://www.airbnb.com.br/rooms/917479622006307880'
    }
  ];

  const [activeChaletId, setActiveChaletId] = useState<string>('kilimanjaro');
  const activeChalet = chalets.find(c => c.id === activeChaletId) || chalets[0];

  return (
    <section id="chales" className="py-24 px-4 sm:px-8 bg-[#151715] relative overflow-hidden">
      {/* Background Cartography */}
      <div className="absolute inset-0 bg-topo-pattern opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#77756E]/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D86A3E] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D86A3E]"></span>
              ACOMODAÇÕES / 02
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#EDE9DF] tracking-tight">
              Escolha sua montanha.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#B9B3A6] max-w-md">
            Cada chalé recebe o nome de uma grande montanha do mundo e possui arquitetura, materialidade e vista próprias.
          </p>
        </div>

        {/* Interactive Expedition Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Chalet Route Selector Tabs */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-[10px] text-[#77756E] uppercase tracking-widest block mb-2">
              QUADRO DE ROTAS DE HOSPEDAGEM
            </span>

            {chalets.map((chalet) => {
              const isActive = chalet.id === activeChaletId;
              return (
                <button
                  key={chalet.id}
                  onClick={() => setActiveChaletId(chalet.id)}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? 'bg-[#292A27] border-[#D86A3E] shadow-lg shadow-[#D86A3E]/10'
                      : 'bg-[#151715] border-[#77756E]/30 hover:border-[#77756E]/60 hover:bg-[#292A27]/40'
                  }`}
                >
                  {/* Left Indicator Line */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${
                      isActive ? 'bg-[#D86A3E]' : 'bg-transparent group-hover:bg-[#77756E]/40'
                    }`}
                  />

                  <div className="flex items-start justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#D86A3E]">
                      ROTA / {chalet.number}
                    </span>
                    <span className="font-mono text-[10px] text-[#B9B3A6] bg-[#151715] px-2 py-0.5 border border-[#77756E]/30 rounded-xs">
                      {chalet.badge.split('·')[0]}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-[#EDE9DF] group-hover:text-[#D86A3E] transition-colors mb-1">
                    Chalé {chalet.name}
                  </h3>

                  <p className="font-mono text-xs text-[#B9B3A6] line-clamp-1 mb-3">
                    {chalet.subtitle}
                  </p>

                  <div className="flex items-center gap-3 font-mono text-[11px] text-[#77756E]">
                    <span className="flex items-center gap-1 text-[#EDE9DF]">
                      <Star className="w-3 h-3 text-[#D86A3E] fill-[#D86A3E]" />
                      {chalet.rating}
                    </span>
                    <span>·</span>
                    <span>{chalet.capacity.split('·')[0]}</span>
                  </div>
                </button>
              );
            })}

            {/* Quick Note Box */}
            <div className="p-4 bg-[#292A27]/40 border border-[#77756E]/20 rounded-sm font-mono text-xs text-[#B9B3A6] space-y-2 mt-6">
              <div className="flex items-center gap-2 text-[#D86A3E]">
                <Mountain className="w-4 h-4" />
                <span className="font-bold uppercase">Nota de Reserva</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Ambos os chalés oferecem total privacidade, banho quente de alta pressão, cozinha completa e vista para o ecossistema da Pedra do Baú.
              </p>
            </div>
          </div>

          {/* Right Column: Active Chalet Preview & Deep Details */}
          <div className="lg:col-span-8 bg-[#292A27] border border-[#77756E]/30 rounded-sm overflow-hidden flex flex-col justify-between">
            {/* Image Preview Box */}
            <div className="relative h-80 sm:h-[420px] w-full overflow-hidden">
              <img
                src={activeChalet.mainImage}
                alt={`Chalé ${activeChalet.name}`}
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292A27] via-transparent to-transparent"></div>

              {/* Top Rating Badge */}
              <div className="absolute top-4 right-4 bg-[#151715]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#77756E]/40 font-mono text-xs text-[#EDE9DF] flex items-center gap-2 rounded-xs">
                <Star className="w-3.5 h-3.5 text-[#D86A3E] fill-[#D86A3E]" />
                <span className="font-bold">{activeChalet.rating}</span>
                <span className="text-[#B9B3A6]">({activeChalet.reviewsCount})</span>
              </div>

              {/* Bottom Image Caption */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-xs text-[#EDE9DF]">
                <div className="bg-[#151715]/80 backdrop-blur-sm px-3 py-1 border border-[#77756E]/30">
                  <span className="text-[#D86A3E] font-bold">ROTA {activeChalet.number}</span> · CHALÉ {activeChalet.name.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Chalet Specs & Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#D86A3E] uppercase tracking-widest">
                  {activeChalet.badge}
                </span>
                <h3 className="font-display font-bold text-3xl text-[#EDE9DF] mt-1 mb-2">
                  Chalé {activeChalet.name}
                </h3>
                <p className="font-sans text-base text-[#B9B3A6] leading-relaxed">
                  {activeChalet.tagline}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-y border-[#77756E]/30 font-mono text-xs">
                <div className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 text-[#D86A3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#77756E] text-[10px] uppercase">CAPACIDADE</span>
                    <span className="text-[#EDE9DF]">{activeChalet.capacity}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Eye className="w-4 h-4 text-[#D86A3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[#77756E] text-[10px] uppercase">VISTA PRINCIPAL</span>
                    <span className="text-[#EDE9DF]">{activeChalet.view}</span>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div>
                <h4 className="font-mono text-xs font-bold text-[#EDE9DF] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#D86A3E]" />
                  Destaques da Acomodação
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeChalet.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-mono text-xs text-[#B9B3A6]">
                      <div className="w-4 h-4 rounded-full bg-[#D86A3E]/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#D86A3E]" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Action CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#77756E]/20">
                <div className="font-mono text-xs text-[#B9B3A6]">
                  Disponibilidade em tempo real no Airbnb oficial
                </div>
                <a
                  href={activeChalet.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D86A3E] hover:bg-[#c45b30] text-[#151715] font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md shadow-[#D86A3E]/20"
                >
                  Consultar Datas — Chalé {activeChalet.name}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
