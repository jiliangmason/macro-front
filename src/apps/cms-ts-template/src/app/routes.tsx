import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Test from '../pages/Test';
import TsNew from '../pages/TsNew';

export default (): React.ReactElement => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/ts-new" component={TsNew} />
    </Switch>
  </Suspense>
);
