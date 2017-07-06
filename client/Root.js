import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';

function Root() {
  return (
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  )
}

export default Root;
