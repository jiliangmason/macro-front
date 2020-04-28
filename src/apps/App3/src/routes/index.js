/*
 * @Author: 杨伊乐
 * @Desctiption: 文件头部
 * @Date: 2020-04-23 11:31:27
 * @LastEditors: 杨伊乐
 * @LastEditTime: 2020-04-27 16:52:14
 */
import React, { Suspense } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../pages/Home';
import Test3 from '../pages/Test3'

export default () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Test3" exact component={Test3} />
      </Switch>
    </Suspense>
  </Router>
);