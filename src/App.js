import React from "react";
import Header from "./Header";
import Scorecard from "./Scorecard";
import WinnerMessage from "./WinnerMessage";
import Reset from "./Reset";
import ScoreTable from "./ScoreTable";

const App = ({
  player1,
  player2,
  serving,
  handleIncrementP1,
  handleIncrementP2,
  handleReset,
  winner,
  scores,
}) => (
  <div className="container">
    <Header />
    <div className="col-md-12">
      <Scorecard
        serving={serving}
        player={player1}
        handleIncrement={handleIncrementP1}
        playerName={"Player 1"}
        serveNotifier={
          "card text-center" + (serving === 1 ? " bg-dark text-white" : "")
        }
      />
      <Scorecard
        serving={serving}
        player={player2}
        handleIncrement={handleIncrementP2}
        playerName={"Player 2"}
        serveNotifier={
          "card text-center" + (serving === 2 ? " bg-dark text-white" : "")
        }
        winner={winner}
      />
    </div>
    <WinnerMessage winner={winner} />
    <Reset handleReset={handleReset} />
    <ScoreTable scores={scores} />
  </div>
);

export default App;
