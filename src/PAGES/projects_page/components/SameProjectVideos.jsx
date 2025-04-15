import projectsData from "../projectsData";
import "./RelatedVideos.css"; // Reuse same styles

const getSameProjectVideos = (
  data,
  currentProjectName,
  currentProjectIndex
) => {
  return data.filter(
    (project, index) =>
      project.name.localeCompare(currentProjectName, undefined, {
        sensitivity: "base",
      }) === 0 && index !== currentProjectIndex
  );
};

const SameProjectVideos = ({
  currentProjectName,
  currentProjectIndex,
  onVideoClick,
}) => {
  const sameNameVideos = getSameProjectVideos(
    projectsData,
    currentProjectName,
    currentProjectIndex
  );

  return (
    <>
      {sameNameVideos.length > 0 ? (
        <div
          className="modal_project_summary_heading"
          style={{ marginBottom: "1rem", color: "var(--text-sec)" }}
        >
          More Videos from This Project
        </div>
      ) : (
        <></>
      )}
      <div className="related_videos">
        {sameNameVideos.length > 0 &&
          sameNameVideos.map((project, index) => (
            <div
              key={`${project.name}-${index}`}
              className="related_video_item"
              onClick={() => onVideoClick(project)}
            >
              <img
                src={project.banner}
                alt={project.name}
                className="video_banner"
              />
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="video_link"
              >
                {project.name}
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default SameProjectVideos;
