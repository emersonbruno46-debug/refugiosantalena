import { MapPin, Navigation, ShieldAlert, ArrowUpRight } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-[#151715] relative overflow-hidden border-t border-[#292A27]">
      {/* Topo Map Lines */}
      <div className="absolute inset-0 bg-topo-lines opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#77756E]/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D86A3E] uppercase tracking-widest mb-3">
              <MapPin className="w-4 h-4 text-[#D86A3E]" />
              LOCALIZAÇÃO / PAIOL GRANDE
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#EDE9DF] tracking-tight">
              Seu destino já começa na estrada.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#B9B3A6] max-w-md">
            Localizado no vale do Paiol Grande, em São Bento do Sapucaí (SP), cercado pela vegetação nativa da Serra da Mantiqueira.
          </p>
        </div>

        {/* Map & Direction Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Cartographic Visual Card */}
          <div className="lg:col-span-7 bg-[#292A27] border border-[#77756E]/30 p-8 rounded-sm relative overflow-hidden flex flex-col justify-between min-h-[360px]">
            <div className="absolute inset-0 bg-topo-pattern opacity-40"></div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D86A3E] bg-[#151715] px-3 py-1 border border-[#77756E]/30 rounded-xs">
                <Navigation className="w-3.5 h-3.5" />
                WAYPOINT · REGREÇÃO DE CHEGADA
              </div>

              <h3 className="font-display font-bold text-3xl text-[#EDE9DF]">
                São Bento do Sapucaí — SP
              </h3>
              <p className="font-sans text-sm text-[#B9B3A6] max-w-lg leading-relaxed">
                O acesso é feito por rodovia asfaltada (estrada da Ana Chata/Paiol Grande) seguida por um curto trecho de estrada de terra bem conservado.
              </p>
            </div>

            {/* Factual Route Markers */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#77756E]/30 font-mono text-xs text-[#EDE9DF]">
              <div className="p-3 bg-[#151715]/80 rounded-xs border border-[#77756E]/30">
                <span className="text-[10px] text-[#77756E] block">CENTRO SBS</span>
                <span className="font-bold">Aprox. 25 minutos</span>
              </div>
              <div className="p-3 bg-[#151715]/80 rounded-xs border border-[#77756E]/30">
                <span className="text-[10px] text-[#77756E] block">REFERÊNCIA</span>
                <span className="font-bold">Restaurante Pedra do Baú</span>
              </div>
              <div className="p-3 bg-[#151715]/80 rounded-xs border border-[#77756E]/30">
                <span className="text-[10px] text-[#77756E] block">BAIRRO</span>
                <span className="font-bold">Paiol Grande · SP</span>
              </div>
            </div>
          </div>

          {/* Location Safety Guidelines Right */}
          <div className="lg:col-span-5 bg-[#292A27]/60 border border-[#77756E]/30 p-8 rounded-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#D86A3E]">
                <ShieldAlert className="w-4 h-4" />
                <span className="font-bold uppercase">POLÍTICA DE PRIVACIDADE E LOCALIZAÇÃO</span>
              </div>

              <h4 className="font-display font-bold text-xl text-[#EDE9DF]">
                Endereço exato enviado após confirmação da reserva.
              </h4>

              <p className="font-sans text-sm text-[#B9B3A6] leading-relaxed">
                Para garantir a privacidade total de nossos hóspedes e o sossego da propriedade, a localização exata e as instruções de chegada detalhadas via Waze/Google Maps são enviadas após a reserva oficial.
              </p>
            </div>

            <div className="pt-4 border-t border-[#77756E]/30">
              <a
                href="https://www.airbnb.com.br/rooms/917479622006307880"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D86A3E] hover:bg-[#c45b30] text-[#151715] font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md shadow-[#D86A3E]/20"
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
