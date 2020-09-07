import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTP1":
      return { ...state, player1: state.player1 + 1 };
    case "INCREMENTP2":
      return { ...state, player2: state.player2 + 1 };
    case "RESET":
      return initial;
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
  let state = store.getState();
  ReactDOM.render(
    <App
      player1={state.player1}
      player2={state.player2}
      handleIncrementP1={() => store.dispatch({ type: "INCREMENTP1" })}
      handleIncrementP2={() => store.dispatch({ type: "INCREMENTP2" })}
      handleReset={() => store.dispatch({ type: "RESET" })}
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
