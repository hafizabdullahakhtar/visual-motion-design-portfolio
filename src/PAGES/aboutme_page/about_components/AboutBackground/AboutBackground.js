import React from "react";
import "./AboutBackground.css";
import AnimatedShapes from "../AnimatedShapes/AnimatedShapes";

const AboutBackground = ({
  expanded,
  showModal,
  personalTime,
  hoveredIcon,
  hoveredType, // Add hoveredType as a prop
}) => {
  const getModeContext = () => {
    if (showModal) {
      return "Professional Mode";
    } else if (personalTime) {
      // Return the name of the hovered icon if in personal mode
      return hoveredIcon ? personalIconNames[hoveredIcon] : "Personal Time";
    } else if (hoveredIcon) {
      // Return the name based on hoveredType
      if (hoveredType === "personal") {
        return personalIconNames[hoveredIcon] || "";
      } else if (hoveredType === "professional") {
        return professionalIconNames[hoveredIcon] || "";
      }
    } else if (expanded) {
      return  <AnimatedShapes />;
    } else {
      return "Initial Mode";
    }
  };

  const personalIconNames = {
    icon1: "Go Back Section | coming soon",
    icon2: "Story Section | coming soon",
    icon3: "Hobbies Section | coming soon",
    icon4: "Vision Section | coming soon",
    icon5: "Ideas Section | coming soon",
  };

  const professionalIconNames = {
    icon1: "Go Back",
    ethics: "Ethics Section | coming soon",
    process: "Process Section | coming soon",
    skills: "Skills Section | coming soon",
    Inspo: "Inspo Section | coming soon",
  };

  return (
    <div className="about-background">
      <div className="mode-name">{getModeContext()}</div>
      <div className="scale"></div>
    </div>
  );
};

export default AboutBackground;
