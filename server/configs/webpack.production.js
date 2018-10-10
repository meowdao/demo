const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: process.env.NODE_ENV,
  devtool: "source-map",
  entry: {
    client: ["@babel/polyfill", "react-hot-loader/patch", "webpack-hot-middleware/client", "./client/client"],
  },
  output: {
    path: path.join(__dirname, "..", "..", "build", "bundle"),
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    chunkFilename: "[id].js",
    publicPath: `/bundle/`,
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  resolve: {
    extensions: [".json", ".jsx", ".js"],
    modules: [
      "node_modules",
    ],
  },
  module: {
    rules: [{
      test: /\.(le|c)ss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          sourceMap: true,
        },
      }, { // do we need this?
        loader: "postcss-loader",
        options: {
          sourceMap: true,
        },
      }, {
        loader: "less-loader",
        options: {
          sourceMap: true,
        },
      }],
    }, {
      test: /\.(ttf|otf|woff|woff2|eot|svg|gif|png|ico)(\?.+)?$/,
      loader: "file-loader?name=[name].[ext]?[hash]",
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: [
            [
              "@babel/env",
              {
                modules: false,
              },
            ],
            "@babel/react",
          ],
          plugins: [
            "react-hot-loader/babel",
            "@babel/transform-runtime",
            [
              "@babel/proposal-decorators",
              {
                "legacy": true,
              },
            ],
            "@babel/proposal-class-properties",
            "@babel/proposal-function-bind",
            "@babel/proposal-object-rest-spread",
            "lodash",
          ],
        },
      }],
    }],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css",
    }),
    new webpack.DefinePlugin({
      "process.env.PORT": JSON.stringify(process.env.PORT),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.RENDERING": JSON.stringify(process.env.RENDERING),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  performance: {
    hints: false,
  },
  optimization: {
    minimize: false,
    splitChunks: false,
  },
};
