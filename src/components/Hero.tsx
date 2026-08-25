import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, MapPin, Mountain, Flame, Compass } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const locationLineRef = useRef<HTMLDivElement>(null);
  const trailStrokeRef = useRef<SVGPathElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // 1. Damped Mousemove Parallax Tracking (Desktop Only)
  useEffect(() => {
    if (window.innerWidth < 768) return;

    let reqId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize values between -1 and 1
      targetX = (clientX / innerWidth - 0.5) * 2;
      targetY = (clientY / innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      // Lerp logic for smooth damping
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      setParallax({
        x: currentX * -8, // Translate opposite to mouse (max 8px)
        y: currentY * -8,
      });

      reqId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove);
    reqId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(reqId);
    };
  }, []);

  // 2. GSAP Opening and ScrollTrigger Exit Sequence
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Ensure start states are set
      gsap.set('.hero-bg', { scale: 1.07, opacity: 0 });
      gsap.set('.hero-glow', { opacity: 0 });
      gsap.set('.hero-loc-badge', { opacity: 0 });
      gsap.set(locationLineRef.current, { width: 0 });
      gsap.set('.hero-title-mask > span', { yPercent: 110 });
      gsap.set(trailStrokeRef.current, { strokeDasharray: 300, strokeDashoffset: 300 });
      gsap.set('.hero-body', { opacity: 0, y: 16 });
      gsap.set('.hero-cta', { opacity: 0, y: 16 });
      gsap.set('.hero-fact', { opacity: 0, y: 12 });
      gsap.set('.hero-topo-path', { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 });

      // Run Sequence
      tl.to('.hero-bg', { opacity: 1, scale: 1.035, duration: 1.4 })
        .to('.hero-glow', { opacity: 0.45, duration: 1.8 }, '-=0.9')
        .to('header', { opacity: 1, y: 0, duration: 0.6 }, '-=0.8')
        .to('.hero-loc-badge', { opacity: 1, duration: 0.5 }, '-=0.5')
        .to(locationLineRef.current, { width: 32, duration: 0.5 }, '-=0.3')
        .to('.hero-title-mask > span', { yPercent: 0, duration: 0.85, stagger: 0.11 }, '-=0.3')
        .to(trailStrokeRef.current, { strokeDashoffset: 0, duration: 0.8 }, '-=0.35')
        .to('.hero-body', { opacity: 1, y: 0, duration: 0.55 }, '-=0.4')
        .to('.hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.35')
        .to('.hero-fact', { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, '-=0.3')
        .to('.hero-topo-path', { strokeDashoffset: 0, opacity: 0.22, duration: 1.3 }, '-=0.5');

      // ScrollTrigger exit animations
      gsap.to('.hero-bg', {
        scale: 1.07,
        yPercent: 4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.hero-title-mask, .hero-body, .hero-cta-wrap, .hero-topo-svg', {
        y: -30,
        opacity: 0.35,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('.hero-facts-wrap', {
        opacity: 0,
        y: -10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom 50%',
          scrub: true,
        },
      });

      gsap.to('.hero-exit-darken', {
        opacity: 0.55,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-28 pb-8 px-4 sm:px-8 overflow-hidden bg-dk-bg z-10"
    >
      {/* Background Image Layer with Parallax & Soft Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          ref={bgRef}
          className="hero-bg absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
          style={{
            backgroundImage: `url('/images/5906e06f-1029-488b-a81a-e3748c0c388b.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) scale(1.035)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        
        {/* Cinematic Multi-layered Vignetting Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dk-bg via-dk-bg/40 to-dk-bg/75" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
        <div className="hero-exit-darken absolute inset-0 bg-black opacity-0 pointer-events-none" />
        <div className="absolute inset-0 bg-topo-pattern opacity-10" />

        {/* Ambient Warm Cabin Light Gradients (lit from within lamp/wood) */}
        <div className="hero-glow absolute top-[35%] right-[20%] w-[45vw] h-[45vw] rounded-full bg-[#A65F43] opacity-0 filter blur-[100px] mix-blend-screen pointer-events-none" />
        <div className="hero-glow absolute top-[60%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-[#93634E] opacity-0 filter blur-[90px] mix-blend-screen pointer-events-none" />
      </div>

      {/* Decorative Organic Mountain Topography SVG */}
      <svg
        className="hero-topo-svg absolute right-0 bottom-[12%] w-[45%] h-[60%] pointer-events-none text-hl-clay select-none z-10 overflow-visible"
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M 0 320 C 80 270, 160 380, 400 240" strokeDasharray="3 3" className="hero-topo-path" />
        <path d="M 0 340 C 100 290, 200 350, 400 260" className="hero-topo-path" />
        <path d="M 0 360 C 130 310, 250 390, 400 290" className="hero-topo-path" />
        <path d="M 0 380 C 160 340, 300 410, 400 320" strokeDasharray="5 5" className="hero-topo-path" />
      </svg>

      {/* Waypoint Route SVG - Extremely Subtle clay-colored trace line */}
      <svg
        className="absolute top-1/4 right-[8%] w-60 h-80 z-10 opacity-10 pointer-events-none text-hl-clay overflow-visible select-none"
        viewBox="0 0 200 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M10,20 Q60,80 120,40 T190,120 T100,240 T20,290" strokeDasharray="4 4" />
        <circle cx="120" cy="40" r="3" fill="#A65F43" />
        <circle cx="100" cy="240" r="2.5" fill="#C8BDB0" />
      </svg>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto py-12 flex flex-col items-start select-none">
        
        {/* Destination Location Badge Signature */}
        <div className="hero-loc-badge flex items-center gap-3 mb-6 font-sans text-xs tracking-wider uppercase font-semibold text-dk-text">
          <Compass className="w-3.5 h-3.5 text-hl-terracotta animate-spin-slow" />
          <div ref={locationLineRef} className="h-[1px] bg-hl-terracotta/60" />
          <span>REFÚGIO SANTALENA · PAIOL GRANDE · SP</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-medium text-4xl sm:text-6xl lg:text-7xl xl:text-[clamp(68px,5.3vw,96px)] tracking-tight text-dk-text leading-[0.96] max-w-4xl mb-6 relative">
          <div className="hero-title-mask block overflow-hidden py-1">
            <span className="block">Entre montanhas,</span>
          </div>
          <div className="hero-title-mask block overflow-hidden py-1">
            <span className="relative inline-block">
              existe um{' '}
              <span className="italic font-display font-normal text-hl-terracotta">lugar para ficar</span>.
              {/* Hand-drawn organic underline path */}
              <svg
                className="absolute left-0 bottom-[-4px] w-full h-[10px] text-hl-terracotta/80 overflow-visible pointer-events-none select-none"
                viewBox="0 0 300 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  ref={trailStrokeRef}
                  d="M5,6 C85,2 170,1.5 295,7.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </h1>

        {/* Body Text */}
        <p className="hero-body font-sans text-base sm:text-xl text-dk-secondary-text max-w-2xl font-light leading-[1.65] mb-10">
          Chalés privativos próximos à Pedra do Baú, feitos para duas pessoas, com natureza, fogo, água quente e uma vista que muda o plano do fim de semana.
        </p>

        {/* CTAs Group */}
        <div className="hero-cta-wrap flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <a
            href="#chales"
            className="hero-cta w-full sm:w-auto text-center px-8 py-4 bg-hl-forest hover:bg-hl-forest/90 hover:scale-[1.015] text-dk-text font-sans text-sm font-semibold uppercase tracking-wider rounded-full shadow-lg shadow-hl-forest/10 transition-all duration-200"
          >
            Escolher meu chalé
          </a>
          <a
            href="#refugio"
            className="hero-cta w-full sm:w-auto text-center px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-dk-text border border-white/[0.18] font-sans text-sm font-semibold uppercase tracking-wider rounded-full backdrop-blur-md transition-all duration-200"
          >
            Explorar o Refúgio
          </a>
        </div>
      </div>

      {/* Campaign Bottom Experience Strip (No Boxed Panels) */}
      <div className="hero-facts-wrap relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-dk-border/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-sans text-dk-secondary-text">
        <div className="hero-fact flex items-center gap-3">
          <MapPin className="w-4 h-4 text-hl-moss" />
          <div>
            <span className="block text-[10px] text-hl-moss uppercase tracking-wider font-semibold">LANDMARK</span>
            <span className="text-dk-text font-medium">Pedra do Baú (Visível)</span>
          </div>
        </div>
        <div className="hidden md:block h-6 w-px bg-dk-border/45 self-center" />
        <div className="hero-fact flex items-center gap-3">
          <Mountain className="w-4 h-4 text-hl-moss" />
          <div>
            <span className="block text-[10px] text-hl-moss uppercase tracking-wider font-semibold">LOCALIZAÇÃO</span>
            <span className="text-dk-text font-medium">São Bento do Sapucaí — SP</span>
          </div>
        </div>
        <div className="hidden md:block h-6 w-px bg-dk-border/45 self-center" />
        <div className="hero-fact flex items-center gap-3">
          <Flame className="w-4 h-4 text-hl-moss" />
          <div>
            <span className="block text-[10px] text-hl-moss uppercase tracking-wider font-semibold">EXPERIÊNCIA</span>
            <span className="text-dk-text font-medium">Jacuzzi · Lareira · Fogueira</span>
          </div>
        </div>
        <div className="hidden md:block h-6 w-px bg-dk-border/45 self-center" />
        <div className="hero-fact flex items-center justify-between md:justify-end gap-3">
          <div className="text-right">
            <span className="block text-[10px] text-hl-moss uppercase tracking-wider font-semibold">CAPACIDADE</span>
            <span className="text-dk-text font-medium">02 Pessoas / Chalé</span>
          </div>
          <a
            href="#refugio"
            className="w-8 h-8 rounded-full bg-dk-secondary flex items-center justify-center text-dk-text hover:text-hl-terracotta transition-colors border border-dk-border/40 ml-2"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
