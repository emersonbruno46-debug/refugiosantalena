import { Star, ShieldCheck, ArrowUpRight, Heart } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviewsList = [
    {
      author: 'Juliana & Thiago',
      date: 'Fevereiro de 2026',
      unit: 'Chalé Kilimanjaro',
      rating: 5,
      text: 'Lugar indescritível. A vista para a Pedra do Baú direto da varanda e da cama é surreal. A jacuzzi com teto de vidro para ver as estrelas e a mata nos fundos deixou o fim de semana perfeito. Tudo impecável!'
    },
    {
      author: 'Lucas M.',
      date: 'Janeiro de 2026',
      unit: 'Chalé Kilimanjaro',
      rating: 5,
      text: 'O refúgio é exatamente o que promete: paz, privacidade absoluta e uma estrutura excelente. A lareira aqueceu perfeitamente a noite fria e o banho com parede panorâmica em vidro é incrível.'
    },
    {
      author: 'Carolina & Gabriel',
      date: 'Dezembro de 2025',
      unit: 'Chalé Aconcágua',
      rating: 5,
      text: 'Experiência única em São Bento do Sapucaí. A arquitetura em pedra traz um aconchego absurdo. Fazer uma fogueira à noite olhando para a montanha renovou nossas energias. Voltaremos com certeza.'
    }
  ];

  return (
    <section id="avaliacoes" className="py-24 px-4 sm:px-8 bg-wl-cream relative overflow-hidden border-t border-wl-border">
      {/* Topo Lines */}
      <div className="absolute inset-0 bg-topo-lines opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-wl-border pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-hl-moss uppercase tracking-wider font-semibold mb-3">
              <Star className="w-4 h-4 text-hl-moss fill-hl-moss" />
              GUEST LOGBOOK · RECONHECIMENTO OFICIAL
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-wl-text tracking-tight">
              Quem passou por aqui deixou registro.
            </h2>
          </div>

          {/* Metrics Card */}
          <div className="flex flex-wrap items-center gap-4 bg-white/45 px-5 py-3 border border-white/40 rounded-full font-sans text-xs shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-hl-terracotta fill-hl-terracotta" />
              <span className="font-semibold text-lg text-wl-text">4.97</span>
            </div>
            <div className="h-6 w-px bg-wl-border"></div>
            <div>
              <span className="block text-wl-text font-semibold">173 Avaliações</span>
              <span className="text-[10px] text-hl-terracotta font-bold uppercase tracking-wider">Preferido dos Hóspedes · Top 10%</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((rev, index) => (
            <div
              key={index}
              className="bg-white/35 p-8 rounded-xl flex flex-col justify-between space-y-6 relative group shadow-sm border border-white/30 backdrop-blur-md transition-all hover:bg-white/50"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-hl-terracotta fill-hl-terracotta" />
                    ))}
                  </div>
                  <span className="font-sans text-[10px] text-hl-moss font-semibold uppercase tracking-wider">
                    {rev.unit}
                  </span>
                </div>

                <p className="font-display text-base text-wl-text leading-[1.65] italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-wl-border flex items-center justify-between font-sans text-xs">
                <div>
                  <span className="font-bold text-wl-text block">{rev.author}</span>
                  <span className="text-[10px] text-wl-secondary">{rev.date}</span>
                </div>
                <ShieldCheck className="w-4 h-4 text-hl-moss" />
              </div>
            </div>
          ))}
        </div>

        {/* Airbnb Reviews Link Bar */}
        <div className="bg-white/35 p-6 border border-white/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-hl-moss" />
            <span className="text-wl-secondary">
              Avaliações reais e auditadas diretamente no perfil oficial do Refúgio Santalena no Airbnb.
            </span>
          </div>
          <a
            href="https://www.airbnb.com.br/rooms/917479622006307880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-hl-forest hover:bg-forest text-dk-text font-bold uppercase rounded-full transition-all shadow-md shadow-hl-forest/10 shrink-0"
          >
            Ler todas as avaliações no Airbnb
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
