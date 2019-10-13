import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Result from '../pages/result';
import { MainContent } from './style';

const Routes = () => (
  <BrowserRouter>
    <MainContent>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </div>
    </MainContent>
  </BrowserRouter>
);

export default Routes;
