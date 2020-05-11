/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-27 17:34:54
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-05-11 15:11:43
 */
const apps = [{
  name: 'cms-ts-template',
  entry: '//localhost:9001',
  activeRule: '/cms-main/cms-ts-template',
  port: 9001
}, {
  name: 'cms-react-template',
  entry: '//localhost:9002',
  activeRule: '/cms-main/cms-react-template',
  port: 9002
}];

const getPortByName = (name) => {
  let port = ''
  apps.forEach((item) => {
    if (item.name === name) {
      port = item.port
    }
  })
  return port
}

module.exports = {
  apps,
  getPortByName
}
