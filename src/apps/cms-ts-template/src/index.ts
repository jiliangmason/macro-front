/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-05-07 09:10:04
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-05-07 14:39:27
 */
import ReactDOM from 'react-dom';
import render from './app/App';

const pkg = require('../package.json');

interface Window {
  __POWERED_BY_QIANKUN__: string;
}

// 生命周期函数
function bootstrap(): Promise<void> {
  console.log('[react16] react app bootstraped');
  return Promise.resolve();
}
function mount(props: { container?: Element }): Promise<void> {
  console.log('[react16] props from main framework', props);
  render(props);
  return Promise.resolve();
}
function unmount(): Promise<void> {
  ReactDOM.unmountComponentAtNode(
    document.getElementById('root') || new Element()
  );
  return Promise.resolve();
}
const tsRender = ({ __POWERED_BY_QIANKUN__ = '' }): Window => {
  if (__POWERED_BY_QIANKUN__ === '') {
    render({});
  }
  return { __POWERED_BY_QIANKUN__ };
};

// 给全局window添加生命周期
Object.assign(window, {
  [pkg.name]: {
    bootstrap,
    mount,
    unmount,
  },
});
tsRender({});
