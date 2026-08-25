/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base mapping to CSS Variables for runtime styling flexibility
        paper: 'var(--paper)',
        canvas: 'var(--canvas)',
        limestone: 'var(--limestone)',
        rock: 'var(--rock)',
        graphite: 'var(--graphite)',
        summit: 'var(--summit)',
        forest: 'var(--forest)',
        moss: 'var(--moss)',
        clay: 'var(--clay)',
        rust: 'var(--rust)',
        signal: 'var(--signal)',
        fire: 'var(--fire)',

        // Final Hospitality Warmth Pass colors
        'wl-canvas': '#F1EADF',      // warm_light canvas
        'wl-cream': '#F8F4EC',       // warm_light cream
        'wl-parchment': '#E7DCCD',    // warm_light parchment
        'wl-surface': '#F7F1E7',      // warm_light surface
        'wl-text': '#302A25',         // warm_light primary text
        'wl-secondary': '#6D6258',     // warm_light secondary text
        'wl-border': 'rgba(61,48,39,0.10)',

        'dk-bg': '#24201C',          // dark background
        'dk-secondary': '#2B2722',   // dark secondary surface
        'dk-forest': '#29342A',      // dark forest highlight
        'dk-text': '#F3EDE3',        // dark primary text
        'dk-secondary-text': '#C8BDB0', // dark secondary text
        'dk-border': 'rgba(245,235,222,0.08)',

        // Muted hospitality highlights
        'hl-terracotta': '#A65F43',
        'hl-clay': '#93634E',
        'hl-moss': '#66705C',
        'hl-forest': '#314233',

        // Legacy/fallback definitions
        'warm-cream': '#FAF7F0',
        'warm-canvas': '#F4EFE6',
        parchment: '#E9E0D2',
        sandstone: '#D0C2B0',
        sage: '#77806C',
        'deep-forest': '#263027',
        walnut: '#654D3C',
        'dark-wood': '#49372D',
        'burnt-terracotta': '#914D38',
        'warm-charcoal': '#2D2925',
        'deep-charcoal': '#211E1B',
        'soft-white': '#FFFDF8',
        terracotta: '#B76043',
        ember: '#C27A50',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Lora', 'serif'],
        mono: ['DM Sans', 'sans-serif'], // Replaces monospaced text with human sans metadata typography
      },
      borderRadius: {
        none: '0px',
        sm: '12px',      // small_controls (10-14px)
        md: '18px',      // medium_surfaces (18-22px)
        lg: '24px',      // large_cards (24-28px)
        xl: '28px',      // large_images (22-32px)
        '2xl': '32px',   // feature_media (24-36px)
        '3xl': '36px',
        full: '9999px',  // capsule
      },
      boxShadow: {
        sm: '0 2px 8px rgba(58,43,32,0.04)',
        DEFAULT: '0 4px 12px rgba(58,43,32,0.05)',
        md: '0 8px 24px rgba(58,43,32,0.06)',
        lg: '0 18px 50px rgba(58,43,32,0.08)',   // soft ambient light
        xl: '0 18px 60px rgba(0,0,0,0.18)',      // soft ambient dark
        '2xl': '0 25px 70px rgba(0,0,0,0.22)',
      },
    },
  },
  plugins: [],
}
