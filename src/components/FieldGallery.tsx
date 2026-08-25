import React, { useState } from 'react';
import { Camera, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  location: string;
  aspect: string;
}

export const FieldGallery: React.FC = () => {
  const items: GalleryItem[] = [
    {
      id: '01',
      src: '/images/5906e06f-1029-488b-a81a-e3748c0c388b.jpeg',
      title: 'Estrutura A-Frame do Kilimanjaro ao Pôr do Sol',
      location: 'Paiol Grande · SP',
      aspect: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      id: '02',
      src: '/images/7e55aa96-d831-4324-a119-31710f05edac.jpeg',
      title: 'Deck Solarium com Vista para a Pedra do Baú',
      location: 'Chalé Kilimanjaro',
      aspect: 'col-span-1'
    },
    {
      id: '03',
      src: '/images/0af6a9a8-c099-4c1d-8923-e3a8c469d032.jpeg',
      title: 'Banheiro Panorâmico & Jacuzzi Externa',
      location: 'Área Privativa dos Fundos',
      aspect: 'col-span-1'
    },
    {
      id: '04',
      src: '/images/10c24edb-2afe-4408-99df-de6136e6f077.jpeg',
      title: 'Quarto com Cama Queen e Parede de Vidro',
      location: 'Ambiente Interno',
      aspect: 'col-span-1'
    },
    {
      id: '05',
      src: '/images/1ac96186-c3ca-41e8-8e46-8bf473e953bb.jpeg',
      title: 'Fachada Frontal Triangular em Madeira',
      location: 'Entrada Principal',
      aspect: 'col-span-1 md:col-span-2'
    },
    {
      id: '06',
      src: '/images/4b2c825e-c320-4d9b-b7b2-11f02bb08f21.jpeg',
      title: 'Encosta Verde e Identificação do Chalé',
      location: 'Vale do Paiol Grande',
      aspect: 'col-span-1'
    },
    {
      id: '07',
      src: '/images/07ccd2ef-2c03-4a0a-9a73-683f21a29395.jpeg',
      title: 'Lareira Interna e Área de Estar',
      location: 'Ambiente Interno',
      aspect: 'col-span-1'
    },
    {
      id: '08',
      src: '/images/c5d28a38-12c9-46b5-b126-afa5c25513a8.jpeg',
      title: 'Deck de Madeira com Luz Matinal',
      location: 'Varanda Externa',
      aspect: 'col-span-1 md:col-span-2'
    }
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + items.length) % items.length);
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % items.length);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-8 bg-summit relative overflow-hidden border-t border-graphite">
      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-rock/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-sans text-xs text-signal uppercase tracking-widest mb-3">
              <Camera className="w-4 h-4" />
              EXPEDITION FILM ROLL · REGISTROS REAIS
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-paper tracking-tight">
              Registro de campo.
            </h2>
          </div>
          <p className="font-sans text-xs text-limestone max-w-md">
            Contact sheet com fotografias autênticas do Refúgio Santalena, capturando luz, madeira, rocha e paisagem.
          </p>
        </div>

        {/* Contact Sheet Mixed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`relative group rounded-lg overflow-hidden border border-rock/30 bg-graphite h-64 sm:h-72 cursor-pointer transition-all duration-300 hover:border-signal ${item.aspect}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-summit/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>

              {/* Technical Stamp Overlay */}
              <div className="absolute top-3 left-3 font-sans text-[10px] text-paper bg-summit/80 px-2.5 py-0.5 border border-rock/30 rounded-full tracking-wide font-medium">
                SHOT #{item.id}
              </div>

              <div className="absolute bottom-3 left-3 right-3 font-sans text-xs text-paper flex items-center justify-between">
                <div>
                  <span className="block font-bold text-[11px] truncate max-w-[200px] sm:max-w-[240px]">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-limestone">{item.location}</span>
                </div>
                <Maximize2 className="w-4 h-4 text-signal opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-summit/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-graphite border border-rock/40 text-paper hover:text-signal rounded-full shadow-md"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 p-3 bg-graphite border border-rock/40 text-paper hover:text-signal rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 p-3 bg-graphite border border-rock/40 text-paper hover:text-signal rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center space-y-4">
            <div className="max-h-[75vh] w-full rounded-lg overflow-hidden border border-rock/40 bg-graphite">
              <img
                src={items[selectedImageIndex].src}
                alt={items[selectedImageIndex].title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            <div className="w-full font-sans text-xs text-paper bg-graphite p-4 border border-rock/30 rounded-full px-6 flex items-center justify-between">
              <div>
                <span className="text-signal font-bold block">
                  SHOT #{items[selectedImageIndex].id} · {items[selectedImageIndex].title}
                </span>
                <span className="text-limestone text-[11px]">
                  {items[selectedImageIndex].location} · Refúgio Santalena
                </span>
              </div>
              <span className="text-rock font-medium">
                {selectedImageIndex + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
