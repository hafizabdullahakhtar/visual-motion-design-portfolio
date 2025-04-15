/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectsPage.css";
import MotionProjects from "./MotionProjects";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="projects_page">
      <MotionProjects />
    </div>
  );
};

export default ProjectsPage;
