import React, { Children, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "../../../../../../../../ASSETS/ICONS/CloseIcon";
import "./ExpandableCard.css";
import {
  darkenHexColor,
  lightenHexColor,
} from "../../PlansModal/components/Pricing/colorUtility";
import Lottie from "react-lottie";

const ExpandableCard = ({
  header,
  description,
  isExpanded,
  image,
  video,
  lottie,
  lottieOptions,
  color,
  children,
  showIcon = true,
  icon,
  onIconClick,
  disableExpand = false,
  custombackgroundColor = "var(--grey-color)",
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  const darkerColor = darkenHexColor(custombackgroundColor, 10);
  const lighterColor = lightenHexColor(custombackgroundColor, 20);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  // Helper function to process description text
  const processDescription = (text) => {
    if (!text) return null;

    const parts = text.split("gotonewline");

    return parts.map((part, index) => (
      <React.Fragment key={index}>
        <p>{part}</p>
        {index < parts.length - 1 && (
          <div style={{ marginBottom: "1rem" }}></div>
        )}
      </React.Fragment>
    ));
  };

  return (
    <motion.div
      className="expandable-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      style={{ backgroundColor: lighterColor }}
    >
      <div
        className="expandable-card-header"
        onClick={
          onIconClick
            ? (e) => {
                e.stopPropagation();
                onIconClick();
              }
            : !disableExpand
            ? toggleExpand
            : undefined
        }
        style={{ color: color }}
      >
        <div className="header_text">{header}</div>
        <motion.div
          initial={false}
          animate={{ rotate: icon || expanded ? 0 : -135 }}
          transition={{ duration: 0.3 }}
        >
          {showIcon && (icon ? icon : <CloseIcon color={color} />)}
          {/* Only show if showIcon is true */}
        </motion.div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="expandable-card-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="expandable-card-description"
              style={{ color: color || "", paddingInline: "1rem" }}
            >
              {processDescription(description)}
            </div>
            {children && (
              <>
                {Children.map(children, (child, index) => (
                  <div
                    className="children"
                    style={{
                      border: `1px solid ${darkerColor}`,
                      // boxShadow: `0px 8px 16px ${darkerColor}`,
                      // paddingInline: "1rem",
                      borderRadius: "12px",
                      // overflow: "hidden",
                      // marginBottom: "1.5rem",
                      color: color,
                      backgroundColor: custombackgroundColor,
                    }}
                  >
                    <div
                      style={{
                        marginBottom:
                          index === Children.count(children) - 1 ? 0 : "1rem", // Adjust gap size
                      }}
                    >
                      {child}
                    </div>
                  </div>
                ))}
              </>
            )}
            {/* Render based on availability: image, lottie, or video */}
            {image && (
              <img className="expandable-card-image" src={image} alt={header} />
            )}
            {!image && lottie && (
              <Lottie options={lottieOptions} height={300} width={300} />
              // lottieOptions={{
              //   loop: true,
              //   autoplay: true,
              //   animationData: lottieAnimationData, // Lottie JSON file
              //   rendererSettings: {
              //     preserveAspectRatio: "xMidYMid slice",
              //   },
              // }}
            )}
            {!image && !lottie && video && (
              <video className="expandable-card-video" src={video} controls />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandableCard;
