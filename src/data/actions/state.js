export const incrementP1 = (score, id, won, serving) => {
  return {
    type: "INCREMENTP1",
    player1: score,
    gameID: id,
    winner: won,
    serving,
  };
};

export const incrementP2 = (score, id, won, serving) => {
  return {
    type: "INCREMENTP2",
    player2: score,
    gameID: id,
    winner: won,
    serving,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const esperanto = () => {
  return {
    type: "ESPERANTO",
  };
};

export const submit = ({
  player_1,
  player_2,
  winning_score,
  change_serve,
  id,
}) => {
  return {
    type: "START_GAME",
    player_1,
    player_2,
    winning_score,
    change_serve,
    gameID: id,
  };
};
