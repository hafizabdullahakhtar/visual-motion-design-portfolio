import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./ProcessEffect.css";

import brandingVideo from "../../../../../../../ASSETS/VIDEOS/branding.webm";
import motionDesignVideo from "../../../../../../../ASSETS/VIDEOS/motiongraphics.webm";
import uiuxVideo from "../../../../../../../ASSETS/VIDEOS/uiux.webm";

const ProcessEffectCard = ({ title, videoSrc, delay }) => {
  // Determine class name based on title
  const getClassName = () => {
    switch (title) {
      case "Guided Input":
        return "guided-input";
      case "Project Pulse":
        return "project-pulse";
      case "Iteration":
        return "iteration";
      default:
        return "";
    }
  };

  return (
    <motion.div
      className="process_effect_card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: "spring", delay }}
    >
      <video
        className={`process_card_video ${getClassName()}`}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <motion.div
        className="process_card_text"
        initial={{ y: 0 }}
        animate={{ y: ["-5px", "5px"] }} // Adjust range for smoother effect
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5, // Slightly longer duration for smoother movement
          ease: "easeInOut",
        }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

const ProcessEffect = () => {
  return (
    <AnimatePresence>
      <div className="process-effect">
        <div className="process-cards-container">
          <ProcessEffectCard
            title="Guided Input"
            videoSrc={brandingVideo}
            delay={0.1}
          />
          <ProcessEffectCard
            title="Project Pulse"
            videoSrc={motionDesignVideo}
            delay={0.2}
          />
          <ProcessEffectCard
            title="Iteration"
            videoSrc={uiuxVideo}
            delay={0.3}
          />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ProcessEffect;
