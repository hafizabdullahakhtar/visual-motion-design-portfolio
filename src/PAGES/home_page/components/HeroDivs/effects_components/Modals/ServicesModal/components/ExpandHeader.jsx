import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "react-lottie"; // Ensure you have react-lottie installed
import "./ExpandHeader.css";

const ExpandHeader = ({
  header,
  subHeader,
  moreheadertext,
  isExpanded,
  backgroundColor = "#fdfdfd",
  borderRadius = "2rem",
  imgSrc,
  videoSrc,
  lottieAnimationData,
  children,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  // Render media based on available props
  const renderMedia = () => {
    if (imgSrc) {
      return (
        <img
          src={imgSrc}
          alt="Header Media"
          className="expandheader_header_image"
        />
      );
    }
    if (videoSrc) {
      return (
        <video className="expandheader_header_video" src={videoSrc} controls />
      );
    }
    if (lottieAnimationData) {
      return (
        <Lottie
          options={{
            animationData: lottieAnimationData,
            loop: true,
            autoplay: true,
          }}
          height={100}
          width={100}
        />
      );
    }
    return null;
  };

  return (
    <motion.div
      className="expandheader_card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      style={{ backgroundColor: backgroundColor, borderRadius: borderRadius }}
    >
      <div className="expandheader_card_header" onClick={toggleExpand}>
        {renderMedia()}
        <div className="expandheader_text_section">
          <div className="expandheader_header_text">{header}</div>
          {subHeader && (
            <div className="expandheader_subheader_text">{subHeader}</div>
          )}
          {moreheadertext && (
            <div className="expandheader_moreheader_text">{moreheadertext}</div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {expanded && children && (
          <motion.div
            className="expandheader_card_content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="sprint_explanation">{children}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandHeader;
