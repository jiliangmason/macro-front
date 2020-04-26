/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:01:51
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-26 16:07:09
 */
import React from 'react';
import routes from './routes';

import 'antd/dist/antd.min.css';
import './App.css';

export default function App() {
  return (
    <div className="app-main">
      {routes()}
    </div>
  );
}
