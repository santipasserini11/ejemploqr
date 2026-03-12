/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coca: {
          red:   '#E3001B',
          dark:  '#C8102E',
          deep:  '#A50010',
          light: '#FF2A3C',
        },
        cream: '#FFF8F0',
      },
      fontFamily: {
        pacifico: ['var(--font-pacifico)', 'cursive'],
        body: ['Georgia', 'Times New Roman', 'serif'],
      },
      keyframes: {
        qrReveal: {
          '0%':   { opacity: '0', transform: 'scale(0.4) rotate(-8deg)' },
          '65%':  { transform: 'scale(1.06) rotate(1.5deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,255,255,0.5)' },
          '50%':       { boxShadow: '0 0 0 18px rgba(255,255,255,0)' },
        },
        santaSway: {
          '0%, 100%': { transform: 'rotate(-1.5deg) translateY(0px)' },
          '50%':       { transform: 'rotate(1.5deg) translateY(-4px)' },
        },
        bottleLift: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-8deg)' },
          '50%':       { transform: 'translateY(-10px) rotate(-14deg)' },
        },
        winkOpen: {
          '0%, 70%, 100%': { opacity: '1' },
          '76%, 90%':       { opacity: '0' },
        },
        winkClosed: {
          '0%, 70%, 100%': { opacity: '0' },
          '76%, 90%':       { opacity: '1' },
        },
        floatUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        snowfall: {
          '0%':   { transform: 'translateY(-30px) rotate(0deg)', opacity: '0.8' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0.1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        timerWarning: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%':       { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'qr-reveal':      'qrReveal 0.65s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'pulse-glow':     'pulseGlow 2s ease-in-out infinite',
        'santa-sway':     'santaSway 3.5s ease-in-out infinite',
        'bottle-lift':    'bottleLift 2.5s ease-in-out infinite',
        'wink-open':      'winkOpen 6s ease-in-out infinite',
        'wink-closed':    'winkClosed 6s ease-in-out infinite',
        'float-up':       'floatUp 0.7s ease-out forwards',
        'snowfall':       'snowfall linear infinite',
        'shimmer':        'shimmer 2.5s linear infinite',
        'timer-warning':  'timerWarning 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
