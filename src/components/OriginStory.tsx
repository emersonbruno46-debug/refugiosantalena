import { Compass, Award } from 'lucide-react';

export const OriginStory: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-[#1D261E] relative overflow-hidden border-t border-dk-border">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-topo-pattern opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-[#242D25] border border-dk-border/40 p-8 sm:p-12 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          {/* Text Notebook Content Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-sans text-xs text-hl-moss uppercase tracking-wider font-semibold">
              <Compass className="w-3.5 h-3.5" />
              DE ONDE VEM O NOME · ORIGEM AUTÊNTICA
            </div>

            <h2 className="font-display font-medium text-3xl sm:text-4xl text-dk-text tracking-tight leading-tight">
              Alguns nomes vêm de lugares que você não esquece.
            </h2>

            <p className="font-sans text-base text-dk-secondary-text leading-relaxed">
              Os nomes <strong>Kilimanjaro</strong> e <strong>Aconcágua</strong> não foram escolhidos por acaso ou decoração. O Refúgio Santalena nasceu da vivência real em expedições de alta montanha pelos fundadores Carlos Santalena e Olívia Bonfim.
            </p>

            <p className="font-sans text-sm text-dk-secondary-text leading-relaxed">
              Carlos Santalena é um dos principais nomes do montanhismo brasileiro — tendo concluído o projeto dos <strong>Sete Cumes</strong> (as maiores montanhas de cada continente, incluindo o Everest e o próprio Aconcágua) e guiado centenas de montanhistas pelo mundo através da <em>Grade6 Expedições</em>.
            </p>

            <div className="bg-[#1D261E]/40 border-l-2 border-hl-terracotta font-sans text-xs text-dk-text rounded-lg p-4 space-y-1">
              <span className="text-hl-terracotta font-semibold block uppercase tracking-wide">CULTURA DE MONTANHA NA HOSPITALIDADE</span>
              <p className="text-dk-secondary-text text-[11px] leading-relaxed">
                Essa vivência em cumes distantes trouxe para São Bento do Sapucaí o respeito pelo clima, a busca pelo abrigo acolhedor e a valorização do silêncio.
              </p>
            </div>
          </div>

          {/* Expedition Badges Right */}
          <div className="lg:col-span-5 bg-[#1D261E]/60 border border-dk-border/40 p-6 rounded-xl space-y-4 font-sans text-xs">
            <div className="text-center pb-4 border-b border-dk-border">
              <Award className="w-8 h-8 text-hl-terracotta mx-auto mb-2" />
              <span className="text-dk-text font-semibold block uppercase tracking-wider">
                HERANÇA DE EXPEDIÇÃO
              </span>
              <span className="text-hl-moss text-[10px] tracking-wide font-medium">SETE CUMES · ALTA MONTANHA</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#242D25]/50 rounded-lg border border-dk-border/20">
                <span className="text-dk-text font-medium">Aconcágua · 6.961m</span>
                <span className="text-hl-terracotta text-[10px] font-semibold uppercase tracking-wider">América do Sul</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#242D25]/50 rounded-lg border border-dk-border/20">
                <span className="text-dk-text font-medium">Kilimanjaro · 5.895m</span>
                <span className="text-hl-terracotta text-[10px] font-semibold uppercase tracking-wider">África</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#242D25]/50 rounded-lg border border-dk-border/20">
                <span className="text-dk-text font-medium">Everest · 8.848m</span>
                <span className="text-hl-terracotta text-[10px] font-semibold uppercase tracking-wider">Ásia</span>
              </div>
            </div>

            <div className="pt-2 text-[10px] text-center text-hl-moss font-semibold">
              Refúgio Santalena · São Bento do Sapucaí — SP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
