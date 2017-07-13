import React from 'react';
import { Switch, Route } from 'react-router-dom';

import app from './app';

export default () => (
  <Switch>
    <Route path='/' component={app} />
  </Switch>
);
