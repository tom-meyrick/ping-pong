import React from "react";

const Reset = ({ handleReset }) => {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-danger m-3" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
