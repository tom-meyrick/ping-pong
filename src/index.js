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

//Store
// const store = createStore(
//   reducer,
//   initial,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(persistState()));
//Render
const render = () => {
  let state = store.getState();
  ReactDOM.render(
    <Provider store={store}>
      <App
        handleIncrementP1={() => store.dispatch({ type: "INCREMENTP1" })}
        handleIncrementP2={() => store.dispatch({ type: "INCREMENTP2" })}
        handleReset={() => store.dispatch({ type: "RESET" })}
        handleClick={() => store.dispatch({ type: "ESPERANTO" })}
      />
    </Provider>,
    document.getElementById("root")
  );
};

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
