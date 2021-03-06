const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const HTML_TEMPLATE = "public/develop.html";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 600, // 빌드 후 600ms간 watch를 딜레이 한다.
    poll: 1000, // 1초마다 변화를 감지한다.
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "개발모드 | 홈",
      template: HTML_TEMPLATE,
      filename: "home.html",
    }),
  ],
});
