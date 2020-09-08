import React from "react";
import Header from "./components/Header";
import Scorecard from "./components/Scorecard/ScoreCard";
import WinnerMessage from "./components/WinnerMessage/index";
import Reset from "./components/Reset/index";
import ScoreTable from "./components/ScoreTable/index";
import P1Score from "./components/Scorecard/P1Score";
import P2Score from "./components/Scorecard/P2Score";

const App = ({
  handleIncrementP1,
  handleIncrementP2,
  winner,
  handleReset,
  scores,
}) => (
  <div className="container">
    <Header />
    <div className="col-md-12 d-inline-flex">
      <P1Score handleIncrement={handleIncrementP1} />
      <P2Score handleIncrement={handleIncrementP2} />
    </div>
    <WinnerMessage />
    <Reset handleReset={handleReset} />
    <ScoreTable />
  </div>
);

export default App;
