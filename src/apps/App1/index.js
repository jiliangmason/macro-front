/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:13:39
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-27 14:46:00
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app/App';
import './public-path';

function render(props) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

function storeTest(props) {
  props.onGlobalStateChange((value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev), true);
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  storeTest(props);
  render(props);
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}
