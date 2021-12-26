module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        xxs: ['.625rem', '1rem'],
        '3.5xl': ['2rem', '2.5rem'],
      },
      colors: {
        'light-blue': '#C9D6DF',
        'primary-color': '#1C3666',
        'primary-active': '#0084F8',
        'secondary-green': '#47C2B1',
        'secondary-silver': '#52616B',
        'secondary-accent': '#D9EDFE',
        'tertiary-content': '#4B5054',
        'default-grey': '#E5E5E5',
        'default-neutral': '#F1F2F4',
        'list-item-color': '#DDE1E5',
      },
      borderRadius: {
        x: '.625rem',
      },
      spacing: {
        2.7: '.656rem',
        11.5: '2.813rem',
        17: '4.375rem',
        19: '4.75rem',
        22: '5.25rem',
        27: '6.75rem',
        73: '18.375rem',
        90: '22.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
