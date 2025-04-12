import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "./AnimatedShapes.css";

import {
  ExpandMode_01_CreativeCurious,
  ExpandMode_02_MyAvatars,
} from "./FloatingComponents";

const componentPool = [ExpandMode_01_CreativeCurious, ExpandMode_02_MyAvatars];

const generateFloatingCards = () =>
  Array.from({ length: componentPool.length }, (_, i) => {
    const Comp =
      componentPool[Math.floor(Math.random() * componentPool.length)];
    return {
      id: i,
      Component: Comp,
      x: `${Math.floor(Math.random() * 80) + 5}%`, // Random x position
      y: `${Math.floor(Math.random() * 80) + 5}%`, // Random y position
    };
  });

// Animation for individual floating motion (randomized)
const generateRandomFloatMotion = () => {
  return {
    animate: {
      y: [
        0,
        Math.random() * 10 + 5, // Reduced positive y movement
        -(Math.random() * 10 + 5), // Reduced negative y movement
        Math.random() * 12 + 8, // Another reduced positive y movement
        0, // Reset to original position
      ],
      x: [
        0,
        Math.random() * 7 + 3, // Reduced positive x movement
        -(Math.random() * 7 + 3), // Reduced negative x movement
        Math.random() * 6 + 4, // Another reduced positive x movement
        0, // Reset to original position
      ],
      transition: {
        repeat: Infinity,
        duration: Math.random() * 4 + 4, // Randomize the duration slightly for each component
        ease: "easeInOut",
      },
    },
  };
};

const floatingVariant = {
  initial: { opacity: 0, scale: 0.8 },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.3,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const AnimatedShapes = () => {
  const cards = useMemo(() => generateFloatingCards(), []);

  return (
    <div className="">
      {cards.map(({ id, Component, x, y }, index) => {
        const floatMotion = generateRandomFloatMotion(); // Unique float motion for each card

        return (
          <motion.div
            key={id}
            custom={index}
            variants={floatingVariant}
            initial="initial"
            animate="animate"
            style={{
              position: "absolute",
              top: y,
              left: x,
            }}
          >
            <motion.div {...floatMotion}>
              <Component />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedShapes;
