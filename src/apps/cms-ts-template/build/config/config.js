/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-05-07 09:10:03
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-05-07 09:50:10
 */
const path = require('path');
const paths = require('./paths');
const { getPortByName } = require('../../../../config');

const pkg = require(paths.appPackageJson);

const currentEnv = process.env.SERVER_ENV;

const ASSETS_HOST = {
  dev: 'https://dev-assets.hnzycfc.com',
  sit: 'https://sit-assets.hnzycfc.com',
  uat: 'https://uat-assets.hnzycfc.com',
  grey: 'https://grey-assets.hnzycfc.com',
  prod: 'https://s.hnzycfc.com',
};

const config = {
  // 通用配置（dev和prod都生效的）
  global: {
    imageInlineSizeLimit: 8192, // 小图片转行内base64格式的大小限制(kb)
    fontInlineSizeLimit: 8192, // 字体转base64的大小限制(kb)
  },
  // 本地开发配置
  development: {
    host: '0.0.0.0',
    port: getPortByName(pkg.name),

    sourceMap: true, // 是否开启SourceMap

    // 相对于服务器根目录的路径，用于加载资源。
    publicPath: '',

    bundleAnalyzerReport: false, // 是否在build后显示文件分析
    analyzerPort: 8889 // 打包分析页面占用端口
  },
  // 打包配置
  build: {
    // 是否开启SourceMap
    sourceMap: false,
    // 构建根目录
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 相对于服务器根目录的路径，用于加载资源。（css、js、font部署的路径。2020年4月7日修改，图片、音视频等除index.html外的所有文件，全部放在「s」域名下）
    publicPath: `${ASSETS_HOST[currentEnv]}/${pkg.name}/${pkg.version}/`,
  },
};

// console.log('/-----配置信息-----/', process.env.NODE_ENV)
// console.log(config)
// console.log('/-----配置信息-----/')

module.exports = config;
