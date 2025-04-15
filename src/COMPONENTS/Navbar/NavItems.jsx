import "./NavItems.css";
import { motion } from "framer-motion";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 45,
    translateY: 40,
    translateX: 0,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      // opacity: {duration: 0.35},
      delay: 0.4 + i * 0.05,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: (i) => ({
    opacity: 0,
    // rotateX: 45,
    translateY: 20,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.1 + i * 0.05,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  // exit: {
  //     opacity: 0,
  //     transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
  // },
};

export default function NavItems({
  categories,
  selectedCategory,
  setSelectedCategory,
  setIsActive,
}) {
  return (
    <div className="navItem-container">
      <div className="navItem-body">
        {categories.map((category, i) => (
          <div key={i} className="linkContainer">
            <motion.div
              custom={i}
              variants={perspective}
              animate="enter"
              exit="exit"
              initial="initial"
              onClick={() => {
                setSelectedCategory(category);
                setIsActive(false);
              }}
              style={{
                cursor: "pointer",
                color: selectedCategory === category ? "#f59e0b" : "#fff",
              }}
            >
              <a href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}>
                {category}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
