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
    <section className="py-24 px-4 sm:px-8 bg-wl-canvas relative overflow-hidden border-t border-wl-border">
      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-wl-border pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-hl-moss uppercase tracking-wider font-semibold mb-3">
              <Footprints className="w-4 h-4 text-hl-moss" />
              SAIA DO PORTÃO
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-wl-text tracking-tight leading-tight">
              A montanha começa perto.
            </h2>
          </div>
          <p className="font-sans text-xs text-wl-secondary max-w-md">
            O Refúgio Santalena está localizado estrategicamente no bairro Paiol Grande, na rota de acesso direto aos principais atrativos naturais da serra.
          </p>
        </div>

        {/* Trail Cards Grid (Treated as borderless, text-led cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trails.map((trail, index) => (
            <div
              key={trail.id}
              className="bg-wl-cream p-8 rounded-xl flex flex-col justify-between space-y-6 group shadow-sm transition-all hover:bg-wl-cream/90"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-sans text-xs">
                  <span className="text-hl-moss font-semibold">ROTA 0{index + 1}</span>
                  <span className="text-hl-terracotta text-[10px] uppercase font-bold tracking-wider">
                    {trail.tag}
                  </span>
                </div>

                <h3 className="font-display font-medium text-2xl text-wl-text group-hover:text-hl-terracotta transition-colors">
                  {trail.name}
                </h3>

                <span className="block font-sans text-xs text-wl-secondary font-medium">
                  {trail.type}
                </span>

                <p className="font-sans text-sm text-wl-secondary leading-[1.65]">
                  {trail.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-wl-border flex items-center gap-2 font-sans text-xs text-wl-text font-medium">
                <MapPin className="w-3.5 h-3.5 text-hl-moss" />
                <span>Acesso Próximo via Paiol Grande</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
