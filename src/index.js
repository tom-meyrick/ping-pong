import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import { Provider } from "react-redux";
import initial from "./data/initial";
import reducer from "./data/reducers";
import esperantoJSON from "./data/esperanto.json";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(persistState()));
//Render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
