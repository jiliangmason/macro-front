/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:34:47
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-28 18:33:47
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import './global.css'
import { RouteWrapper } from './src/components'

console.log('history', history)
ReactDOM.render(<RouteWrapper />, document.getElementById('app_main'));
