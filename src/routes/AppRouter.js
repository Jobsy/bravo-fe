import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


import Home from '../components/Home';
import Slack from '../components/Slack';
import Welcome from '../components/Welcome';
import ProtectedRoute from '../components/ProtectedRoute';

import Shoutout from '../views/SingleShoutout';
import UserProfileView from '../views/UserProfileView';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/slack" component={Slack} />
    <ProtectedRoute path="/shoutout" component={Shoutout} />
    <ProtectedRoute path="/welcome" component={Welcome} />
    <Route exact path="/user" component={UserProfileView} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default AppRouter;
