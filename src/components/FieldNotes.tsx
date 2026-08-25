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
    <section className="bg-graphite border-y border-rock/30 py-6 px-4 overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between min-w-[900px] gap-6 font-sans text-xs">
        {notes.map((note, index) => {
          const Icon = note.icon;
          return (
            <React.Fragment key={index}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-summit border border-rock/40 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-signal" />
                </div>
                <div>
                  <span className="block text-[10px] text-limestone tracking-widest uppercase">
                    [{String(index + 1).padStart(2, '0')}] {note.label}
                  </span>
                  <span className="text-paper font-medium tracking-tight">
                    {note.value}
                  </span>
                </div>
              </div>
              {index < notes.length - 1 && (
                <div className="h-8 w-px bg-rock/30 shrink-0"></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
