/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-28 09:59:16
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-28 10:06:01
 */
import React, { Suspense } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login'

export default () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Suspense>
  </Router>
);
