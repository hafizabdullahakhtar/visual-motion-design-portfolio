import React from "react";
import Tooltip from "./Tooltip";

// import "../ProcessModal.css";

const StepDescription = () => {
  // Mapping each word to its specific tooltip text
  const wordTooltipMap = {
    You: "Tooltip for You",
    Need: "Tooltip for Need",
    Go: "Tooltip for Go",
    Search: "Tooltip for Search",
    Find: "Tooltip for Find",
    Take: "Tooltip for Take",
    Return: "Tooltip for Return",
    Change: "Tooltip for Change",
  };

  // Extract words from the keys of the mapping object
  const words = Object.keys(wordTooltipMap);

  return (
    <div
      className="step_description"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        cursor: "pointer",
      }}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <Tooltip text={wordTooltipMap[word]}>
            <div className="word"> {word}</div>
          </Tooltip>
          {index < words.length - 1 && " → "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepDescription;
