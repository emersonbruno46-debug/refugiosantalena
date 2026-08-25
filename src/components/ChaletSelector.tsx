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
    <section id="chales" className="py-24 px-4 sm:px-8 bg-summit relative overflow-hidden">
      {/* Background Cartography */}
      <div className="absolute inset-0 bg-topo-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-rock/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-signal uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-signal"></span>
              ACOMODAÇÕES / 02
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-paper tracking-tight">
              Escolha sua montanha.
            </h2>
          </div>
          <p className="font-sans text-xs text-limestone max-w-md">
            Cada chalé recebe o nome de uma grande montanha do mundo e possui arquitetura, materialidade e vista próprias.
          </p>
        </div>

        {/* Interactive Expedition Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Chalet Route Selector Tabs */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-sans text-[10px] text-rock uppercase tracking-wider block mb-2">
              QUADRO DE ROTAS DE HOSPEDAGEM
            </span>

            {chalets.map((chalet) => {
              const isActive = chalet.id === activeChaletId;
              return (
                <button
                  key={chalet.id}
                  onClick={() => setActiveChaletId(chalet.id)}
                  className={`w-full text-left p-6 rounded-lg border transition-all duration-300 relative overflow-hidden group ${
                    isActive
                      ? 'bg-graphite border-signal shadow-lg shadow-signal/10'
                      : 'bg-summit border-rock/30 hover:border-rock/60 hover:bg-graphite/40'
                  }`}
                >
                  {/* Left Indicator Line */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${
                      isActive ? 'bg-signal' : 'bg-transparent group-hover:bg-rock/40'
                    }`}
                  />

                  <div className="flex items-start justify-between mb-2">
                    <span className="font-sans text-xs font-bold text-signal">
                      ROTA / {chalet.number}
                    </span>
                    <span className="font-sans text-[10px] text-limestone bg-summit px-2.5 py-0.5 border border-rock/30 rounded-full tracking-wider font-medium">
                      {chalet.badge.split('·')[0]}
                    </span>
                  </div>

                  <h3 className="font-display font-medium text-2xl text-paper group-hover:text-signal transition-colors mb-1">
                    Chalé {chalet.name}
                  </h3>

                  <p className="font-sans text-xs text-limestone line-clamp-1 mb-3">
                    {chalet.subtitle}
                  </p>

                  <div className="flex items-center gap-3 font-sans text-[11px] text-rock">
                    <span className="flex items-center gap-1 text-paper">
                      <Star className="w-3 h-3 text-signal fill-signal" />
                      {chalet.rating}
                    </span>
                    <span>·</span>
                    <span>{chalet.capacity.split('·')[0]}</span>
                  </div>
                </button>
              );
            })}

            {/* Quick Note Box */}
            <div className="p-4 bg-graphite/40 border border-rock/20 rounded-sm font-sans text-xs text-limestone space-y-2 mt-6">
              <div className="flex items-center gap-2 text-signal">
                <Mountain className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider">Nota de Reserva</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Ambos os chalés oferecem total privacidade, banho quente de alta pressão, cozinha completa e vista para o ecossistema da Pedra do Baú.
              </p>
            </div>
          </div>

          {/* Right Column: Active Chalet Preview & Deep Details */}
          <div className="lg:col-span-8 bg-graphite border border-rock/30 rounded-lg overflow-hidden flex flex-col justify-between">
            {/* Image Preview Box */}
            <div className="relative h-80 sm:h-[420px] w-full overflow-hidden">
              <img
                src={activeChalet.mainImage}
                alt={`Chalé ${activeChalet.name}`}
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent"></div>

              {/* Top Rating Badge */}
              <div className="absolute top-4 right-4 bg-summit/90 backdrop-blur-md px-3.5 py-1.5 border border-rock/40 font-sans text-xs text-paper flex items-center gap-2 rounded-full font-medium">
                <Star className="w-3.5 h-3.5 text-signal fill-signal" />
                <span className="font-semibold">{activeChalet.rating}</span>
                <span className="text-limestone">({activeChalet.reviewsCount})</span>
              </div>

              {/* Bottom Image Caption */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-sans text-xs text-paper">
                <div className="bg-summit/80 backdrop-blur-sm px-3.5 py-1 border border-rock/30 rounded-full font-medium">
                  <span className="text-signal font-semibold">ROTA {activeChalet.number}</span> · CHALÉ {activeChalet.name.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Chalet Specs & Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="font-sans text-xs text-signal uppercase tracking-widest font-semibold">
                  {activeChalet.badge}
                </span>
                <h3 className="font-display font-medium text-3xl text-paper mt-1 mb-2">
                  Chalé {activeChalet.name}
                </h3>
                <p className="font-sans text-base text-limestone leading-relaxed">
                  {activeChalet.tagline}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-y border-rock/30 font-sans text-xs">
                <div className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-rock text-[10px] uppercase tracking-wider">CAPACIDADE</span>
                    <span className="text-paper font-medium">{activeChalet.capacity}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Eye className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-rock text-[10px] uppercase tracking-wider">VISTA PRINCIPAL</span>
                    <span className="text-paper font-medium">{activeChalet.view}</span>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div>
                <h4 className="font-sans text-xs font-bold text-paper uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-signal" />
                  Destaques da Acomodação
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeChalet.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-sans text-xs text-limestone">
                      <div className="w-4 h-4 rounded-full bg-signal/20 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-signal" />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Action CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-rock/20">
                <div className="font-sans text-xs text-limestone">
                  Disponibilidade em tempo real no Airbnb oficial
                </div>
                <a
                  href={activeChalet.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-deep-forest hover:bg-forest text-warm-cream font-sans text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md shadow-deep-forest/20"
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
