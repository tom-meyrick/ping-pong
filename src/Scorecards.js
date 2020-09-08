import React from "react";

const Scorecards = ({
  serving,
  player1,
  player2,
  handleIncrementP1,
  handleIncrementP2,
}) => {
  return (
    <div className="row mb-4">
      <div className="col-md-6 mt-4">
        <div
          className={
            "card text-center" + (serving === 1 ? " bg-dark text-white" : "")
          }
        >
          <h5 className="card-header">Player 1</h5>
          <div className="card-body">
            <p className="card-text display-1">{player1}</p>
          </div>
          <div className="card-footer">
            <button
              className="form-control btn btn-success"
              onClick={handleIncrementP1}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6 mt-4">
        <div
          className={
            "card text-center" + (serving === 2 ? " bg-dark text-white" : "")
          }
        >
          <h5 className="card-header">Player 2</h5>
          <div className="card-body">
            <p className="card-text display-1">{player2}</p>
          </div>
          <div className="card-footer">
            <button
              className="form-control btn btn-success"
              onClick={handleIncrementP2}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecards;
