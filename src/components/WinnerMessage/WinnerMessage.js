import React from "react";

const WinnerMessage = ({ winner, player_1, player_2 }) => {
  return winner > 0 ? (
    <>
      <h2 className="alert alert-success">
        {winner === 1 ? player_1 : player_2} wins!
      </h2>
      <hr />
    </>
  ) : null;
};

export default WinnerMessage;
