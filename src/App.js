import React from "react";
import Header from "./Header";
import Scorecards from "./Scorecards";
import WinnerMessage from "./WinnerMessage";
import Reset from "./Reset";

const App = ({
  player1,
  player2,
  serving,
  handleIncrementP1,
  handleIncrementP2,
  handleReset,
  winner,
}) => (
  <React.Fragment>
    <Header />
    <Scorecards
      serving={serving}
      player1={player1}
      player2={player2}
      handleIncrementP1={handleIncrementP1}
      handleIncrementP2={handleIncrementP2}
    />
    <WinnerMessage winner={winner} />
    <Reset handleReset={handleReset} />
  </React.Fragment>
);

export default App;
