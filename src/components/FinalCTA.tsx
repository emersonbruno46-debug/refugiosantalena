import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-8 bg-[#151715] overflow-hidden border-t border-[#292A27]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/5906e06f-1029-488b-a81a-e3748c0c388b.jpeg"
          alt="Refúgio Santalena ao Pôr do Sol"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151715] via-[#151715]/70 to-[#151715]/90"></div>
        <div className="absolute inset-0 bg-topo-pattern opacity-30 pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        {/* Graphic Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#292A27]/90 border border-[#77756E]/40 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#D86A3E] animate-ping"></span>
          <span className="font-mono text-xs text-[#EDE9DF] uppercase tracking-widest">
            PRÓXIMA ROTA · PONTO DE CHEGADA
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-bold text-4xl sm:text-6xl text-[#EDE9DF] tracking-tight leading-tight">
          Sua próxima montanha pode começar por aqui.
        </h2>

        {/* Body Text */}
        <p className="font-sans text-base sm:text-lg text-[#B9B3A6] max-w-2xl mx-auto leading-relaxed">
          Kilimanjaro, Aconcágua ou o próximo chalé da coleção — encontre seu refúgio privativo e consulte as datas disponíveis em São Bento do Sapucaí.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#chales"
            className="w-full sm:w-auto px-8 py-4 bg-[#D86A3E] hover:bg-[#c45b30] text-[#151715] font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-xl shadow-[#D86A3E]/20"
          >
            Escolher meu chalé
          </a>
          <a
            href="https://www.airbnb.com.br/rooms/917479622006307880"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#292A27]/90 hover:bg-[#292A27] text-[#EDE9DF] border border-[#77756E]/40 font-mono text-xs font-bold uppercase tracking-wider rounded-sm backdrop-blur-sm transition-all"
          >
            Ver disponibilidade no Airbnb
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Micro Specs */}
        <div className="pt-8 border-t border-[#77756E]/20 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#B9B3A6]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D86A3E]" />
            Disponibilidade Oficial
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D86A3E]" />
            Sem Intermediários
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D86A3E]" />
            Superhost no Airbnb
          </span>
        </div>
      </div>
    </section>
  );
};
