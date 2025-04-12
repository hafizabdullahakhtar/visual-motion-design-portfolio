import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProcessModal from "./Modals/ProcessModal/ProcessModal";
import PlansModal from "./Modals/PlansModal/PlansModal";
import AchievementsModal from "./Modals/AchievementsModal/AchievementsModal";
import ServicesModal from "./Modals/ServicesModal/ServicesModal";

const modalVariants = {
  hidden: { opacity: 0, scale: 1 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1 },
};

const HeroClickedEffect = ({ section, onClose }) => {
  const renderModal = () => {
    switch (section) {
      case "services":
        return <ServicesModal onClose={onClose} />;
      case "plans":
        return <PlansModal onClose={onClose} />;
      case "process":
        return <ProcessModal onClose={onClose} />;
      case "achievements":
        return <AchievementsModal onClose={onClose} />;
      default:
        return null;
    }
  };

  const handleBackgroundClick = (e) => {
    // Only close modal if clicked directly on background
    if (e.target.classList.contains("modal-background")) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {section && (
        <motion.div
          key={`${section}-modal`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ duration: 0.2 }}
          className="modal-background"
          onClick={handleBackgroundClick}
        >
          {renderModal()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroClickedEffect;
