import { useState, useEffect, useRef } from "react";
import "plyr/dist/plyr.css";
import Divider from "../../home_page/components/HeroDivs/effects_components/Modals/ProcessModal/components/Divider";
import "./VideoModal.css";
import ActionButton from "../../home_page/components/ActionButton/ActionButton";
import projectsData from "../projectsData";
import RelatedVideos from "./RelatedVideos";
import CloseIcon from "../../../ASSETS/ICONS/CloseIcon";
import TickIcon from "../../../ASSETS/ICONS/TickIcon";
import SameProjectVideos from "./SameProjectVideos";

const VideoModal = ({ isOpen, onClose, project: initialProject }) => {
  const [project, setProject] = useState(initialProject);
  const videoRef = useRef(null);

  useEffect(() => {
    // Update project state when initialProject prop changes
    setProject(initialProject);
  }, [initialProject]);

  useEffect(() => {
    if (videoRef.current) {
      // const player = new Plyr(videoRef.current, {
      //   controls: [
      //     "play",
      //     "progress",
      //     "current-time",
      //     "mute",
      //     "autoplay",
      //     "volume",
      //   ],
      // });
    }
  }, [isOpen]);

  // Handle changing the project when a related video is clicked
  const handleProjectChange = (selectedProject) => {
    if (
      selectedProject.name === project?.name &&
      selectedProject.video === project?.video
    ) {
      return; // Avoid re-rendering the same project
    }
    setProject(selectedProject);
  };

  if (!isOpen) return null;

  return (
    <div className="video_modal" onClick={onClose}>
      <div className="video_modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="close_button" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="modal_inner">
          <div className="modal_left_section">
            {project ? (
              <>
                <div className="modal_project_name">{project.name}</div>
                <div className="modal_project_category">
                  {project.version ?? project.category}
                </div>
                <Divider width="100%" marginBlock="0.5rem" />

                <div className="modal_project_summary">{project.summary}</div>
                <div className="modal_my_role">
                  {project.role.map((role, index) => (
                    <div key={index} className="role-item">
                      <div className="tick_icon">
                        <TickIcon />
                      </div>
                      <div className="role">{role}</div>
                    </div>
                  ))}
                </div>
                <div className="modal_role">{project.involvement}</div>
                <div className="action_area">
                  <ActionButton text="📞 Book Meeting" isPrimary={true} />
                </div>
              </>
            ) : (
              <div>Loading project...</div>
            )}
          </div>
          <div className="modal_right_section">
            <div className="modal_video_container">
              <video
                ref={videoRef}
                className="plyr"
                src={project ? project.video : ""}
                controls
                autoPlay={true}
              />
            </div>
            <div className="modal_related_videos">
              
              <SameProjectVideos
                currentProjectName={project?.name}
                currentProjectIndex={projectsData.findIndex(
                  (p) => p.name === project?.name && p.video === project?.video
                )}
                onVideoClick={handleProjectChange}
              />
            </div>
            <div className="modal_related_videos">
              <div
                className="modal_project_summary_heading"
                style={{ marginBottom: "1rem", color: "var(--text-sec)" }}
              >
                More Projects
              </div>
              <RelatedVideos
                currentProjectName={project?.name}
                onVideoClick={handleProjectChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
