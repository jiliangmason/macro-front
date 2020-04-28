/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-27 17:34:54
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-28 09:52:42
 */
const apps = [{
  name: 'app1',
  entry: '//localhost:9002',
  activeRule: '/app1',
  port: 9002
}, {
  name: 'app2',
  entry: '//localhost:9003',
  activeRule: '/app2',
  port: 9003
}, {
  name: 'app3',
  entry: '//localhost:9004',
  activeRule: '/app3',
  port: 9004
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
