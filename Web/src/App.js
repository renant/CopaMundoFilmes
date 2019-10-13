import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    </Provider>
  );
}

export default App;
