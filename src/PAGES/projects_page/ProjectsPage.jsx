import "./ProjectsPage.css";
import MotionProjects from "./MotionProjects";
import usePageTitle from "../../usePageTitle";

const ProjectsPage = () => {
  usePageTitle("Abdullah | Motion Design");

  return (
    <div className="projects_page">
      <MotionProjects />
    </div>
  );
};

export default ProjectsPage;
