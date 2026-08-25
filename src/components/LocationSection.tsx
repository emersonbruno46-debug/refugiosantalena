import { MapPin, Navigation, ShieldAlert, ArrowUpRight } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-wl-canvas relative overflow-hidden border-t border-wl-border">
      {/* Topo Map Lines */}
      <div className="absolute inset-0 bg-topo-lines opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-wl-border pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-hl-moss uppercase tracking-wider font-semibold mb-3">
              <MapPin className="w-4 h-4 text-hl-moss" />
              LOCALIZAÇÃO / PAIOL GRANDE
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-wl-text tracking-tight">
              Seu destino já começa na estrada.
            </h2>
          </div>
          <p className="font-sans text-xs text-wl-secondary max-w-md">
            Localizado no vale do Paiol Grande, em São Bento do Sapucaí (SP), cercado pela vegetação nativa da Serra da Mantiqueira.
          </p>
        </div>

        {/* Map & Direction Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Cartographic Visual Card */}
          <div className="lg:col-span-7 bg-wl-cream p-8 rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[360px] shadow-sm">
            <div className="absolute inset-0 bg-topo-pattern opacity-40"></div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 font-sans text-xs text-hl-moss uppercase tracking-wider font-semibold">
                <Navigation className="w-3.5 h-3.5" />
                WAYPOINT · DIREÇÃO DE CHEGADA
              </div>

              <h3 className="font-display font-medium text-3xl text-wl-text">
                São Bento do Sapucaí — SP
              </h3>
              <p className="font-sans text-sm text-wl-secondary max-w-lg leading-[1.65]">
                O acesso é feito por rodovia asfaltada (estrada da Ana Chata/Paiol Grande) seguida por um curto trecho de estrada de terra bem conservado.
              </p>
            </div>

            {/* Factual Route Markers */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-wl-border font-sans text-xs text-wl-text">
              <div className="p-3 bg-wl-surface/50 rounded-lg">
                <span className="text-[10px] text-hl-moss block uppercase font-semibold">CENTRO SBS</span>
                <span className="font-semibold text-wl-text">Aprox. 25 minutos</span>
              </div>
              <div className="p-3 bg-wl-surface/50 rounded-lg">
                <span className="text-[10px] text-hl-moss block uppercase font-semibold">REFERÊNCIA</span>
                <span className="font-semibold text-wl-text">Restaurante Pedra do Baú</span>
              </div>
              <div className="p-3 bg-wl-surface/50 rounded-lg">
                <span className="text-[10px] text-hl-moss block uppercase font-semibold">BAIRRO</span>
                <span className="font-semibold text-wl-text">Paiol Grande · SP</span>
              </div>
            </div>
          </div>

          {/* Location Safety Guidelines Right */}
          <div className="lg:col-span-5 bg-wl-cream p-8 rounded-xl space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-sans text-xs text-hl-terracotta font-semibold">
                <ShieldAlert className="w-4 h-4" />
                <span className="uppercase tracking-wider">POLÍTICA DE PRIVACIDADE E LOCALIZAÇÃO</span>
              </div>

              <h4 className="font-display font-medium text-xl text-wl-text">
                Endereço exato enviado após confirmação da reserva.
              </h4>

              <p className="font-sans text-sm text-wl-secondary leading-[1.65]">
                Para garantir a privacidade total de nossos hóspedes e o sossego da propriedade, a localização exata e as instruções de chegada detalhadas via Waze/Google Maps são enviadas após a reserva oficial.
              </p>
            </div>

            <div className="pt-4 border-t border-wl-border">
              <a
                href="https://www.airbnb.com.br/rooms/917479622006307880"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-hl-forest hover:bg-forest text-dk-text font-sans text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md shadow-hl-forest/10"
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
