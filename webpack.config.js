const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = [{
  entry: ['./app.scss', './app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer()]
          }
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: ['./node_modules']
          }
        }
      ]
    },
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}];