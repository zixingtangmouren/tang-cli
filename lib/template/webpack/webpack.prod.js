/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 11:15:52
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-18 21:28:34
 * @Description: file content
 */

const { merge } = require('webpack-merge')
const OptimizeCssAssest = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin') // 用于并行压缩
const path = require('path')
const HardSourcePlugin = require('hard-source-webpack-plugin')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const MiniCssExtract = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.base')
const TestPlugin = require('../plugin/TestPlugin')

const ROOT = process.cwd()

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name]_[chunkhash:8].js',
    path: path.join(ROOT, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtract.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtract({
      filename: 'css/[name]_[contenthash:8].css',
    }),
    new OptimizeCssAssest({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
    new HardSourcePlugin(), // 增加模块缓存
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(ROOT, 'src')}/**/*`, { nodir: true }),
    }),
    new TestPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        cache: true,
      }),
    ],
  },
}

module.exports = merge(prodConfig, baseConfig)
