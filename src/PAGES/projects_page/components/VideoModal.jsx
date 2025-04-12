/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import "./VideoModal.css";
import Divider from "../../home_page/components/HeroDivs/effects_components/Modals/ProcessModal/components/Divider";
import TickIcon from "../../../ASSETS/ICONS/TickIcon";
import CloseIcon from "../../../ASSETS/ICONS/CloseIcon";
import ActionButton from "../../home_page/components/ActionButton/ActionButton";
import RelatedVideos from "./RelatedVideos";
import projectsData from "../projectsData"; // Import the project data

const VideoModal = ({ isOpen, onClose, project: initialProject }) => {
  const [project, setProject] = useState(initialProject || { videos: [] });
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const isGif = (url) => {
    return url && url.toLowerCase().endsWith(".gif");
  };

  useEffect(() => {
    if (initialProject) {
      setProject(initialProject);
    }
  }, [initialProject]);

  useEffect(() => {
    if (videoRef.current && project.video) {
      // Initialize Plyr player for the first time
      playerRef.current = new Plyr(videoRef.current, {
        controls: [
          "play",
          "progress",
          "current-time",
          "mute",
          "autoplay",
          "volume",
        ],
      });
    }

    // Cleanup the player when the component unmounts or video changes
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [project.video]); // Only initialize when the project.video changes

  // Handle changing the project when a related video is clicked
  const handleProjectChange = (videoSrc) => {
    setProject((prevState) => ({
      ...prevState,
      video: videoSrc, // Change the video source
    }));
  };

  if (!isOpen || !project) return null; // Ensure project exists before rendering

  return (
    <div className="video_modal" onClick={onClose}>
      <div className="video_modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="close_button" onClick={onClose}>
          Close
        </button>
        <div className="modal_inner">
          <div className="modal_left_section">
            {project ? (
              <>
                <div className="modal_project_name">{project.name}</div>
                <div className="modal_project_category">{project.category}</div>
                <div className="modal_project_summary_heading">
                  Project Summary
                </div>
                <div className="modal_project_summary">{project.summary}</div>
                <div className="modal_my_role">
                  {project.role?.map((role, index) => (
                    <div key={index} className="role-item">
                      <div className="tick_icon">✔</div>
                      <div className="role">{role}</div>
                    </div>
                  ))}
                </div>
                <div className="modal_role">{project.involvement}</div>
                <div className="action_area">
                  <ActionButton text="Book a Call" isPrimary={true} />
                </div>
              </>
            ) : (
              <div>Loading project...</div>
            )}
          </div>
          <div className="modal_right_section">
            <div className="modal_video_container">
              {project &&
                Array.isArray(project.videos) &&
                project.videos.length > 0 && (
                  <video
                    key={project.video}
                    ref={videoRef}
                    className="plyr"
                    src={project.video || project.videos[0]}
                    controls
                    autoPlay={true}
                  />
                )}
            </div>

            {/* Related videos section */}
            <div className="modal_related_videos">
              {project &&
                Array.isArray(project.videos) &&
                project.videos.length > 1 && (
                  <>
                    <div
                      className="modal_project_summary_heading"
                      style={{ marginBottom: "1rem", color: "var(--text-sec)" }}
                    >
                      More From This Collection
                    </div>
                    <div className="related_videos">
                      {project.videos.slice(1).map((video, index) => (
                        <div
                          key={index}
                          className="related_video_item"
                          onClick={() => handleProjectChange(video)}
                        >
                          {project.banners?.length > 0 && (
                            <img
                              src={project.banners[0]} // Use the first banner
                              alt={project.name}
                              className="video_banner"
                            />
                          )}
                          <a
                            href={video} // Use the related video as the link
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
                )}
            </div>
            {/* Related videos section */}
            <div className="modal_related_videos">
              <div
                className="modal_project_summary_heading"
                style={{ marginBottom: "1rem", color: "var(--text-sec)" }}
              >
                More Projects
              </div>
              <RelatedVideos onVideoClick={handleProjectChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
