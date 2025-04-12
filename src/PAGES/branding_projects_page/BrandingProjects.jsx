import React, { useState } from "react";
import "./BrandingProjects.css";
import brandingProjectsData from "./brandingProjectsData";
import VideoModal from "./components/BrandingModal";
import SingleProject from "./components/SingleProject";
import BrandingModal from "./components/BrandingModal";


const BrandingProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle the project click
  const handleProjectClick = (project) => {
    setSelectedProject(project); // Set selected project when clicked
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null); // Reset selected project to null when closing
  };

  return (
    <div className="motion_page">
      <div className="motion_content">
        {brandingProjectsData.map((project, index) => (
          <SingleProject
            key={index}
            bannerSrc={project.banner}
            projectName={project.name}
            projectCategory={project.category}
            projectTags={project.tags}
            onClick={() => handleProjectClick(project)} // On click, set project data
          />
        ))}
      </div>

      {/* Show the modal when a project is selected */}
      <BrandingModal
        isOpen={!!selectedProject} // Modal visibility based on whether a project is selected
        onClose={closeModal} // Close modal handler
        project={selectedProject} // Pass full project data to the modal
      />
    </div>
  );
};

export default BrandingProjects;