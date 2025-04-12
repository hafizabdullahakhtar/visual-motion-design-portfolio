import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { motion } from "framer-motion";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <motion.div
        key={theme}
        initial={{ y: theme === "light" ? -30 : 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {theme === "light" ? "Go Dark" : "Go Light"}
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
