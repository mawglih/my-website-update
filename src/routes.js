import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Clients from './components/Clients';

export const CLIENTS = '/clients'
export const PROJECTS = '/projects';
export const HOME = '/';

export const Routes = () => (
  <Switch>
    <Route
      exact
      path={HOME}
      component={Home}
    />
    <Route
      exact
      path={PROJECTS}
      component={Projects}
    />
    <Route
      exact
      path={CLIENTS}
      component={Clients}
    />
    <Route
      component={Home}
    />
  </Switch>
);

export default {};
