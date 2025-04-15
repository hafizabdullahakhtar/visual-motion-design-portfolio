import projectsData from "../projectsData";
import "./RelatedVideos.css";
const getRandomVideos = (data, count, currentProjectName) => {
  const filtered = data.filter(
    (project) =>
      project.name.localeCompare(currentProjectName, undefined, {
        sensitivity: "base",
      }) !== 0
  );
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const RelatedVideos = ({ currentProjectName, onVideoClick }) => {
  const relatedVideos = getRandomVideos(projectsData, 10, currentProjectName);

  return (
    <div className="related_videos">
      {relatedVideos.map((project, index) => (
        <div
          key={index}
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
  );
};

export default RelatedVideos;
