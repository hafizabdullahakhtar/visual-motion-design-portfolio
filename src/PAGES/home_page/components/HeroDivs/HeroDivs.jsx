import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import items from "./items";
import "./HeroDivs.css";
import HeroClickedEffect from "./effects_components/HeroClickedEffect";
import HeroHoveredEffects from "./effects_components/HeroHoveredEffects";

const PADDING_INITIAL = "2rem";
const PADDING_HOVER = "3rem";

const transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
  mass: 1,
};

const HeroDivs = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedSection, setClickedSection] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (index) => {
    if (!isSmallScreen) {
      setIsHovering(true);
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isSmallScreen) {
      setIsHovering(false);
      setHoveredIndex(null);
    }
  };

  const handleClick = (index) => {
    if (index !== null) {
      setClickedSection(items[index].section);
    }
  };

  const handleCloseModal = () => {
    setClickedSection(null);
  };

  return (
    <>
      {clickedSection ? (
        <div className="show_modal">
          <HeroClickedEffect
            section={clickedSection}
            onClose={handleCloseModal}
          />
        </div>
      ) : isHovering ? (
        <div className="effects">
          <HeroHoveredEffects
            section={hoveredIndex !== null ? items[hoveredIndex].section : ""}
          />
        </div>
      ) : (
        ""
      )}
      <div className="hero-container">
        <div className="hover_divs_container">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="hover_div"
              initial={{ paddingInline: PADDING_INITIAL }}
              whileHover={isSmallScreen ? {} : { paddingInline: PADDING_HOVER }}
              transition={transition}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)} // Pass the index to handleClick
            >
              <img
                className="hover_img"
                src={item.image}
                alt={item.label}
                style={{
                  filter:
                    isHovering && hoveredIndex !== index
                      ? "grayscale(100%)"
                      : "none",
                }}
              />
              {item.label}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroDivs;
