import React from "react";
import PropTypes from "prop-types";

const Divider = ({
  width = "75%",
  height = "1px",
  marginBlock = "3rem",
  backgroundColor = "var(--grey-color)",
}) => {
  return (
    <div
      className="divider"
      style={{
        width: "100%",
        height,
        marginBlock,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          width,
          height,
          backgroundColor,
        }}
      ></div>
    </div>
  );
};

Divider.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  marginBlock: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Divider;
