const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./webpack.common')
const paths = require('./paths')

const commonConfig = common(false)
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].bundle.js',
    path: paths.appBuild,
    clean: true,
  },
  devServer: {
    contentBase: paths.appBuild,
    hot: true, // 热更新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new ReactRefreshWebpackPlugin(),
  ]
}))
