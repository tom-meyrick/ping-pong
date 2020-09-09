export const incrementP1 = () => {
  return {
    type: "INCREMENTP1",
  };
};

export const incrementP2 = () => {
  return {
    type: "INCREMENTP2",
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

export const submit = ({ p1Name, p2Name, win, alternate }) => {
  return {
    type: "START_GAME",
    p1Name: p1Name,
    p2Name: p2Name,
    win: +win,
    alternate: +alternate,
  };
};
