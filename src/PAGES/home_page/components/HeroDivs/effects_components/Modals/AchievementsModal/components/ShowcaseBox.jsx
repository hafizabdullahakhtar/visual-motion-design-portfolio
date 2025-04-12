import React from "react";
import PropTypes from "prop-types";
import "./ShowcaseBox.css";

const ShowcaseBox = ({ title, description }) => {
  return (
    <div className="showcase_box">
      <div className="showcase_title">{title}</div>
      <div className="showcase_description">{description}</div>
    </div>
  );
};

ShowcaseBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ShowcaseBox;
