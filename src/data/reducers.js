import initial from "./initial";

//Functions
//Set values from form
const submit = (state, action) => ({
  ...state,
  player_1: action.player_1.name,
  player_2: action.player_2.name,
  winning_score: action.winning_score,
  change_serve: action.change_serve,
  gameID: action.gameID,
  submitted: true,
});
//Set P1 state
const player1 = (state) => ({ ...state, player1: state.player1 + 1 });
//Set P2 state
const player2 = (state) => ({ ...state, player2: state.player2 + 1 });
//Return a 2 or a 5 depending on if we are at deuce
const deuce = (state) =>
  state.player1 >= 20 && state.player2 >= 20 ? 2 : state.alternate;
//Check who is serving
// const serving = (state) => ({
//   ...state,
//   serving:
//     Math.floor((state.player1 + state.player2) / deuce(state)) % 2 === 0
//       ? 1
//       : 2,
// });
//Check that the difference between the two players is >= 2
const aheadByTwo = (state) => Math.abs(state.player1 - state.player2) >= 2;
//Check the score has reached 21
const reached21 = (state) =>
  state.player1 >= state.winning_score || state.player2 >= state.winning_score;
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
              player1: {
                name: state.player_1,
                score: state.player1,
                won: state.winner === 1,
              },
              player2: {
                name: state.p2Name,
                score: state.player2,
                won: state.winner === 2,
              },
            },
          ]
        : state.scores,
  };
};

//Return esperanto version of the site
const formatJSON = (state, esperantoJSON) => {
  return {
    ...state,
    esperanto: [
      esperantoJSON.map((i) => [
        i.player1,
        i.player2,
        i.serving,
        i.reset,
        i.player1Wins,
      ]),
    ],
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTP1":
      return storeResult(winner(player1(state)));
    case "INCREMENTP2":
      return storeResult(winner(player2(state)));
    case "RESET":
      return {
        ...initial,
        scores: state.scores,
        gameID: state.gameID,
        submitted: false,
      };
    case "ESPERANTO":
      return formatJSON();
    case "START_GAME":
      return submit(state, action);
    default:
      return state;
  }
};

export default reducer;
