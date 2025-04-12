import React from "react";
import { motion } from "framer-motion";
import "./PlansEffect.css";

const Chip = ({ text, color, delay }) => {
  return (
    <motion.div
      className="chip"
      style={{
        backgroundColor: color,
        padding: "4px 10px",
        borderRadius: "20px",
        marginBottom: "2px",
        fontSize: "12px",
        fontWeight: "600",
        width: "fit-content",
      }}
      initial={{ opacity: 0, y: 10, rotate: Math.random() * 10 - 5 }}
      animate={{ opacity: 1, y: 0, rotate: Math.random() * 10 - 5 }}
      exit={{ opacity: 0, y: -10, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5,
        delay: delay,
      }}
    >
      {text}
    </motion.div>
  );
};

const PlansEffect = () => {
  return (
    <div className="plans_effect">
      <div className="three_containers">
        <div className="chips-container left">
          <Chip text="Project Based" color="#dedede" delay={0.1} />
          <Chip text="Monthly Retainer" color="#F7DCB9" delay={0.2} />
          <Chip text="Hybrid Plan" color="#cfcef0" delay={0.3} />
        </div>
        <div className="plans-effect-container"></div>
        <div className="chips-container right">
          <Chip text="Flexible" color="#dedede" delay={0.1} />
          <Chip text="Value-Driven" color="#ade6aa" delay={0.2} />
          <Chip text="Transparent" color="#f2de9d" delay={0.3} />
        </div>
      </div>
    </div>
  );
};

export default PlansEffect;
