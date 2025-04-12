import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tooltip = ({ children, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const textLength = text.length;

  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        marginRight: "5px",
        cursor: "pointer",
        maxWidth: "100px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          display: "inline-block",
          padding: "2px 4px",
          borderRadius: "6px",
          border: isHovered
            ? "1px solid rgba(0,0,0,0.2)"
            : "1px solid transparent",
          transition: "border 0.3s ease",
        }}
      >
        {children}
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "-40px",
              left: `calc(50% + ${textLength})`,
              transform: "translateX(-50%)",
              backgroundColor: "white",
              color: "black",
              border: "1px solid rgba(0,0,0,0.2)",
              padding: "5px 10px",
              borderRadius: "6px",
              fontSize: "14px",
              whiteSpace: "nowrap",
              zIndex: 1000,
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default Tooltip;
