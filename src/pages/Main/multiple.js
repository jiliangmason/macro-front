/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:34:47
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-27 15:48:39
 */
import { loadMicroApp } from 'qiankun';

loadMicroApp(
  { name: 'app1', entry: '//localhost:9001', container: '#react16' },
  {
    sandbox: {
      strictStyleIsolation: true,
    },
  },
);

loadMicroApp(
  { name: 'app2', entry: '//localhost:9002', container: '#react16' },
  {
    sandbox: {
      strictStyleIsolation: true,
    },
  },
);

loadMicroApp(
  { name: 'app3', entry: '//localhost:9003', container: '#react16' },
  {
    sandbox: {
      strictStyleIsolation: true,
    },
  },
);
