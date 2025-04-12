import React from "react";
import "./SingleProject.css";

const SingleProject = ({
  bannerSrc,
  projectName,
  projectCategory,
  onClick,
}) => {
  return (
    <div className="single_branding_project" onClick={onClick}>
      <div className="project_banner_wrapper">
        <img className="project_banner" src={bannerSrc} alt={projectName} />
      </div>
      <div className="project_info">
        <div className="project_name">{projectName}</div>
        <div className="project_category">{projectCategory}</div>
      </div>
    </div>
  );
};

export default SingleProject;
