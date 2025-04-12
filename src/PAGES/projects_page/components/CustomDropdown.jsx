import { useState, useRef, useEffect } from "react";
import "./CustomDropdown.css";

const CustomDropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom_dropdown_wrapper" ref={dropdownRef}>
      <div
        className="custom_dropdown_selected"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || "Select a category"}
        <span className={`dropdown_arrow ${isOpen ? "open" : ""}`}>
          <svg
            class=""
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8 10 4 4 4-4"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="custom_dropdown_list">
          {options.map((option, index) => (
            <div
              key={index}
              className={`custom_dropdown_item ${
                selected === option ? "active" : ""
              }`}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
