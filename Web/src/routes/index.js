import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import { MainContent } from './style';

const Routes = () => (
  <BrowserRouter>
    <MainContent>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </MainContent>
  </BrowserRouter>
);

export default Routes;
