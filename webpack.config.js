const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  GenerateSW
} = require('workbox-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  target: 'web',
  mode: 'production',
  context: path.resolve(__dirname, 'app'),
  entry: {
    index: [path.join(__dirname, 'app', 'index.js'), path.join(__dirname, 'app', 'index.scss')],
    roboto: path.join(__dirname, 'app', 'src/scss/fonts', 'roboto.scss'),
    modernizr: path.join(__dirname, 'app', 'src', 'js', 'modernizr.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
        test: /\.(ico|png|webp|jpg|gif|xml|svg|webmanifest|ttf|woff|woff2|txt|pb)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.(html)$/,
        use: [{
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
                plugins: [{
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
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, 'node_modules')
              ]
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
      template: path.join(__dirname, 'app', 'index.html'),
      minify: true,
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
      preload: /\.js$/
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new CleanWebpackPlugin()
  ],
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