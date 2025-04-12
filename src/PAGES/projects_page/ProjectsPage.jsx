/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectsPage.css";
import FloatingText from "./components/FloatingText";
import MotionProjects from "./MotionProjects";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="projects_page">
      <MotionProjects />
      {/* <div className="section_boxes">
        <SectionBox
          text="Branding"
          navigateTo="/brand-identity-projects"
          sectionClass="branding"
        />
        <SectionBox
          text="Motion"
          navigateTo="/motion-projects"
          sectionClass="motion"
        />
        <SectionBox
          text="Design"
          navigateTo="/design-projects"
          sectionClass="design"
        />
      </div> */}
    </div>
  );
};

const SectionBox = ({ text, navigateTo, sectionClass }) => {
  const [hovered, setHovered] = React.useState(false);
  const navigate = useNavigate();

  return (
    <section
      className={`section ${sectionClass}`}
      onClick={() => navigate(navigateTo)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FloatingText text={text} reset={hovered} />
    </section>
  );
};

export default ProjectsPage;
