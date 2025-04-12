"use client";

import React, { useState } from "react";
import MenuButton from "./MenuButton";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import NavItems from "./NavItems";

const variants = {
  open: {
    width: 350,
    height: 356,
    // top: "-25px",
    // right: "-25px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};

const Navbar = ({ selectedCategory, setSelectedCategory, projectsData }) => {
  const [isActive, setIsActive] = useState(false);

  const allCategories = [
    "All Categories",
    ...new Set(projectsData.map((p) => p.category)),
  ];

  return (
    <div className="header">
      <motion.div
        className="menu"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && (
            <NavItems
              categories={allCategories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setIsActive={setIsActive}
            />
          )}
        </AnimatePresence>
      </motion.div>

      <MenuButton
        isActive={isActive}
        setIsActive={setIsActive}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Navbar;
