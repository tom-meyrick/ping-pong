import React from "react";
import Header from "./components/Header";
import Scorecard from "./components/Scorecard/ScoreCard";
import WinnerMessage from "./components/WinnerMessage";
import Reset from "./components/Reset";
import ScoreTable from "./components/ScoreTable";
import ScoreAlert from "./components/ScoreAlert";
import P1Score from "./components/Scorecard/P1Score";
import P2Score from "./components/Scorecard/P2Score";
// import LanguageToggle from "./components/LanguageToggle";
import Form from "./components/Form";

const App = () => (
  <div className="container">
    <Form />
    <Header />
    <ScoreAlert />
    <div className="col-md-12 d-inline-flex">
      <P1Score />
      <P2Score />
    </div>
    <WinnerMessage />
    <Reset />
    {/* <LanguageToggle /> */}
    <ScoreTable />
  </div>
);

export default App;
