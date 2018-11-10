const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: [
    path.join(__dirname, 'app', 'index.js'),
    path.join(__dirname, 'app', 'index.html'),
    path.join(__dirname, 'app', 'index.scss')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
              minimize: true
            }
          },
          {
            loader: 'markup-inline-loader',
            options: {
              svgo: {
                plugins: [
                  {
                    mergePaths: false
                  },
                  {
                    cleanupIDs: false
                  },
                  {
                    removeTitle: true
                  },
                  {
                    removeUselessStrokeAndFill: false
                  },
                  {
                    removeUnknownsAndDefaults: false
                  },
                ],
              },
            }
          }
        ]
      },
      {
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
              includePaths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        include: /(app)/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            presets: ['@babel/preset-env'],
            cacheCompression: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html')
    }),
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')])
  ],
  devtool: 'source-map',
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'app'),
    watchContentBase: true,
    publicPath: '/',
    inline: true,
  }
};