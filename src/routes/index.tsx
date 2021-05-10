import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MessageSent from '../pages/MessageSent';
import PageDashboard from '../pages/PageDashboard';
import PageTest from '../pages/PageTest';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PageTest} />
    <Route path="/message" component={MessageSent} />
    <Route path="/dashboard" component={PageDashboard} />
  </Switch>
);

export default Routes;