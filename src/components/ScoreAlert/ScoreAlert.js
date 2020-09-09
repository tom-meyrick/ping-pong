import React from "react";

const ScoreAlert = ({ win }) => {
  return (
    <span class="badge badge-info d-flex justify-content-center">{win}</span>
  );
};

export default ScoreAlert;
