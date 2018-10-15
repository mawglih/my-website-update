import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';


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
  </Switch>
);

export default {};
