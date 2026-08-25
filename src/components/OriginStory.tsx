import { Compass, Award } from 'lucide-react';

export const OriginStory: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-[#181917] relative overflow-hidden border-t border-[#292A27]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-topo-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-[#292A27]/80 border border-[#77756E]/40 p-8 sm:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Notebook Content Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D86A3E] uppercase tracking-widest bg-[#151715] px-3 py-1 border border-[#77756E]/30 rounded-xs">
              <Compass className="w-3.5 h-3.5" />
              DE ONDE VEM O NOME · ORIGEM AUTÊNTICA
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#EDE9DF] tracking-tight leading-tight">
              Alguns nomes vêm de lugares que você não esquece.
            </h2>

            <p className="font-sans text-base text-[#B9B3A6] leading-relaxed">
              Os nomes <strong>Kilimanjaro</strong> e <strong>Aconcágua</strong> não foram escolhidos por acaso ou decoração. O Refúgio Santalena nasceu da vivência real em expedições de alta montanha pelos fundadores Carlos Santalena e Olívia Bonfim.
            </p>

            <p className="font-sans text-sm text-[#B9B3A6] leading-relaxed">
              Carlos Santalena é um dos principais nomes do montanhismo brasileiro — tendo concluído o projeto dos <strong>Sete Cumes</strong> (as maiores montanhas de cada continente, incluindo o Everest e o próprio Aconcágua) e guiado centenas de montanhistas pelo mundo através da <em>Grade6 Expedições</em>.
            </p>

            <div className="p-4 bg-[#151715] border-l-2 border-[#D86A3E] font-mono text-xs text-[#EDE9DF] space-y-1">
              <span className="text-[#D86A3E] font-bold block uppercase">CULTURA DE MONTANHA NA HOSPITALIDADE</span>
              <p className="text-[#B9B3A6] text-[11px] leading-relaxed">
                Essa vivência em cumes distantes trouxe para São Bento do Sapucaí o respeito pelo clima, a busca pelo abrigo acolhedor e a valorização do silêncio.
              </p>
            </div>
          </div>

          {/* Expedition Badges Right */}
          <div className="lg:col-span-5 bg-[#151715] border border-[#77756E]/30 p-6 rounded-sm space-y-4 font-mono text-xs">
            <div className="text-center pb-4 border-b border-[#77756E]/30">
              <Award className="w-8 h-8 text-[#D86A3E] mx-auto mb-2" />
              <span className="text-[#EDE9DF] font-bold block uppercase tracking-wider">
                HERANÇA DE EXPEDIÇÃO
              </span>
              <span className="text-[#77756E] text-[10px]">SETE CUMES · ALTA MONTANHA</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#292A27]/50 rounded-xs border border-[#77756E]/20">
                <span className="text-[#EDE9DF]">Aconcágua · 6.961m</span>
                <span className="text-[#D86A3E] text-[10px]">América do Sul</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#292A27]/50 rounded-xs border border-[#77756E]/20">
                <span className="text-[#EDE9DF]">Kilimanjaro · 5.895m</span>
                <span className="text-[#D86A3E] text-[10px]">África</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#292A27]/50 rounded-xs border border-[#77756E]/20">
                <span className="text-[#EDE9DF]">Everest · 8.848m</span>
                <span className="text-[#D86A3E] text-[10px]">Ásia</span>
              </div>
            </div>

            <div className="pt-2 text-[10px] text-center text-[#77756E]">
              Refúgio Santalena · São Bento do Sapucaí — SP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
