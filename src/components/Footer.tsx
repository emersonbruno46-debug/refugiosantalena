import { ArrowUpRight, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111211] text-[#EDE9DF] border-t border-[#292A27] pt-16 pb-12 px-4 sm:px-8 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info Left */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#292A27] border border-[#77756E]/40 flex items-center justify-center p-1">
                <img src="/LOGO SANTALENA.svg" alt="Refúgio Santalena" className="w-full h-full object-contain filter invert opacity-90" />
              </div>
              <span className="font-display font-bold text-lg text-[#EDE9DF] tracking-tight uppercase">
                REFÚGIO SANTALENA
              </span>
            </div>

            <p className="font-sans text-xs text-[#B9B3A6] max-w-sm leading-relaxed">
              Chalés privativos próximos à Pedra do Baú, feitos para duas pessoas e para fins de semana que pedem outra paisagem.
            </p>

            <div className="flex items-center gap-2 text-[#77756E] text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#D86A3E]" />
              <span>Paiol Grande · São Bento do Sapucaí — SP</span>
            </div>
          </div>

          {/* Quick Nav Middle */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[#D86A3E] font-bold block uppercase text-[10px] tracking-widest">
              NAVEGAÇÃO // ROTAS
            </span>
            <ul className="space-y-2 text-[#B9B3A6]">
              <li>
                <a href="#refugio" className="hover:text-[#EDE9DF] transition-colors">01. O Refúgio</a>
              </li>
              <li>
                <a href="#chales" className="hover:text-[#EDE9DF] transition-colors">02. Chalés da Coleção</a>
              </li>
              <li>
                <a href="#pedra-do-bau" className="hover:text-[#EDE9DF] transition-colors">03. Pedra do Baú Viewfinder</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#EDE9DF] transition-colors">04. Avaliações dos Hóspedes</a>
              </li>
            </ul>
          </div>

          {/* Booking Links & Social Right */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[#D86A3E] font-bold block uppercase text-[10px] tracking-widest">
              CANAIS OFICIAIS
            </span>
            
            <div className="space-y-2">
              <a
                href="https://www.airbnb.com.br/rooms/917479622006307880"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#292A27]/60 border border-[#77756E]/30 rounded-xs hover:border-[#D86A3E] transition-colors text-[#EDE9DF]"
              >
                <span>Airbnb Oficial — Chalé Kilimanjaro</span>
                <ArrowUpRight className="w-4 h-4 text-[#D86A3E]" />
              </a>

              <a
                href="https://www.instagram.com/refugiosantalena/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#292A27]/60 border border-[#77756E]/30 rounded-xs hover:border-[#D86A3E] transition-colors text-[#EDE9DF]"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#D86A3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>@refugiosantalena</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#D86A3E]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Technical Index */}
        <div className="pt-8 border-t border-[#77756E]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#77756E] text-[11px]">
          <div>
            © {new Date().getFullYear()} Refúgio Santalena. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>RS — SBS — SP</span>
            <span>·</span>
            <span>MANTIQUEIRA BASECAMP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
