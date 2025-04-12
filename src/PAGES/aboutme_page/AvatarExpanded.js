import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animationSettings } from "./animationSettings";
import IconComponent from "./about_components/icon_component/IconComponent";
import MoreDotsIcon from "./about_components/MoreIconDots/MoreDotsIcon";

const AvatarExpanded = ({ expanded, professionalMode, personalMode }) => (
  <AnimatePresence>
    {expanded ? (
      <>
        <motion.div
          className="about-open"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, x: 100, width: 50, height: 50 }}
          exit={{ opacity: 0, width: 30, height: 30 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.div>
        <div className="two-extra-circles">
          <motion.div
            className="extra-circle professional-circle"
            initial={{ opacity: 0, width: 0, height: 0 }}
            animate={{ opacity: 1, width: 50, height: 50 }}
            transition={animationSettings.circles}
            onClick={professionalMode}
          >
            <IconComponent iconType="pro" />
          </motion.div>
          <motion.div
            className="extra-circle personal-circle"
            initial={{ opacity: 0, width: 0, height: 0, scale: 0 }}
            animate={{ opacity: 1, width: 50, height: 50, scale: 1 }}
            transition={animationSettings.circles}
            onClick={personalMode}
          >
            <MoreDotsIcon />
          </motion.div>
        </div>
      </>
    ) : (
      <motion.div
        className="about-open"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={animationSettings.circles}
        style={{ width: 30, height: 30 }}
      >
        <svg
          width="80%"
          height="80%"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clip-path="url(#clip0_104_44)">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"
              fill="url(#paint0_linear_104_44)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_104_44"
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stop-color="#A7B5FF" />{" "}
              <stop offset="1" stop-color="#F3ACFF" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_104_44">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
      </motion.div>
    )}
  </AnimatePresence>
);

export default AvatarExpanded;
