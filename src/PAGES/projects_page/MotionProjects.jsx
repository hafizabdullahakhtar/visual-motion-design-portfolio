import React, { useState } from "react";
import "./MotionProjects.css";
import projectsData from "./projectsData";
import VideoModal from "./components/VideoModal";
import SingleProject from "./components/SingleProject";
import Navbar from "../../COMPONENTS/Navbar/Navbar";

const MotionProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleProjectClick = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      project.name.toLowerCase().includes(searchLower) ||
      project.summary?.toLowerCase().includes(searchLower) ||
      (Array.isArray(project.tags) &&
        project.tags.some((tag) => tag.toLowerCase().includes(searchLower)));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="motion_page">
      <div className="filter_search_section">
        <div className="dropdown_new">
          <Navbar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            projectsData={projectsData}
          />
        </div>

        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search_input"
        />
      </div>

      <div className="motion_content">
        {filteredProjects.map((project, index) => (
          <SingleProject
            key={index}
            bannerSrc={project.banners[0]}
            videoSrc={project.videos[0]}
            projectName={project.name}
            projectCategory={project.category}
            projectTags={project.tags}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      <VideoModal
        isOpen={!!selectedProject}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default MotionProjects;
