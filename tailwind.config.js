/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Authentic Brand Colors
        brushstroke: {
          50: '#FFF5F5',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#D81E27', // Signature brushstroke red
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        royal: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1A3F8B', // Authentic script royal blue
          900: '#133887', // Rich vibrant royal blue
          950: '#0F2C6B', // Deep Royal Blue (unmistakably blue, never dark-green/black)
        },
        // Mapped Theme Palettes (All mapped to Royal Blue)
        forest: {
          950: '#0F2C6B', // Deep Royal Blue
          900: '#133887', // Rich Royal Blue
          800: '#1A3F8B', // Authentic Shaheen Royal Blue
          700: '#1D4ED8', // Vibrant Royal Blue
          600: '#2563EB',
          500: '#3B82F6',
        },
        gold: {
          600: '#1D4ED8', // Royal Blue
          500: '#2563EB', // Vibrant Light Royal Blue
          400: '#3B82F6', // Light Royal Blue
          300: '#60A5FA', // Soft Light Royal Blue
          200: '#93C5FD', // Light Royal Blue Tint
          100: '#DBEAFE', // Very Light Royal Blue
          50: '#EFF6FF',  // Lightest Royal Ice Blue
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FFFFFF', // Crisp White
          200: '#F8FAFC', // Light cool white
          300: '#F1F5F9', // Light clean surface
          400: '#E2E8F0',
        },
        wheat: {
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
          500: '#94A3B8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grain-pattern': "radial-gradient(rgba(216, 30, 39, 0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(8, 20, 44, 0.08)',
        'luxury-hover': '0 30px 60px -15px rgba(8, 20, 44, 0.16)',
        'gold-glow': '0 0 25px -5px rgba(59, 130, 246, 0.35)',
        'royal-glow': '0 0 25px -5px rgba(26, 63, 139, 0.35)',
      }
    },
  },
  plugins: [],
}
