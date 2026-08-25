import React from 'react';
import { ShieldCheck, Flame, Compass, Eye, Sparkles } from 'lucide-react';

export const FieldNotes: React.FC = () => {
  const notes = [
    { label: 'SÃO BENTO DO SAPUCAÍ', value: 'Serra da Mantiqueira · SP', icon: Compass },
    { label: 'PAIOL GRANDE', value: 'Bairro de Montanha Privativo', icon: Eye },
    { label: 'PEDRA DO BAÚ', value: 'Vista Frontal Direta', icon: Sparkles },
    { label: 'PRIVACIDADE ABSOLUTA', value: 'Exclusivo para 2 Pessoas', icon: ShieldCheck },
    { label: 'AQUECIMENTO & CONFORTO', value: 'Jacuzzi, Lareira & Fogueira', icon: Flame },
  ];

  return (
    <section className="bg-[#292A27] border-y border-[#77756E]/30 py-6 px-4 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between min-w-[900px] gap-6 font-mono text-xs">
        {notes.map((note, index) => {
          const Icon = note.icon;
          return (
            <React.Fragment key={index}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#151715] border border-[#77756E]/40 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#D86A3E]" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#B9B3A6] tracking-widest uppercase">
                    [{String(index + 1).padStart(2, '0')}] {note.label}
                  </span>
                  <span className="text-[#EDE9DF] font-medium tracking-tight">
                    {note.value}
                  </span>
                </div>
              </div>
              {index < notes.length - 1 && (
                <div className="h-8 w-px bg-[#77756E]/30 shrink-0"></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
