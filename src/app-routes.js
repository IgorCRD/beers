import React from 'react';
import { Switch } from 'react-router-dom';
import Application from 'core/containers/application';
import home from 'home';

const appRoutes = () => (
  <Switch>
    <Application>{home.routes()}</Application>
  </Switch>
);

export default appRoutes;
