/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0F',
        surface: '#1A1A1F',
        'surface-elevated': '#242429',
        accent: '#E8A849',
        'accent-hover': '#F0B85C',
        'text-primary': '#F5F5F7',
        'text-muted': '#8E8E93',
        error: '#FF6B6B',
        success: '#4ADE80',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
