import { motion } from "framer-motion";
import IconComponent from "../icon_component/IconComponent";

const animationSettings = {
  container: { type: "spring", stiffness: 300, damping: 20 },
  avatar: { type: "spring", stiffness: 300, damping: 20, duration: 3 },
  text: { duration: 0.1 },
  circles: { duration: 0.5, type: "spring", stiffness: 300, damping: 20 },
  modalContainer: { type: "spring", stiffness: 300, damping: 20 },
  nospring: { type: "tween", stiffness: 300, damping: 20 },
};

const IconList = ({
  icons,
  hoveredIcon,
  hoveredType,
  handleIconMouseEnter,
  handleIconClick,
  setHoveredIcon,
  setHoveredType,
}) => (
  <div className="four-icons">
    {Object.keys(icons).map((icon) => (
      <motion.div
        key={icon}
        className="personal-icon"
        style={{
          borderRadius: "30px",
          backgroundColor:
            hoveredIcon === icon ? "var(--ui-color)" : "transparent",
          border:
            hoveredIcon === icon
              ? "1px solid var(--ui-border-color)"
              : "1px solid transparent",
        }}
        initial={{ opacity: 0, width: 0, x: 4, y: 4 }}
        animate={{
          opacity: 1,
          width: hoveredIcon === icon ? 80 : 25,
          padding: 4,
          x: 0,
          y: 0,
        }}
        exit={{ opacity: 0, width: 0, x: 4, y: 4 }}
        transition={{ ...animationSettings.nospring }}
        onMouseEnter={() => handleIconMouseEnter(icon, hoveredType)}
        onMouseLeave={() => {
          setHoveredIcon(null);
          setHoveredType(null);
        }}
        onClick={() => handleIconClick(icon)}
      >
        <IconComponent iconType={icon} />
        <motion.div
          className="icon-name"
          initial={{ opacity: 0, x: 10, scale: 0, width: 0.5 }}
          animate={{
            opacity: hoveredIcon === icon ? 1 : 0,
            x: 0,
            scale: hoveredIcon === icon ? 1 : 0,
            width: hoveredIcon === icon ? 50 : 0,
          }}
          exit={{ opacity: 0, x: 10, scale: 0, width: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration: 1,
          }}
        >
          {icons[icon]}
        </motion.div>
      </motion.div>
    ))}
  </div>
);

export default IconList;
