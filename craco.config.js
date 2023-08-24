// craco.config.js
module.exports = {
  style: {
    postcssOption: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}