/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:34:47
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-05-11 11:38:48
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import './global.css'
import { RouteWrapper } from './src/components'

ReactDOM.render(<RouteWrapper />, document.getElementById('app_main'));
