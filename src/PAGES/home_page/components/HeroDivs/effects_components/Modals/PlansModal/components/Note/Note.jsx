import React from "react";
import CloseIcon from "../../../../../../../../../ASSETS/ICONS/CloseIcon";

const Note = ({ heading, children }) => {
  return (
    <div
      style={{
        borderRadius: "16px",
        padding: "1rem",
        backgroundColor: "var(--grey-color)",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <div style={{ fontSize: "1.25rem", margin: 0 }}>{heading}</div>
        <div style={{ marginRight: "0.5rem" }}>
          <CloseIcon />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {children}
      </div>
    </div>
  );
};

export default Note;
