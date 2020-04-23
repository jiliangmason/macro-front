/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:34:47
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-23 14:51:16
 */
import { loadMicroApp } from 'qiankun';

const app1 = loadMicroApp(
  { name: 'app1', entry: '//localhost:7100', container: '#app1' },
  {
    sandbox: {
      strictStyleIsolation: true,
    },
  },
);

const app2 = loadMicroApp(
  { name: 'app2', entry: '//localhost:7101', container: '#app2' },
  {
    sandbox: {
      strictStyleIsolation: true,
    },
  },
);

const app3 = loadMicroApp(
  { name: 'app3', entry: '//localhost:7102', container: '#app3' },
  {
    sandbox: {
      strictStyleIsolation: true,
    },
  },
);
