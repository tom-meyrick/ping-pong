import React from "react";

const WinnerMessage = ({ winner, p1Name, p2Name }) => {
  return winner > 0 ? (
    <>
      <h2 className="alert alert-success">
        {winner === "Player 1" ? p1Name : p2Name} wins!
      </h2>
      <hr />
    </>
  ) : null;
};

export default WinnerMessage;
