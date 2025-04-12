import projectsData from "../projectsData";
import "./RelatedVideos.css";
const getRandomVideos = (data, count) => {
  const copied = [...data];
  const shuffled = copied.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const RelatedVideos = ({ onVideoClick }) => {
  const relatedVideos = getRandomVideos(projectsData, 10);

  return (
    <div className="related_videos">
      {relatedVideos.map((project) => (
        <div
          key={project.name}
          className="related_video_item"
          onClick={() => onVideoClick(project.videos[0])}
        >
          {/* Display the first banner as a thumbnail */}
          {project.banners.length > 0 && (
            <img
              src={project.banners[0]} // Use the first banner
              alt={project.name}
              className="video_banner"
            />
          )}
          <a
            href={project.videos[0]} // Use the first video as the link
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
