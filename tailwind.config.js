/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body:    ['"Inter"', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#000D2E',
          900: '#001035',
          800: '#001E5A',
          700: '#0A3070',
          600: '#1A4AC8',
        },
        copa: {
          green:     '#009B3A',
          'green-d': '#007A2D',
          'green-g': '#00C853',
          gold:      '#FEDF00',
          'gold-d':  '#E0C400',
          pink:      '#FF2D87',
          'pink-d':  '#C2185B',
          pix:       '#32BCAD',
        },
      },
      animation: {
        float:    'float 4.5s ease-in-out infinite',
        float2:   'float2 4.2s ease-in-out infinite',
        pricepop: 'pricepop 2.8s ease-in-out infinite',
        wobble:   'wobble 3.6s ease-in-out infinite',
        wobble2:  'wobble2 3.6s ease-in-out 1.6s infinite',
        blink:    'blink 1.4s ease-in-out infinite',
        shine:    'shine 4s ease-in-out infinite',
      },
      keyframes: {
        float:    { '0%,100%': { transform: 'translateY(0) rotate(-1.5deg)' }, '50%': { transform: 'translateY(-14px) rotate(-1.5deg)' } },
        float2:   { '0%,100%': { transform: 'translateY(0) rotate(2deg)'   }, '50%': { transform: 'translateY(-14px) rotate(2deg)'   } },
        pricepop: { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.04)' } },
        wobble:   { '0%,100%': { transform: 'rotate(-3deg) scale(1)' }, '50%': { transform: 'rotate(3deg) scale(1.04)' } },
        wobble2:  { '0%,100%': { transform: 'rotate(-3deg) scale(1)' }, '50%': { transform: 'rotate(3deg) scale(1.04)' } },
        blink:    { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
        shine:    { '0%': { left: '-80%' }, '30%,100%': { left: '150%' } },
      },
      boxShadow: {
        card:    '0 4px 20px rgba(0,30,90,.08), 0 1px 4px rgba(0,30,90,.06)',
        'btn-g': '0 8px 24px rgba(0,155,58,.40)',
        glow:    '0 0 60px rgba(0,200,83,.25)',
      },
    },
  },
  plugins: [],
}
