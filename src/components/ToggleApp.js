import React from "react";

//Take in all components
//If ... display form
//Otherwise display app
// On reset - return to form

const ToggleApp = ({ win }) => {
  return (
    <span class="badge badge-info d-flex justify-content-center">{win}</span>
  );
};

export default ScoreAlert;
