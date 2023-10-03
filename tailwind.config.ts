import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // colors: {
      //   navy: '#0a192f',
      //   'light-navy': '#112240',
      //   'lightest-navy': '#233554',
      //   slate: '#8892b0',
      //   'light-slate': '#a8b2d1',
      //   'lightest-slate': '#ccd6f6',
      //   white: '#e6f1ff',
      //   green: '#64ffda'
      // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
