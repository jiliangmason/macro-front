/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 13:55:00
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-23 14:53:55
 */
const { name } = require('./package');

module.exports = {
  webpack: config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    return config;
  },

  devServer: _ => {
    const config = {};

    config.port = '7102';
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;

    config.hot = true;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
