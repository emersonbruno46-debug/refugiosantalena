import { Compass, Award } from 'lucide-react';

export const OriginStory: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-summit relative overflow-hidden border-t border-graphite">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-topo-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-graphite/80 border border-rock/40 p-8 sm:p-12 rounded-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Notebook Content Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-sans text-xs text-signal uppercase tracking-widest bg-summit px-3.5 py-1 border border-rock/30 rounded-full font-medium">
              <Compass className="w-3.5 h-3.5" />
              DE ONDE VEM O NOME · ORIGEM AUTÊNTICA
            </div>

            <h2 className="font-display font-medium text-3xl sm:text-4xl text-paper tracking-tight leading-tight">
              Alguns nomes vêm de lugares que você não esquece.
            </h2>

            <p className="font-sans text-base text-limestone leading-relaxed">
              Os nomes <strong>Kilimanjaro</strong> e <strong>Aconcágua</strong> não foram escolhidos por acaso ou decoração. O Refúgio Santalena nasceu da vivência real em expedições de alta montanha pelos fundadores Carlos Santalena e Olívia Bonfim.
            </p>

            <p className="font-sans text-sm text-limestone leading-relaxed">
              Carlos Santalena é um dos principais nomes do montanhismo brasileiro — tendo concluído o projeto dos <strong>Sete Cumes</strong> (as maiores montanhas de cada continente, incluindo o Everest e o próprio Aconcágua) e guiado centenas de montanhistas pelo mundo através da <em>Grade6 Expedições</em>.
            </p>

            <div className="p-4 bg-summit border-l-2 border-signal font-sans text-xs text-paper rounded-sm space-y-1">
              <span className="text-signal font-semibold block uppercase tracking-wide">CULTURA DE MONTANHA NA HOSPITALIDADE</span>
              <p className="text-limestone text-[11px] leading-relaxed">
                Essa vivência em cumes distantes trouxe para São Bento do Sapucaí o respeito pelo clima, a busca pelo abrigo acolhedor e a valorização do silêncio.
              </p>
            </div>
          </div>

          {/* Expedition Badges Right */}
          <div className="lg:col-span-5 bg-summit border border-rock/30 p-6 rounded-lg space-y-4 font-sans text-xs">
            <div className="text-center pb-4 border-b border-rock/30">
              <Award className="w-8 h-8 text-signal mx-auto mb-2" />
              <span className="text-paper font-semibold block uppercase tracking-wider">
                HERANÇA DE EXPEDIÇÃO
              </span>
              <span className="text-rock text-[10px] tracking-wide font-medium">SETE CUMES · ALTA MONTANHA</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-graphite/50 rounded-sm border border-rock/20">
                <span className="text-paper font-medium">Aconcágua · 6.961m</span>
                <span className="text-signal text-[10px] font-semibold uppercase tracking-wider">América do Sul</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-graphite/50 rounded-sm border border-rock/20">
                <span className="text-paper font-medium">Kilimanjaro · 5.895m</span>
                <span className="text-signal text-[10px] font-semibold uppercase tracking-wider">África</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-graphite/50 rounded-sm border border-rock/20">
                <span className="text-paper font-medium">Everest · 8.848m</span>
                <span className="text-signal text-[10px] font-semibold uppercase tracking-wider">Ásia</span>
              </div>
            </div>

            <div className="pt-2 text-[10px] text-center text-rock font-medium">
              Refúgio Santalena · São Bento do Sapucaí — SP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
