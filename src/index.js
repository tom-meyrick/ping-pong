import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

//State
const initial = {
  player1: 0,
  player2: 0,
  serving: 1,
  winner: 0,
};

//Variables
const win = 21;

//Functions
const player1 = (state) => ({ ...state, player1: state.player1 + 1 });
const player2 = (state) => ({ ...state, player2: state.player2 + 1 });
const serving = (state) => ({
  ...state,
  serving: Math.floor((state.player1 + state.player2) / 5) % 2 === 0 ? 1 : 2,
});
const reached21 = (state) => state.player1 >= win || state.player2 >= win;
const whoWon = (state) => (state.player1 > state.player2 ? 1 : 2);
//Determines the winner
const winner = (state) => {
  return {
    ...state,
    winner: reached21(state) ? whoWon(state) : 0,
  };
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTP1":
      return winner(serving(player1(state)));
    case "INCREMENTP2":
      return winner(serving(player2(state)));
    case "RESET":
      return initial;
    default:
      return state;
  }
};
//Store
const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//Render
const render = () => {
  let state = store.getState();
  ReactDOM.render(
    <App
      player1={state.player1}
      player2={state.player2}
      handleIncrementP1={() => store.dispatch({ type: "INCREMENTP1" })}
      handleIncrementP2={() => store.dispatch({ type: "INCREMENTP2" })}
      handleReset={() => store.dispatch({ type: "RESET" })}
      serving={state.serving}
      winner={state.winner}
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
