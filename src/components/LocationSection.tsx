import { MapPin, Navigation, ShieldAlert, ArrowUpRight } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-summit relative overflow-hidden border-t border-graphite">
      {/* Topo Map Lines */}
      <div className="absolute inset-0 bg-topo-lines opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-rock/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-signal uppercase tracking-widest font-semibold mb-3">
              <MapPin className="w-4 h-4 text-signal" />
              LOCALIZAÇÃO / PAIOL GRANDE
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-paper tracking-tight">
              Seu destino já começa na estrada.
            </h2>
          </div>
          <p className="font-sans text-xs text-limestone max-w-md">
            Localizado no vale do Paiol Grande, em São Bento do Sapucaí (SP), cercado pela vegetação nativa da Serra da Mantiqueira.
          </p>
        </div>

        {/* Map & Direction Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Cartographic Visual Card */}
          <div className="lg:col-span-7 bg-graphite border border-rock/30 p-8 rounded-lg relative overflow-hidden flex flex-col justify-between min-h-[360px]">
            <div className="absolute inset-0 bg-topo-pattern opacity-40"></div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 font-sans text-xs text-signal bg-summit px-3.5 py-1 border border-rock/30 rounded-full font-medium">
                <Navigation className="w-3.5 h-3.5" />
                WAYPOINT · DIREÇÃO DE CHEGADA
              </div>

              <h3 className="font-display font-medium text-3xl text-paper">
                São Bento do Sapucaí — SP
              </h3>
              <p className="font-sans text-sm text-limestone max-w-lg leading-relaxed">
                O acesso é feito por rodovia asfaltada (estrada da Ana Chata/Paiol Grande) seguida por um curto trecho de estrada de terra bem conservado.
              </p>
            </div>

            {/* Factual Route Markers */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-rock/30 font-sans text-xs text-paper">
              <div className="p-3 bg-summit/80 rounded-lg border border-rock/30">
                <span className="text-[10px] text-rock block uppercase font-semibold">CENTRO SBS</span>
                <span className="font-bold">Aprox. 25 minutos</span>
              </div>
              <div className="p-3 bg-summit/80 rounded-lg border border-rock/30">
                <span className="text-[10px] text-rock block uppercase font-semibold">REFERÊNCIA</span>
                <span className="font-bold">Restaurante Pedra do Baú</span>
              </div>
              <div className="p-3 bg-summit/80 rounded-lg border border-rock/30">
                <span className="text-[10px] text-rock block uppercase font-semibold">BAIRRO</span>
                <span className="font-bold">Paiol Grande · SP</span>
              </div>
            </div>
          </div>

          {/* Location Safety Guidelines Right */}
          <div className="lg:col-span-5 bg-graphite/60 border border-rock/30 p-8 rounded-lg space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-sans text-xs text-signal">
                <ShieldAlert className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider">POLÍTICA DE PRIVACIDADE E LOCALIZAÇÃO</span>
              </div>

              <h4 className="font-display font-medium text-xl text-paper">
                Endereço exato enviado após confirmação da reserva.
              </h4>

              <p className="font-sans text-sm text-limestone leading-relaxed">
                Para garantir a privacidade total de nossos hóspedes e o sossego da propriedade, a localização exata e as instruções de chegada detalhadas via Waze/Google Maps são enviadas após a reserva oficial.
              </p>
            </div>

            <div className="pt-4 border-t border-rock/30">
              <a
                href="https://www.airbnb.com.br/rooms/917479622006307880"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-deep-forest hover:bg-forest text-warm-cream font-sans text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md shadow-deep-forest/20"
              >
                Ver localização no Airbnb
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
