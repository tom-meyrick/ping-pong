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
  scores: [],
};

//Functions

//Set P1 state
const player1 = (state) => ({ ...state, player1: state.player1 + 1 });
//Set P2 state
const player2 = (state) => ({ ...state, player2: state.player2 + 1 });
//Return a 2 or a 5 depending on if we are at deuce
const deuce = (state) => (state.player1 >= 20 && state.player2 >= 20 ? 2 : 5);
//Check who is serving
const serving = (state) => ({
  ...state,
  serving:
    Math.floor((state.player1 + state.player2) / deuce(state)) % 2 === 0
      ? 1
      : 2,
});
//Check that the difference between the two players is >= 2
const aheadByTwo = (state) => Math.abs(state.player1 - state.player2) >= 2;
//Check the score has reached 21
const reached21 = (state) => state.player1 >= 21 || state.player2 >= 21;
//Compare the scores of the two players and return the winner
const whoWon = (state) => (state.player1 > state.player2 ? 1 : 2);
//Determines the winner using the previous functions
const winner = (state) => {
  return {
    ...state,
    winner: reached21(state) && aheadByTwo(state) ? whoWon(state) : 0,
  };
};

const storeResult = (state) => {
  return {
    ...state,
    scores:
      state.winner > 0
        ? [
            ...state.scores,
            {
              player1: { score: state.player1, won: state.winner === 1 },
              player2: { score: state.player2, won: state.winner === 2 },
            },
          ]
        : state.scores,
  };
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTP1":
      return storeResult(winner(serving(player1(state))));
    case "INCREMENTP2":
      return storeResult(winner(serving(player2(state))));
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
      scores={state.scores}
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
