const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const paths = require('./paths')

module.exports = (isProduction) => ({
  entry: paths.appIndex,
  output: {
    filename: '[name]',
  },
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
  modules: ['node_modules', paths.appSrc],
  resolve: {
    symlinks: false,
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.(png|svg|jpg|jpeg|gif|bmp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|ts|jsx|tsx)$/i,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      inject: true,
      minify: isProduction,
    }),
    new ProgressBarWebpackPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`,
    }),
  ],
})
