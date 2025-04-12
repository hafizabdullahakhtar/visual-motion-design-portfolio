/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "./SingleProject.css";
import VolumeIcon from "../../../ASSETS/ICONS/VolumeIcon";

const SingleProject = ({
  bannerSrc,
  videoSrc,
  projectName,
  projectCategory,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track video loading state
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleVideoMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVideoHovered(true);
    }, 200);
  };

  const handleVideoMouseLeave = () => {
    setIsHovered(false);
    clearTimeout(timeoutRef.current);
    setIsVideoHovered(false);
    setIsVideoLoaded(false); // Reset video loading state when hover ends
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true); // Set when video is loaded
  };

  const playSound = () => {
    setIsMuted(!isMuted); // Toggle mute state
  };

  return (
    <div
      className="single_project"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className="project_banner_wrapper"
        onMouseEnter={handleVideoMouseEnter}
        onMouseLeave={handleVideoMouseLeave}
      >
        {isVideoHovered ? (
          <div className="video_wrapper">
            <div className="volume_icon_wrapper">
              {console.log(videoRef.current)} {/* Debugging line */}
              <VolumeIcon isVolume={!isMuted} onClick={playSound} />
            </div>

            {!isVideoLoaded && (
              <img
                className="project_banner"
                src={bannerSrc}
                alt={projectName}
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            )}
            <video
              ref={videoRef}
              className="project_banner"
              src={videoSrc}
              autoPlay
              loop
              muted={isMuted}
              onLoadedData={handleVideoLoaded}
              style={{
                opacity: isVideoLoaded ? 1 : 0,
                transition: "opacity 0s ease-in",
                backgroundColor: "white",
              }} // Smooth opacity transition
            />
          </div>
        ) : (
          <img className="project_banner" src={bannerSrc} alt={projectName} />
        )}
      </div>
      <div className="project_info">
        <div className="project_name">{projectName}</div>
        <div className="project_category">{projectCategory}</div>
      </div>
    </div>
  );
};

export default SingleProject;
