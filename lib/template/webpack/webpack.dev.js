/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 11:15:42
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-22 18:33:38
 * @Description: file content
 */


const DEV_PROT = 8080
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `You application is running here http://localhost:${DEV_PROT}`,
          '唐某人专属webpack配置文件',
        ],
        notes: [
          'Some additionnal notes to be displayed unpon successful compilation',
        ],
      },
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
    port: DEV_PROT
  },
  devtool: 'cheap-source-map',
}

module.exports = merge(devConfig, baseConfig)
