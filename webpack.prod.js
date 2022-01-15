const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const HTML_TEMPLATE = "public/production.html";

module.exports = merge(common, {
  mode: "production",
  // devtool: "source-map", // 배포 디버깅용
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "홈",
      template: HTML_TEMPLATE,
      filename: "home.html",
    }),
  ],
});
