import { useState, useEffect } from "react";
import "./BrandingModal.css";
import CloseIcon from "../../../ASSETS/ICONS/CloseIcon";
import ActionButton from "../../home_page/components/ActionButton/ActionButton";
import Divider from "../../home_page/components/HeroDivs/effects_components/Modals/ProcessModal/components/Divider";
import Lottie from "react-lottie"; // If you're using Lottie for animations
import TickIcon from "../../../ASSETS/ICONS/TickIcon";

const BrandingModal = ({ isOpen, onClose, project: initialProject }) => {
  const [project, setProject] = useState(initialProject);

  useEffect(() => {
    // Update project state when initialProject prop changes
    setProject(initialProject);
  }, [initialProject]);

  if (!isOpen || !project) return null; // Ensure that project is not null

  // Function to render the media based on type
  const renderMedia = () => {
    return project.media?.map((item, index) => {
      if (item.type === "image") {
        return (
          <>
            <div className="branding_modal_images">
              <img
                key={index}
                src={item.src}
                alt={`${project.name} image ${index + 1}`}
                className="branding_modal_media_image"
              />
            </div>
          </>
        );
      }
      if (item.type === "video") {
        return (
          <>
            <div className="branding_modal_images">
              <video
                key={index}
                controls
                className="branding_modal_media_image"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </>
        );
      }
      if (item.type === "lottie") {
        return (
          <>
            <div
              className="branding_modal_images"
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: item.backgroundColor,
                width: "100%",
                paddingBlock: "4rem",
                position: "relative",
              }}
            >
              <div
                className="modal_project_summary_heading"
                style={{
                  marginBottom: "1rem",
                  color: "var(--text-sec)",
                  position: "absolute",
                  top: "2rem",
                  left: "2rem",
                }}
              >
                Lottie Animation
              </div>
              <div
                key={index}
                className="branding_modal_media_image"
                style={{
                  height: "600px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Lottie
                  options={{
                    animationData: item.src,
                    loop: true,
                    autoplay: true,
                  }}
                  width={item.size || "auto"}
                />
              </div>
            </div>
          </>
        );
      }
      return null; // Fallback if no media type matches
    });
  };

  return (
    <div className="branding_modal" onClick={onClose}>
      <div
        className="branding_modal_content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="branding_close_button" onClick={onClose}>
          <CloseIcon />
        </button>

        <div className="branding_modal_inner">
          <div className="branding_modal_left_section">
            {project ? (
              <>
                <div className="branding_modal_project_name">
                  {project.name}
                </div>
                <div className="branding_modal_project_category">
                  {project.category}
                </div>
                <Divider width="100%" marginBlock="0.5rem" />
                <div className="modal_project_description">
                  {project.summary}
                </div>

                <div className="modal_role_heading">Roles</div>
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

                <div className="action_area">
                  <ActionButton text="📞 Book Meeting" isPrimary={true} />
                </div>
              </>
            ) : (
              <div>Loading project...</div>
            )}
          </div>

          <div className="branding_modal_right_section">
            <div className="branding_modal_media_container">
              <div className="branding_modal_media">
                {renderMedia()}{" "}
                {/* Render the media (images, videos, or Lottie animations) */}
              </div>
              <div
                className="action_area"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "6rem",
                }}
              >
                <ActionButton text="📞 Book Meeting" isPrimary={true} />
              </div>
              <div
                className="disclaimer"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "4rem",
                }}
              >
                *Disclaimer: I design for your users,
                <br /> not just for you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingModal;
