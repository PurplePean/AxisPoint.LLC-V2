/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
        },
        secondary: {
          DEFAULT: '#0D9488',
          hover: '#0F766E',
        },
        text: {
          DEFAULT: '#111827',
          muted: '#6B7280',
          light: '#9CA3AF',
        },
        surface: {
          DEFAULT: '#F9FAFB',
          alt: '#F3F4F6',
        },
        border: '#E5E7EB',
        dark: {
          bg: '#111827',
          text: '#F9FAFB',
          muted: '#9CA3AF',
        },
      },
      fontFamily: {
        headline: ['Instrument Serif', 'Georgia', 'Times New Roman', 'serif'],
        body: ['Instrument Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
