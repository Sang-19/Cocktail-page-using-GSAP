module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Changed from 'tailwindcss'
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-utilities'),
    require('postcss-at-rules-variables')
  ]
}
