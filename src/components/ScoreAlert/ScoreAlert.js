import React from "react";

const ScoreAlert = ({ winning_score }) => {
  return (
    <span class="badge badge-info d-flex justify-content-center">
      {winning_score} to win
    </span>
  );
};

export default ScoreAlert;
