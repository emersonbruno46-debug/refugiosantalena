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
    <section id="avaliacoes" className="py-24 px-4 sm:px-8 bg-summit relative overflow-hidden border-t border-graphite">
      {/* Topo Lines */}
      <div className="absolute inset-0 bg-topo-lines opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-rock/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-signal uppercase tracking-widest font-semibold mb-3">
              <Star className="w-4 h-4 text-signal fill-signal" />
              GUEST LOGBOOK · RECONHECIMENTO OFICIAL
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-paper tracking-tight">
              Quem passou por aqui deixou registro.
            </h2>
          </div>

          {/* Metrics Card */}
          <div className="flex flex-wrap items-center gap-4 bg-graphite px-5 py-3 border border-rock/30 rounded-full font-sans text-xs">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-signal fill-signal" />
              <span className="font-semibold text-lg text-paper">4.97</span>
            </div>
            <div className="h-6 w-px bg-rock/30"></div>
            <div>
              <span className="block text-paper font-semibold">173 Avaliações</span>
              <span className="text-[10px] text-signal font-semibold uppercase tracking-wider">Preferido dos Hóspedes · Top 10%</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((rev, index) => (
            <div
              key={index}
              className="bg-warm-cream border border-rock/20 p-8 rounded-lg flex flex-col justify-between space-y-6 relative group hover:border-signal/50 transition-colors shadow-sm"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-clay fill-clay" />
                    ))}
                  </div>
                  <span className="font-sans text-[10px] text-clay bg-parchment px-2.5 py-0.5 border border-rock/20 rounded-full font-medium">
                    {rev.unit}
                  </span>
                </div>

                <p className="font-display text-base text-warm-charcoal leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-rock/20 flex items-center justify-between font-sans text-xs">
                <div>
                  <span className="font-bold text-warm-charcoal block">{rev.author}</span>
                  <span className="text-[10px] text-rock">{rev.date}</span>
                </div>
                <ShieldCheck className="w-4 h-4 text-clay" />
              </div>
            </div>
          ))}
        </div>

        {/* Airbnb Reviews Link Bar */}
        <div className="bg-graphite p-6 border border-rock/30 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-signal" />
            <span className="text-limestone">
              Avaliações reais e auditadas diretamente no perfil oficial do Refúgio Santalena no Airbnb.
            </span>
          </div>
          <a
            href="https://www.airbnb.com.br/rooms/917479622006307880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-summit hover:bg-graphite text-paper border border-rock/40 font-bold uppercase rounded-full transition-all shrink-0"
          >
            Ler todas as avaliações no Airbnb
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
