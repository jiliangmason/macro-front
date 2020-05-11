/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-27 11:51:43
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-05-09 17:28:47
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { name, version } = require('./package');
const { getPortByName } = require('../../config');
const isDev = process.argv.indexOf('development') > -1;
const isLocal = process.env.LOCAL;
const currentEnv = process.env.SERVER_ENV;
const isProd = process.env.PROD;
const ASSETS_HOST = {
  dev: {
    imgs: 'https://dev-assets.hnzycfc.com',
    medias: 'https://dev-assets.hnzycfc.com',
    statics: 'https://dev-assets.hnzycfc.com',
  },
  sit: {
    imgs: 'https://sit-assets.hnzycfc.com',
    medias: 'https://sit-assets.hnzycfc.com',
    statics: 'https://sit-assets.hnzycfc.com',
  },
  uat: {
    imgs: 'https://uat-assets.hnzycfc.com',
    medias: 'https://uat-assets.hnzycfc.com',
    statics: 'https://uat-assets.hnzycfc.com',
  },
  grey: {
    imgs: 'https://grey-assets.hnzycfc.com',
    medias: 'https://grey-assets.hnzycfc.com',
    statics: 'https://grey-assets.hnzycfc.com',
  },
  prod: {
    imgs: '',
    medias: '',
    statics: '',
  },
};

module.exports = {
  entry: './index.js',
  devtool: isDev ? 'source-map' : 'none',
  devServer: {
    port: getPortByName(name),
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
    filename: '[name].[hash:8].js',
    publicPath: isLocal || isProd
      ? '/' : `${ASSETS_HOST[currentEnv].statics}/${name}/${version}/`
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
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __DEV__: isDev,
      __SERVER_ENV__: `"${currentEnv}"`,
      __LOCAL__: isLocal
    })
  ],
};
