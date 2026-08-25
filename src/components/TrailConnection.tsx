import { MapPin, Footprints } from 'lucide-react';

export const TrailConnection: React.FC = () => {
  const trails = [
    {
      id: 'bau',
      name: 'Pedra do Baú',
      type: 'Maciço Principal · Complexo do Baú',
      desc: 'O monumento natural de rocha de São Bento do Sapucaí. Visível diretamente da varanda dos chalés, com acesso próximo para contemplação e trilhas de aproximação.',
      tag: 'MARCA REGIONAL'
    },
    {
      id: 'anachata',
      name: 'Trilha da Ana Chata',
      type: 'Formação Rochosa Adjacente',
      desc: 'Uma das formações mais bonitas do complexo, proporcionando uma vista panorâmica do vale do Paiol Grande e da face lateral da Pedra do Baú.',
      tag: 'VISTA PANORÂMICA'
    },
    {
      id: 'bauzinho',
      name: 'Bauzinho',
      type: 'Ponto de Observação',
      desc: 'Formação menor com acesso rápido, ideal para contemplar o pôr do sol e observar a grandiosidade da pedra sem a exigência de grandes subidas.',
      tag: 'PÔR DO SOL'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 bg-[#151715] relative overflow-hidden border-t border-[#292A27]">
      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#77756E]/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D86A3E] uppercase tracking-widest mb-3">
              <Footprints className="w-4 h-4 text-[#D86A3E]" />
              SAIA DO PORTÃO
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#EDE9DF] tracking-tight leading-tight">
              A montanha começa perto.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#B9B3A6] max-w-md">
            O Refúgio Santalena está localizado estrategicamente no bairro Paiol Grande, na rota de acesso direto aos principais atrativos naturais da serra.
          </p>
        </div>

        {/* Trail Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trails.map((trail, index) => (
            <div
              key={trail.id}
              className="bg-[#292A27]/60 border border-[#77756E]/30 p-8 rounded-sm hover:border-[#D86A3E]/60 transition-colors flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#D86A3E] font-bold">ROTA 0{index + 1}</span>
                  <span className="px-2 py-0.5 bg-[#151715] text-[#B9B3A6] border border-[#77756E]/30 rounded-xs text-[10px]">
                    {trail.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-[#EDE9DF] group-hover:text-[#D86A3E] transition-colors">
                  {trail.name}
                </h3>

                <span className="block font-mono text-xs text-[#77756E]">
                  {trail.type}
                </span>

                <p className="font-sans text-sm text-[#B9B3A6] leading-relaxed">
                  {trail.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#77756E]/20 flex items-center gap-2 font-mono text-xs text-[#EDE9DF]">
                <MapPin className="w-3.5 h-3.5 text-[#D86A3E]" />
                <span>Acesso Próximo via Paiol Grande</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
