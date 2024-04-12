/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '.dark-mode'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-accent': 'var(--primary-color_accent)',
        secondary: 'var(--secondary-color)',
        'secondary-accent': 'var(--secondary-color_accent)',
        'light-default': 'var(--background-light)',
        'light-accent': 'var(--background-light_accent)',
        'dark-default': 'var(--background-dark)',
        'dark-accent': 'var(--background-dark_accent)',
      },
      borderRadius: {
        1: 'var(--border-radius-1)',
        2: 'var(--border-radius-2)',
      },
    },
  },
  plugins: [],
};
