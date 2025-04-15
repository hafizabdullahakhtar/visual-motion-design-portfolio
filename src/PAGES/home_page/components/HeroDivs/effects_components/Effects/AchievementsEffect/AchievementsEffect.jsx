import React from "react";

import "./AchievementsEffect.css";

import rec1 from "../../../../../../../ASSETS/IMAGES/recognitions/rec1.png";
import rec2 from "../../../../../../../ASSETS/IMAGES/recognitions/rec2.png";
import rec3 from "../../../../../../../ASSETS/IMAGES/recognitions/rec3.png";
import rec4 from "../../../../../../../ASSETS/IMAGES/recognitions/rec4.png";

const AchievementsEffect = () => {
  return (
    <div className="reecognition-effect">
      <div className="image-container img1">
        <img src={rec1} alt="Recognition 1" />
      </div>
      <div className="image-container img2">
        <img src={rec2} alt="Recognition 2" />
      </div>
      <div className="image-container img3">
        <img src={rec3} alt="Recognition 3" />
      </div>
      <div className="image-container img4">
        <img src={rec4} alt="Recognition 4" />
      </div>
    </div>
  );
};

export default AchievementsEffect;
