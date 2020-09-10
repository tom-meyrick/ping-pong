import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./data/store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import initial from "./data/initial";
import reducer from "./data/reducers";
import esperantoJSON from "./data/esperanto.json";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
