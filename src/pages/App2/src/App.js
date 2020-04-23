/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 14:01:51
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-23 14:13:13
 */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Divider } from 'antd';

import 'antd/dist/antd.min.css';
import './App.css';

import Home from './views/Home';

const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react16' : '/'}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default function App() {
  return (
    <div className="app-main">
      <RouteExample />
    </div>
  );
}
