import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./ducks";
import sagas from "./sagas";



const sagaMiddleware = createSagaMiddleware();


const composer = compose(applyMiddleware(sagaMiddleware))

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
