/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:34:47
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-23 14:47:57
 */
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';
import './index.less';

// for angular subapp
import 'zone.js';

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
import render from './render/ReactRender';
// import render from './render/VueRender'

/**
 * Step1 初始化应用（可选）
 */
render({ loading: true });

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [
    {
      name: 'app1',
      entry: '//localhost:7100',
      container: '#app1',
      activeRule: '/app1',
    },
    {
      name: 'app2',
      entry: '//localhost:7101',
      container: '#app2',
      activeRule: '/app2',
    },
    {
      name: 'app3',
      entry: '//localhost:7102',
      container: '#app3',
      activeRule: '/app3',
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/app1');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
