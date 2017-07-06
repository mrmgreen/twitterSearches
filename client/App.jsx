import React from 'react';
import { Route, Link } from 'react-router-dom';

import Circles from './circles';

const App = () => (
  <div>
    <ul>
      <li><Link to="/circles">Circles</Link></li>
    </ul>
    <Route path="/circles" component={Circles}/>
  </div>
)

export default App;
