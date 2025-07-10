module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'postcss-nested': {}, // Allows nesting with @apply
    'postcss-at-rules-variables': {}, // Enables @theme
    'postcss-utilities': {}, // Enables @utility
    'autoprefixer': {},
  },
};
