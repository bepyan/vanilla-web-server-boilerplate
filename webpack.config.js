const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { default: MiniCssExtractPlugin } = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  target: "web",
  entry: {
    home: "./client/pages/home.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "home.html",
    }),
  ],
};
