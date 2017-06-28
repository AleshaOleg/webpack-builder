var config = {
  context: __dirname + '/src',
  entry: './main.js',

  output: {
    filename: 'script.js',
    path: __dirname + "/build",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  }
};

module.exports = config;