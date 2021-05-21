const path = require('path');
module.exports = {
  mode: 'development',
  entry: { index: './src/index.js' },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [{
      test: /\.txt$/,
      use: {
        loader: path.resolve(__dirname, 'loaders/loader.js'),
        options: {
          name: 'Alice'
        }
      }
    }]
  },
};
