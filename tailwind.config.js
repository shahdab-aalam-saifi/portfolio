/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#10151a', // dark background
          light: '#f8fafc',   // light background
        },
        foreground: {
          DEFAULT: '#e6e6e6', // dark text
          light: '#1a202c',   // light text
        },
        accent: {
          violet: '#8b5cf6', // Tailwind violet-500
          cyan: '#06b6d4',
          green: '#22c55e',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        terminal: {
          bg: '#0a0a0a',
          fg: '#00ff00',
          selection: '#264f78',
          cursor: '#ffffff',
        },
        code: {
          bg: '#1e1e1e',
          fg: '#d4d4d4',
          comment: '#6a9955',
          keyword: '#569cd6',
          string: '#ce9178',
          number: '#b5cea8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        code: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        dankmono: ['Dank Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#00ff00' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00' },
          '100%': { boxShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'terminal-bg': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'code-bg': 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
      },
      boxShadow: {
        'terminal': '0 0 20px rgba(0, 255, 0, 0.3)',
        'code': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(0, 255, 0, 0.5)',
      },
    },
  },
  plugins: [],
} 