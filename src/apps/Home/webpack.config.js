/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-27 11:51:43
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-27 18:26:09
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('./package');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  devServer: {
    port: '9001',
    clientLogLevel: 'warning',
    disableHostCheck: true,
    compress: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    overlay: { warnings: false, errors: true },
  },
  output: {
    library: `${name}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${name}`,
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
