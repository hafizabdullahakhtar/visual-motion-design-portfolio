import React from "react";
import "./MoreDotsIcon.css";

const MoreDotsIcon = () => {
  return (
    <svg height="40" width="40" className="loader">
      <circle className="dot" cx="12" cy="20" r="1.5" />
      <circle className="dot" cx="20" cy="20" r="1.5" />
      <circle className="dot" cx="28" cy="20" r="1.5" />
    </svg>
  );
};

export default MoreDotsIcon;
