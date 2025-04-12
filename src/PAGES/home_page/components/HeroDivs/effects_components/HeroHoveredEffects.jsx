import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ServicesEffect from "./Effects/ServicesEffect/ServicesEffect";
import PlansEffect from "./Effects/PlansEffect/PlansEffect";
import AchievementsEffect from "./Effects/AchievementsEffect/AchievementsEffect";
import ProcessEffect from "./Effects/ProcessEffect/ProcessEffect";

const HeroHoveredEffects = ({ section }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <AnimatePresence>
        {section === "services" && (
          <motion.div
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <ServicesEffect />
          </motion.div>
        )}

        {section === "plans" && (
          <motion.div
            key="plans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <PlansEffect />
          </motion.div>
        )}

        {section === "process" && (
          <motion.div
            key="process"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <ProcessEffect />
          </motion.div>
        )}
        {section === "achievements" && (
          <motion.div
            key="achievements"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
          >
            <AchievementsEffect />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroHoveredEffects;
