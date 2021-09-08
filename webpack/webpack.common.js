const HtmlWebpackPlugin = require('html-webpack-plugin')
const chalk = require('chalk')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const paths = require('./paths')

module.exports = (isProduction) => ({
  entry: paths.appIndex,
  output: {
    path: paths.appBuild,
    clean: true,
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
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
        },
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
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
})
