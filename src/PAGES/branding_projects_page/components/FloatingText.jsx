import React from "react";
import { motion } from "framer-motion";
import "./FloatingText.css";

const FloatingText = ({ text, reset }) => {
  const getRandomValue = (min, max) => Math.random() * (max - min) + min;

  return (
    <div className="floating-text">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="floating-char"
          animate={{
            x: reset ? getRandomValue(-5, 5) : getRandomValue(-100, 200),
            y: reset ? getRandomValue(-5, 5) : getRandomValue(-100, 200),
            rotate: reset ? getRandomValue(-5, 5) : getRandomValue(-45, 90),
          }}
          transition={
            reset
              ? { type: "spring", stiffness: 300, damping: 13 }
              : {
                  duration: getRandomValue(3, 6),
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
          }
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingText;
