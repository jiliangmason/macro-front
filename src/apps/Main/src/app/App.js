/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-28 14:34:32
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-28 16:05:02
 */
import React from 'react';
import routes from '../routes';

export default function App() {
  return (
    <div className="app-main">
      {routes()}
    </div>
  );
}
