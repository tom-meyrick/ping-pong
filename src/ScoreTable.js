import React from "react";

const ScoreTable = ({ scores }) => {
  let listScore = scores.map((game) => (
    <tbody>
      <tr>
        <th scope="row" key={game.index}>
          1
        </th>
        <td>{game.player1.win === true ? "Player 1" : "Player 2"}</td>
        <td>
          {game.player1.score > game.player2.score
            ? `${game.player1.score} to ${game.player2.score}`
            : `${game.player2.score} to ${game.player1.score}`}
        </td>
      </tr>
    </tbody>
  ));

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Winner</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      {listScore}
    </table>
  );
};

export default ScoreTable;
