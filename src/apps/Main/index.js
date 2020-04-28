/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:34:47
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-28 14:22:45
 */
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';
import './index.less';
import { apps } from '../../config';
import routes from './src/routes'

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
import render from './render/ReactRender';
// import render from './render/VueRender'

/**
 * Step1 初始化应用（可选）
 */
render({ loading: false });

/**
 * Step2 注册子应用
 */
const regApps = apps.map((item) => {
  const { name, entry, activeRule } = item
  return {
    name,
    entry,
    container: '#subapp-viewport',
    activeRule
  }
})
registerMicroApps(
  regApps,
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
