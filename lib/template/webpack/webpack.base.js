/**
 * @Author: tangzhicheng
 * @Date: 2021-05-23 11:15:34
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-06-23 17:06:17
 * @Description: file content
 */

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Webpackbar = require('webpackbar')
const setMAP = require('./utils/setMAP')

const ROOT = process.cwd()

const { entry, htmlPlugins } = setMAP(ROOT)

module.exports = {
  entry,
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 开启构建缓存
            },
          },
          'eslint-loader'],
      },
      {
        test: /.s[ac]ss$/i,
        use: [
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        loader: [
          "less-loader",
        ],
      },
      {
        test: /.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'imgae/[name]_[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Webpackbar(),
  ].concat(htmlPlugins),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: 'errors-only',
}
