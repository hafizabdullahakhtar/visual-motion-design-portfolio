import React, { useState } from "react";
import "./CheckList.css";

const ChecklistComponent = () => {
  const [checkedItems, setCheckedItems] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const allChecked = Object.values(checkedItems).every(Boolean);

  return (
    <div className="check_list_area">
      <div className="checklist-component">
        <div className="checklist-heading">Checklist</div>
        <div className="checklist-content">
          {["checkbox1", "checkbox2", "checkbox3"].map((checkbox) => (
            <label key={checkbox} className="checkbox-field">
              <input
                type="checkbox"
                id={checkbox}
                checked={checkedItems[checkbox]}
                onChange={handleCheckboxChange}
                className="checkbox-input"
              />
              <span
                className={`checkbox-label ${
                  checkedItems[checkbox] ? "strikethrough" : ""
                }`}
              >
                {checkbox === "checkbox1" &&
                  "You genuinely care about your product and how it impacts end user"}
                {checkbox === "checkbox2" &&
                  "You're in regular conversations with your users, and their feedback directly shapes your product"}
                {checkbox === "checkbox3" &&
                  "Your goal isn't to exactly mimic your competition, you're aiming for something uniquely yours"}
              </span>
            </label>
          ))}
        </div>
        {allChecked && (
          <div className="checklist-sticker">
            ❤︎
            <div className="text-tiny font-semibold text-center">
              Cool, looks like
              <br />
              we're on the
              <br />
              same page
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChecklistComponent;
