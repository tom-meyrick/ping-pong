import React from "react";
import Header from "./components/Header";
import Scorecard from "./components/Scorecard/ScoreCard";
import WinnerMessage from "./components/WinnerMessage";
import Reset from "./components/Reset";
import ScoreTable from "./components/ScoreTable";
import P1Score from "./components/Scorecard/P1Score";
import P2Score from "./components/Scorecard/P2Score";
import LanguageToggle from "./components/LanguageToggle";

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
    {/* <LanguageToggle handleClick={handleClick} /> */}
    <ScoreTable />
  </div>
);

export default App;
