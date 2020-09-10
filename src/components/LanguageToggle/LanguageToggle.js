import React from "react";

const LanguageToggle = ({ handleClick }) => {
  return (
    <button className="btn mt-1" onClick={handleClick}>
      🇬🇧/ 🇪🇸
    </button>
  );
};

export default LanguageToggle;
