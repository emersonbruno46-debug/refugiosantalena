import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-28 px-4 sm:px-8 bg-summit overflow-hidden border-t border-graphite">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/5906e06f-1029-488b-a81a-e3748c0c388b.jpeg"
          alt="Refúgio Santalena ao Pôr do Sol"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-summit via-summit/70 to-summit/90"></div>
        <div className="absolute inset-0 bg-topo-pattern opacity-30 pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        {/* Graphic Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite/90 border border-rock/40 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-signal animate-ping"></span>
          <span className="font-sans text-xs text-paper uppercase tracking-widest font-semibold">
            PRÓXIMA ROTA · PONTO DE CHEGADA
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-medium text-4xl sm:text-6xl text-paper tracking-tight leading-tight">
          Sua próxima montanha pode começar por aqui.
        </h2>

        {/* Body Text */}
        <p className="font-sans text-base sm:text-lg text-limestone max-w-2xl mx-auto leading-relaxed">
          Kilimanjaro, Aconcágua ou o próximo chalé da coleção — encontre seu refúgio privativo e consulte as datas disponíveis em São Bento do Sapucaí.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#chales"
            className="w-full sm:w-auto px-8 py-4 bg-deep-forest hover:bg-forest text-warm-cream font-sans text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-xl shadow-deep-forest/20"
          >
            Escolher meu chalé
          </a>
          <a
            href="https://www.airbnb.com.br/rooms/917479622006307880"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite/90 hover:bg-graphite text-paper border border-rock/40 font-sans text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm transition-all"
          >
            Ver disponibilidade no Airbnb
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Micro Specs */}
        <div className="pt-8 border-t border-rock/20 flex flex-wrap items-center justify-center gap-6 font-sans text-xs text-limestone font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-signal" />
            Disponibilidade Oficial
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-signal" />
            Sem Intermediários
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-signal" />
            Superhost no Airbnb
          </span>
        </div>
      </div>
    </section>
  );
};
