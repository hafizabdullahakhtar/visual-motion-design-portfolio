import React from "react";
import Tooltip from "./Tooltip";

import "../ProcessModal.css";

const StepDescription = () => {
  // Mapping each word to its specific tooltip text
  const wordTooltipMap = {
    You: "A relatable character or situation.",
    Need: "Desire or problem",
    Go: "Takes the character into new territory",
    Search: "Potential solutions or approaches",
    Find: "Solution",
    Take: "Goal comes with a cost",
    Return: "Returns with the newfound solution",
    Change: "What transformed by this journey",
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
