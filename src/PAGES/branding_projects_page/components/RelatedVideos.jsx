import React from "react";
import projectsData from "../brandingProjectsData";
import "./RelatedVideos.css";

const getRandomVideos = (data, count) => {
  const copied = [...data]; // 🔐 preserve original
  const shuffled = copied.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const RelatedVideos = ({ onVideoClick }) => {
  const relatedVideos = getRandomVideos(projectsData, 3);

  return (
    <div className="related_videos">
      {relatedVideos.map((project) => (
        <div
          key={project.name}
          className="related_video_item"
          onClick={() => onVideoClick(project.name)}
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
