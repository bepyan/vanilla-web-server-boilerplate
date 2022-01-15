const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const HTML_TEMPLATE = "public/production.html";

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: "홈",
      template: HTML_TEMPLATE,
      filename: "home.html",
    }),
  ],
});
