module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      features: {
        autoprefixer: false,
      },
    },
    'postcss-nested': {},
    'postcss-simple-vars': {},
    cssnano: {
      zindex: false,
    },
  },
};
