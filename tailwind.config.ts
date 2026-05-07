import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00ff9d',
          cyan: '#00d4ff',
          purple: '#a855f7',
          pink: '#ff00aa',
        },
        dark: {
          DEFAULT: '#050508',
          100: '#0a0a0f',
          200: '#111118',
          300: '#1a1a24',
          400: '#22222e',
          500: '#2a2a38',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-3px, 1px)', filter: 'hue-rotate(90deg)' },
          '94%': { transform: 'translate(3px, -1px)', filter: 'hue-rotate(-90deg)' },
          '96%': { transform: 'translate(-2px, 2px)', filter: 'hue-rotate(180deg)' },
          '98%': { transform: 'translate(2px, -2px)', filter: 'hue-rotate(-180deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #00ff9d, 0 0 10px #00ff9d40' },
          '50%': { boxShadow: '0 0 20px #00ff9d, 0 0 40px #00ff9d60' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
