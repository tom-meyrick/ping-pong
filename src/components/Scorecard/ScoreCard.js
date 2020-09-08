import React from "react";

const Scorecard = ({
  serving,
  score,
  handleIncrement,
  playerID,
  playerName,
  serveNotifier,
  winner,
}) => {
  return (
    <div className="col-md-6 mt-4">
      <div
        className={
          "card text-center" +
          (serving === playerID ? " bg-dark text-white" : "")
        }
      >
        <h5 className="card-header">{playerName}</h5>
        <div className="card-body">
          <p className="card-text display-1">{score}</p>
        </div>
        <div className="card-footer">
          <button
            className={
              "form-control btn btn-success" + (winner > 0 ? " disabled" : "")
            }
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
