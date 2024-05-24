import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--background-color))',
        'copy-primary': 'rgba(var(--copy-primary-color))',
        'copy-secondary': 'rgba(var(--copy-secondary-color))',
        link: 'rgba(var(--link-color))',
        border: 'rgba(var(--border-color))',
        card: 'rgba(var(--card-color))',
        'card-border': 'rgba(var(--card-border-color))',
        'input-bg': 'rgba(var(--input-bg-color))',
        'input-border': 'rgba(var(--input-border-color))',
        'input-border-focus': 'rgba(var(--input-border-focus-color))',
        'input-placeholder': 'rgba(var(--input-placeholder-color))',
        'checkbox-bg': 'rgba(var(--checkbox-bg-color))',
        'checkbox-border': 'rgba(var(--checkbox-border-color))',
        'checkbox-border-focus': 'rgba(var(--checkbox-border-focus-color))',
        'button-primary-bg': 'rgba(var(--button-primary-bg-color))',
        'button-primary-border': 'rgba(var(--button-primary-border-color))',
        'button-primary-copy': 'rgba(var(--button-primary-copy-color))',
        'button-primary-hover-bg': 'rgba(var(--button-primary-hover-bg-color))',
      },
    },
  },
  plugins: [],
};
export default config;
