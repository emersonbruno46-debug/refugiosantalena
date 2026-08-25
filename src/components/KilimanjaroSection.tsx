import { ArrowUpRight, Flame, Droplets, Eye } from 'lucide-react';

export const KilimanjaroSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-[#151715] relative overflow-hidden border-t border-[#292A27]">
      {/* Background Topo Pattern */}
      <div className="absolute inset-0 bg-topo-lines opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#77756E]/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D86A3E] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D86A3E]"></span>
              ROTA / KILIMANJARO
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#EDE9DF] tracking-tight leading-tight max-w-3xl">
              Pedra do Baú na frente. Mata nos fundos.
              <span className="block text-[#D86A3E] mt-2">No meio, o lugar onde você fica.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 font-mono text-xs">
            <span className="px-3 py-1 bg-[#292A27] text-[#EDE9DF] border border-[#77756E]/40 rounded-xs">
              4.97 ★ · 173 Avaliações no Airbnb
            </span>
            <a
              href="https://www.airbnb.com.br/rooms/917479622006307880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D86A3E] hover:underline"
            >
              <span>Abrir anúncio oficial do Kilimanjaro</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Grid Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Panorama Image */}
          <div className="lg:col-span-7 relative group rounded-sm overflow-hidden border border-[#77756E]/30 bg-[#292A27] min-h-[400px] lg:min-h-[500px]">
            <img
              src="/images/7e55aa96-d831-4324-a119-31710f05edac.jpeg"
              alt="Deck do Chalé Kilimanjaro com vista para a Pedra do Baú"
              className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151715] via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-[#EDE9DF] bg-[#151715]/85 backdrop-blur-md p-4 border border-[#77756E]/40 rounded-sm flex items-center justify-between">
              <div>
                <span className="block text-[10px] text-[#B9B3A6] uppercase">VISTA DO DECK</span>
                <span className="font-bold text-[#EDE9DF]">Pedra do Baú ao Pôr do Sol</span>
              </div>
              <span className="text-[#D86A3E] font-bold">FASE / 01</span>
            </div>
          </div>

          {/* Side Content Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#292A27]/60 border border-[#77756E]/30 p-8 rounded-sm space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#D86A3E] uppercase tracking-widest">
                  ESTRUTURA A-FRAME
                </span>
                <h3 className="font-display font-bold text-2xl text-[#EDE9DF]">
                  Projetado para quem quer olhar a serra de frente.
                </h3>
                <p className="font-sans text-sm text-[#B9B3A6] leading-relaxed">
                  O Chalé Kilimanjaro foi construído inteiramente em madeira com fachada frontal de vidro. Da cama de casal ao deck, o olhar é guiado diretamente para a Pedra do Baú.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#77756E]/30 font-mono text-xs">
                <div className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-[#D86A3E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#EDE9DF] block">Jacuzzi Privativa com Teto de Vidro</strong>
                    <span className="text-[#B9B3A6] text-[11px]">
                      Localizada na área externa nos fundos, cercada pela mata e coberta por vidro para uso sob qualquer clima.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-[#D86A3E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#EDE9DF] block">Lareira Interna & Fogueira Externa</strong>
                    <span className="text-[#B9B3A6] text-[11px]">
                      Aquecimento completo com salamandra a lenha no ambiente interno e área com praça de fogo no quintal.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-[#D86A3E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#EDE9DF] block">Banheiro Panorâmico</strong>
                    <span className="text-[#B9B3A6] text-[11px]">
                      Box com parede inteira em vidro temperado com vista direta para a jacuzzi e a mata preserve.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Photo Trio Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group rounded-sm overflow-hidden border border-[#77756E]/30 bg-[#292A27] h-72">
            <img
              src="/images/0af6a9a8-c099-4c1d-8923-e3a8c469d032.jpeg"
              alt="Banheiro com parede de vidro e jacuzzi externa"
              className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151715]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] text-[#EDE9DF] bg-[#151715]/80 p-2 rounded-xs">
              01. Banheiro Panorâmico & Jacuzzi
            </div>
          </div>

          <div className="relative group rounded-sm overflow-hidden border border-[#77756E]/30 bg-[#292A27] h-72">
            <img
              src="/images/10c24edb-2afe-4408-99df-de6136e6f077.jpeg"
              alt="Quarto com cama Queen e vista para as montanhas"
              className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151715]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] text-[#EDE9DF] bg-[#151715]/80 p-2 rounded-xs">
              02. Cama Queen & Vista Frontal
            </div>
          </div>

          <div className="relative group rounded-sm overflow-hidden border border-[#77756E]/30 bg-[#292A27] h-72">
            <img
              src="/images/07ccd2ef-2c03-4a0a-9a73-683f21a29395.jpeg"
              alt="Poltronas de descanso e lareira interna"
              className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151715]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] text-[#EDE9DF] bg-[#151715]/80 p-2 rounded-xs">
              03. Estar Interno & Lareira
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#292A27] p-8 border border-[#77756E]/40 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-2xl text-[#EDE9DF] mb-1">
              Pronto para se hospedar no Kilimanjaro?
            </h4>
            <p className="font-mono text-xs text-[#B9B3A6]">
              Consulte datas disponíveis e faça sua reserva diretamente pelo Airbnb oficial.
            </p>
          </div>
          <a
            href="https://www.airbnb.com.br/rooms/917479622006307880"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D86A3E] hover:bg-[#c45b30] text-[#151715] font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-lg shadow-[#D86A3E]/20 shrink-0"
          >
            Ver disponibilidade do Kilimanjaro
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
