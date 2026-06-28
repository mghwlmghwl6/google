/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          green: 'rgb(34, 197, 94)',
          red: 'rgb(239, 68, 68)',
          orange: 'rgb(249, 115, 22)',
          gold: 'rgb(234, 179, 8)',
        },
      },
      animation: {
        'liquid-flow': 'liquidFlow 3s ease infinite',
        'flip-in': 'flipIn 0.4s ease-out',
        'heartbeat': 'heartbeatGlow 1s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'shine-sweep': 'shineSweep 5s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        liquidFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        flipIn: {
          '0%': { transform: 'perspective(400px) rotateX(-90deg)', opacity: '0' },
          '100%': { transform: 'perspective(400px) rotateX(0)', opacity: '1' },
        },
        heartbeatGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.6)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        shineSweep: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
