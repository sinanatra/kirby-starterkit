const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const LiveReloadPlugin = require("webpack-livereload-plugin");

const commonConfig = {
  context: path.resolve(__dirname, "./src/"),
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "./www/assets/"),
    publicPath: "/",
    filename: "./js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "/images/",
          publicPath: "../images/",
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "/fonts/",
          publicPath: "../fonts/",
        },
      },
    ],
  },
  plugins: [
    new LiveReloadPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/bundle.css",
    }),
  ],
};

/**
 * Export config based on mode
 */
module.exports = (env, argv) => {
  const mode = argv.mode;

  /**
   * Development config
   */
  if (mode === "development") {
    return merge(commonConfig, {
      devtool: "inline-source-map",
    });
  }

  /**
   * Production config
   */
  if (mode === "production") {
    return merge(commonConfig, {});
  }
};
