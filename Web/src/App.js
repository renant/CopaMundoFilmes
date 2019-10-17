import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';
import Routes from './routes';

import { Provider } from "react-redux";
import store from "./store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={5000} />
      </Fragment>
    </Provider>
  );
}

export default App;
