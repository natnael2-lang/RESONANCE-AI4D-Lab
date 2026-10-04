/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled from the current RESONANCE site (hero gradient, nav buttons, call-to-action gradient).
        brand: {
          950: '#062a26',
          900: '#0e3f37', // hero, left
          800: '#0e4f36', // hero, centre
          700: '#15582f', // hero, right
          600: '#025947', // call-to-action, left
          500: '#33923d', // call-to-action, centre
          400: '#64ca33', // call-to-action, right (bright green)
          teal: '#004340', // navigation buttons
          100: '#dff3e4',
        },
        // Secondary colours taken from the lab's circular logo.
        logo: { blue: '#2677a9', rose: '#db5461', sage: '#c1d699' },
        ink: '#0f172a',
      },
      fontFamily: {
        // Playfair Display is the typeface of the existing RESONANCE wordmark.
        display: ['"Playfair Display Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 8px 28px -10px rgba(6, 42, 38, .5)',
        card: '0 1px 2px rgba(6, 42, 38, .08), 0 12px 32px -16px rgba(6, 42, 38, .28)',
      },
      keyframes: {
        pulseRing: {
          '0%, 100%': { opacity: '.25' },
          '50%': { opacity: '.85' },
        },
        floatIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        // A wave leaving the centre: the "resonance" idea in motion.
        rippleOut: {
          '0%': { opacity: '.55', transform: 'scale(.2)' },
          '100%': { opacity: '0', transform: 'scale(1)' },
        },
        drawLine: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'pulse-ring': 'pulseRing 5s ease-in-out infinite',
        'float-in': 'floatIn .7s ease-out both',
        'ripple-out': 'rippleOut 6s ease-out infinite',
        'draw-line': 'drawLine 1.1s .5s ease-out both',
      },
    },
  },
  plugins: [],
};
