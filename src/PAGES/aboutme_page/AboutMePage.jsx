import { useState } from "react";

import "./AboutMePage.css";
import AboutBackground from "./about_components/AboutBackground/AboutBackground";
import { AnimatePresence } from "framer-motion";
import { animationSettings } from "./animationSettings";
import AvatarSection from "./AvatarSection";
import AvatarExpanded from "./AvatarExpanded";
import { motion } from "framer-motion";
import IconList from "./about_components/icon_list_component/IconList";
import usePageTitle from "../../usePageTitle";
// import GLBViewer from "./GLBViewer";

const AboutMePage = () => {
  usePageTitle("Abdullah | About");

  const [expanded, setExpanded] = useState(false);
  const [showProfessional, setshowProfessional] = useState(false);
  const [personalTime, setPersonalTime] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredType, setHoveredType] = useState(null);

  const handleIconMouseEnter = (icon, type) => {
    console.log("Hover enter:", icon);
    setHoveredIcon(icon);
    setHoveredType(type);
  };

  const handleClick = () => {
    if (!showProfessional && !expanded && !personalTime) {
      setExpanded(!expanded);
    }
  };

  const handleIconClick = (icon) => {
    if (icon === Object.keys(personalIcons || professionalIcons)[0]) {
      setPersonalTime(false);
      setshowProfessional(false);
    }
    setHoveredIcon(null);
    setHoveredType(null);
  };

  const handleAvatarClick = (e) => {
    if (expanded && !showProfessional) {
      setExpanded(false);
    }
    if (showProfessional) {
      closeModal();
    }
  };

  const professionalMode = (e) => {
    e.stopPropagation();
    setshowProfessional(true);
  };

  const personalMode = (e) => {
    e.stopPropagation();
    setPersonalTime(true);
  };

  const closeModal = () => {
    setshowProfessional(false);
  };

  const personalIcons = {
    icon1: "go_back",
    icon2: "story",
    icon3: "hobbies",
    icon4: "vision",
    icon5: "Ideas",
  };

  const professionalIcons = {
    icon1: "go_back",
    ethics: "ethics",
    process: "process",
    skills: "skills",
    Inspo: "Inspo",
  };

  return (
    <div className="about-page">
      <div className="about-bg">
        <AboutBackground
          expanded={expanded}
          showProfessional={showProfessional}
          personalTime={personalTime}
          hoveredIcon={hoveredIcon}
          hoveredType={hoveredType}
        />
      </div>
      <AnimatePresence>
        {!showProfessional && !personalTime ? (
          <motion.div
            className="about-container"
            onClick={handleClick}
            initial={{ width: 68, height: 30 }}
            animate={{
              width: expanded
                ? personalTime || showProfessional
                  ? 200
                  : 260
                : 68,
              height: expanded
                ? personalTime || showProfessional
                  ? 30
                  : 50
                : 30,
              padding: expanded
                ? personalTime || showProfessional
                  ? 2
                  : 7
                : 3,
            }}
            transition={animationSettings.container}
          >
            <AvatarSection
              expanded={expanded}
              handleAvatarClick={handleAvatarClick}
            ></AvatarSection>

            <AvatarExpanded
              expanded={expanded}
              professionalMode={professionalMode}
              personalMode={personalMode}
            ></AvatarExpanded>
          </motion.div>
        ) : personalTime ? (
          <motion.div
            className="about-container personal"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              width: hoveredIcon
                ? 240
                : expanded
                ? personalTime
                  ? 200
                  : 260
                : 68,
              height: expanded ? (personalTime ? 30 : 50) : 30,
              padding: hoveredIcon ? 4 : expanded ? (personalTime ? 2 : 7) : 4,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconList
              icons={personalIcons}
              hoveredIcon={hoveredIcon}
              hoveredType="personal"
              handleIconMouseEnter={handleIconMouseEnter}
              handleIconClick={handleIconClick}
              setHoveredIcon={setHoveredIcon} // Pass down the setter
              setHoveredType={setHoveredType} // Pass down the setter
            />
          </motion.div>
        ) : (
          <motion.div
            className="about-container personal"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              width: hoveredIcon
                ? 240
                : expanded
                ? showProfessional
                  ? 200
                  : 260
                : 68,
              height: expanded ? (showProfessional ? 30 : 50) : 30,
              padding: hoveredIcon
                ? 4
                : expanded
                ? showProfessional
                  ? 2
                  : 7
                : 4,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconList
              icons={professionalIcons}
              hoveredIcon={hoveredIcon}
              hoveredType="professional"
              handleIconMouseEnter={handleIconMouseEnter}
              handleIconClick={handleIconClick}
              setHoveredIcon={setHoveredIcon} // Pass down the setter
              setHoveredType={setHoveredType} // Pass down the setter
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMePage;
