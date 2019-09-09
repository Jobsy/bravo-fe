import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import SignInRedirect from '../components/SignInRedirect';
import DashboardRouter from './DashboardRouter';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/slack-signin" component={SignInRedirect} />
    <Route component={DashboardRouter} />
  </Switch>
);

export default AppRouter;
