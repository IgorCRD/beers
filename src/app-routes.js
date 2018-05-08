import React from 'react';
import { Switch } from 'react-router-dom';
import Application from 'core/containers/application';
import home from 'home';

const appRoutes = store => (
  <Switch>
    <Application>{home.routes(store)}</Application>
  </Switch>
);

export default appRoutes;
