import "./MenuButton.css";
import { motion } from "framer-motion";

const MenuButton = ({ isActive, setIsActive, selectedCategory }) => {
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="nav-button"
      style={{
        borderRadius: isActive ? "2rem" : "1rem",
        backgroundColor: isActive
          ? "var(--ui-border-color)"
          : "var(--background-color)",
        width: !isActive ? "min-content" : "fit-content",
      }}
    >
      <motion.div
        className="slider"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="el">
          <PerspectiveText label={selectedCategory} />
        </div>
        <div className="el">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

export default MenuButton;

function PerspectiveText({ label }) {
  return (
    <div className="perspectiveText">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
