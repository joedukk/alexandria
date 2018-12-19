import React from 'react';
import { Switch, Route } from 'react-router';

import About from '../containers/about';
import Home from '../containers/home';

export const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);
