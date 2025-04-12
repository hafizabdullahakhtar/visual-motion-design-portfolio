import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./ServicesEffect.css";

import branding from "../../../../../../../ASSETS/IMAGES/service_effect_cards/branding.png";
import motiondesign from "../../../../../../../ASSETS/IMAGES/service_effect_cards/motiongraphics.png";
// import uiux from "../../../../../../../ASSETS/IMAGES/service_effect_cards/uiux.png";

const ServiceEffectCard = ({ title, imageSrc, delay }) => {
  return (
    <motion.div
      className="service_effect_card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: "spring", delay }}
    >
      <div className="card_header">
        <div className="service_card_text">{title}</div>
        <div className="service_card_image">
          <img src={imageSrc} alt={title} />
        </div>
      </div>
    </motion.div>
  );
};

const ServicesEffect = () => {
  return (
    <AnimatePresence>
      <div className="services-effect">
        <div className="cards-container">
          <ServiceEffectCard
            title="Visual Identity & Brand Design"
            imageSrc={branding}
            delay={0.1}
          />
          <ServiceEffectCard
            title="Motion Design"
            imageSrc={motiondesign}
            delay={0.2}
          />
          {/* <ServiceEffectCard
            title="Social Media Creatives"
            imageSrc={uiux}
            delay={0.3}
          /> */}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ServicesEffect;
