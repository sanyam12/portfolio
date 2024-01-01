import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient': "url('/background.svg')",
      },
      backgroundColor: {
        'custom-gray': 'rgba(46, 46, 46, 1)',
        'custom-gray-90': 'rgba(46, 46, 46, 0.9)',
      },
    },
  },
  plugins: [],
}
export default config
