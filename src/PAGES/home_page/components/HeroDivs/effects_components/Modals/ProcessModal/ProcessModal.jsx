import React from "react";

import Modal from "../Modal";
import ExpandableCard from "../ServicesModal/components/ExpandableCard";

import "./ProcessModal.css";
// import StepDescription from "./components/StepDescription";
// import dataAnimatedExplainer from "./dataAnimatedExplainer";
import Divider from "./components/Divider";

const ProcessModal = ({ onClose }) => {
  return (
    <Modal
      title="Process"
      content="At the heart of my approach is the belief that every project has its own story. I take time to understand your journey — where you’ve been, where you’re headed, and what matters to you right now. Through meaningful conversations and thoughtful research, I uncover the core of what you truly need, so the strategy feels tailor-made — because it is."
      listItems={[
        "Personalized Approach to Every Project",
        "Flexible Process, Aligned with You",
        "Open, Collaborative Refinement",
      ]}
      onClose={onClose}
    >
      <div>My 3-step formula</div>

      <Divider marginBlock="1rem" width="100%" />

      <ExpandableCard
        header="01 Guided Input"
        isExpanded={true}
        description="Your vision is my blueprint!"
      >
        <div className="step">
          <div className="step_heading">Guided Input</div>
          <div className="step_description">
            I like to start with a good conversation — digging into your goals,
            ideas, and what makes your brand unique. My input process is
            designed to make sure your vision comes through clearly, without
            losing what makes it you. Every project brings a new challenge, and
            I enjoy the creative freedom that comes with it. That’s how I shape
            an approach that fits not just the project — but you.
          </div>
        </div>
      </ExpandableCard>

      <ExpandableCard
        header="02 Project Pulse"
        description="Feel the heartbeat of your project!"
      >
        <div className="step">
          <div className="step_heading">Project Pulse</div>
          <div className="step_description">
            Next, I align closely with your vision in what I like to call the
            Project Pulse phase. This is where ideas start to breathe — shaping
            into bold, thoughtful concepts that reflect your brand’s rhythm. I
            know every project has its own tempo, so I adapt my approach to fit
            yours, making sure the energy stays authentic and the story hits
            just right.
          </div>
        </div>
      </ExpandableCard>

      <ExpandableCard
        header="03 Iteration"
        description="Refine, enhance, and elevate!"
      >
        <div className="step">
          <div className="step_heading">Iteration</div>
          <div className="step_description">
            The Iteration phase is where the real magic happens. I work closely
            with you to fine-tune every detail, making sure everything feels
            just right. Your feedback isn’t just welcome — it’s essential. This
            back-and-forth helps me elevate the work so it doesn’t just meet
            your expectations, it leaves a lasting impression.
          </div>
        </div>
      </ExpandableCard>
    </Modal>
  );
};

export default ProcessModal;
