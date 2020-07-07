const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

/////////////////////////////////////////////////////////////////////////

const localhost = 'http://NAME-OF-MY-APP.test'; // Server address as setup in Laravel

/////////////////////////////////////////////////////////////////////////

const modernizrConfig = {
  filename: 'modernizr.js',
  options: ['setClasses'],
  'feature-detects': [
    'history',
    'cookies',
    'touchevents',
    'css/backdropfilter',
    'css/customproperties',
    'css/backgroundblendmode',
    'css/cssgrid',
    'css/filters',
    'css/objectfit',
    'css/positionsticky',
    'img/srcset',
  ],
  minify: {
    output: {
      comments: false,
      beautify: false,
    },
  },
};

let config = {
  entry: ['./src/js/index.js', './src/scss/application.scss'],
  output: {
    path: path.resolve(__dirname, './www/assets/js'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { babelrc: true },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '../fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: /icons/,
        options: {
          extract: true,
          publicPath: '../svg/',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /icons/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/bundle.css',
    }),
    new HardSourceWebpackPlugin(),
    new MinifyPlugin({}, { comments: false }),
    new OptimizeCSSAssets(),
    new SpriteLoaderPlugin(),
    new ModernizrWebpackPlugin(modernizrConfig),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: localhost,
      files: [
        {
          match: ['**/*.php'],
          fn: function(event, file) {
            if (event === 'change') {
              const bs = require('browser-sync').get('bs-webpack-plugin');
              bs.reload();
            }
          },
        },
      ],
      injectChanges: true,
      notify: true,
    }),
  ],
};
module.exports = config;
