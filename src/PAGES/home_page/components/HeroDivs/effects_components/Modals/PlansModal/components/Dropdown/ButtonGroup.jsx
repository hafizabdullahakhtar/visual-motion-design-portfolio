import React, { useState, useEffect, useCallback } from "react";
import "./ButtonGroup.css";
import pricingData from "../../pricingData";

const ButtonGroup = ({ onSelectionChange, selectedOptions }) => {
  // Extract service names from pricingData (keys: Design, Motion, Combo)
  const options = Object.keys(pricingData);

  const initialCheckedState = options.reduce((acc, option) => {
    acc[option] = selectedOptions.includes(option);
    return acc;
  }, {});

  const [checkedItems, setCheckedItems] = useState(initialCheckedState);

  useEffect(() => {
    const updatedCheckedState = options.reduce((acc, option) => {
      acc[option] = selectedOptions.includes(option);
      return acc;
    }, {});
    setCheckedItems(updatedCheckedState);
  }, [selectedOptions, options]);

  const handleCheckboxChange = useCallback(
    (event) => {
      const { id, checked } = event.target;

      setCheckedItems((prevState) => {
        if (Object.values(prevState).filter(Boolean).length === 1 && !checked) {
          return prevState;
        }

        const updatedCheckedItems = {
          ...prevState,
          [id]: checked,
        };
        const selectedOptions = Object.keys(updatedCheckedItems).filter(
          (key) => updatedCheckedItems[key]
        );
        onSelectionChange(selectedOptions);
        return updatedCheckedItems;
      });
    },
    [onSelectionChange]
  );

  return (
    <div className="button-group">
      {options.map((item) => (
        <label key={item} className="checkbox-field">
          <input
            type="checkbox"
            id={item}
            checked={checkedItems[item]}
            onChange={handleCheckboxChange}
            className="checkbox-input"
          />
          <span
            className={`checkbox-label ${checkedItems[item] ? "checked" : ""}`}
          >
            {item}
          </span>
        </label>
      ))}
    </div>
  );
};

export default ButtonGroup;
