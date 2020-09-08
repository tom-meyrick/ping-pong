import React from "react";

const Scorecard = ({
  serving,
  player,
  handleIncrement,
  playerName,
  serveNotifier,
}) => {
  return (
    <div className="col-md-6 mt-4">
      <div className={serveNotifier}>
        <h5 className="card-header">{playerName}</h5>
        <div className="card-body">
          <p className="card-text display-1">{player}</p>
        </div>
        <div className="card-footer">
          <button
            className="form-control btn btn-success"
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
