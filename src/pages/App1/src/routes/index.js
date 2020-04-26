/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 11:31:27
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-26 16:10:13
 */
import React, { Suspense } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../views/Home';

export default () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Suspense>
  </Router>
);
