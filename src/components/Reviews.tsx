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
    <section id="avaliacoes" className="py-24 px-4 sm:px-8 bg-[#151715] relative overflow-hidden border-t border-[#292A27]">
      {/* Topo Lines */}
      <div className="absolute inset-0 bg-topo-lines opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#77756E]/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D86A3E] uppercase tracking-widest mb-3">
              <Star className="w-4 h-4 text-[#D86A3E] fill-[#D86A3E]" />
              GUEST LOGBOOK · RECONHECIMENTO OFICIAL
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#EDE9DF] tracking-tight">
              Quem passou por aqui deixou registro.
            </h2>
          </div>

          {/* Metrics Card */}
          <div className="flex flex-wrap items-center gap-4 bg-[#292A27] px-5 py-3 border border-[#77756E]/30 rounded-sm font-mono text-xs">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#D86A3E] fill-[#D86A3E]" />
              <span className="font-bold text-lg text-[#EDE9DF]">4.97</span>
            </div>
            <div className="h-6 w-px bg-[#77756E]/30"></div>
            <div>
              <span className="block text-[#EDE9DF] font-bold">173 Avaliações</span>
              <span className="text-[10px] text-[#D86A3E] uppercase">Preferido dos Hóspedes · Top 10%</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((rev, index) => (
            <div
              key={index}
              className="bg-[#292A27]/60 border border-[#77756E]/30 p-8 rounded-sm flex flex-col justify-between space-y-6 relative group hover:border-[#D86A3E]/50 transition-colors"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#D86A3E] fill-[#D86A3E]" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-[#D86A3E] bg-[#151715] px-2 py-0.5 border border-[#77756E]/30 rounded-xs">
                    {rev.unit}
                  </span>
                </div>

                <p className="font-sans text-sm text-[#EDE9DF] leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#77756E]/20 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="font-bold text-[#EDE9DF] block">{rev.author}</span>
                  <span className="text-[10px] text-[#77756E]">{rev.date}</span>
                </div>
                <ShieldCheck className="w-4 h-4 text-[#D86A3E]" />
              </div>
            </div>
          ))}
        </div>

        {/* Airbnb Reviews Link Bar */}
        <div className="bg-[#292A27] p-6 border border-[#77756E]/30 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-[#D86A3E]" />
            <span className="text-[#B9B3A6]">
              Avaliações reais e auditadas diretamente no perfil oficial do Refúgio Santalena no Airbnb.
            </span>
          </div>
          <a
            href="https://www.airbnb.com.br/rooms/917479622006307880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#151715] hover:bg-[#D86A3E] hover:text-[#151715] text-[#EDE9DF] border border-[#77756E]/40 font-bold uppercase rounded-sm transition-all shrink-0"
          >
            Ler todas as avaliações no Airbnb
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
