import { motion, AnimatePresence } from "framer-motion";
import { animationSettings } from "./animationSettings";
import avatar from "./pic3.jpg";

const AvatarSection = ({ handleAvatarClick, expanded }) => (
  <div className="me">
    <motion.div
      className="about-avatar"
      onClick={handleAvatarClick}
      initial={{
        width: 30,
        height: 30,
      }}
      animate={{
        width: expanded ? 50 : 30,
        height: expanded ? 50 : 30,
      }}
      transition={animationSettings.avatar}
    >
      <img src={avatar} alt="Avatar" />
    </motion.div>
    <AnimatePresence>
      {expanded && (
        <motion.div
          className="about-text"
          initial={{
            opacity: 0,
            x: 20,
            y: 10,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          exit={{
            opacity: 0,
            x: 20,
            y: 10,
          }}
          transition={animationSettings.text}
        >
          <div className="about-hello">Hello, I'm</div>
          <div className="about-name">Abdullah</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default AvatarSection;
