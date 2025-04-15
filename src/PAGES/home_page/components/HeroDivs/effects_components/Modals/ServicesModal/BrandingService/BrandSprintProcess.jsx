import React from "react";
import ExpandableCard from "../components/ExpandableCard";

function BrandSprintProcess() {
  return (
    <ExpandableCard
      header="10 Day Sprint Process"
      custombackgroundColor="#c1d4de"
    >
      {/* one */}
      <div className="step">
        <div className="step_heading">day 0 strategy</div>
        <div className="step_description">
          Welcome to the start of your brand sprint! 🚀 In just three hours,
          I'll help you turn your ideas into a clear, actionable plan. We’ll
          dive into your mission, goals, and unique approach. Together, we’ll
          clarify your values, understand your audience, and analyze your
          competition. This focused, interactive session will set the stage for
          a strong brand foundation. 💡
        </div>
      </div>

      {/* two */}
      <div className="step">
        <div className="step_heading">day 1-3 research</div>
        <div className="step_description">
          I’ll explore your brand in-depth over the next three days. 🧐 This
          phase includes examining your point of view, tone of voice, and
          crafting a compelling brand story. I’ll share my insights with you and
          ensure alignment on the strategy before moving forward. Consider this
          a strategic roadmap for your brand’s success. 🛤️
        </div>
      </div>

      {/* three */}
      <div className="step">
        <div className="step_heading">Days 4-7 design</div>
        <div className="step_description">
          Time to bring your brand to life with a clear creative direction! 🎨
          I'll focus on crafting standout elements like eye-catching logos,
          distinctive typography, vibrant color palettes, and compelling visual
          assets. ✨
        </div>
        <div className="step_description">
          I'll ensure your brand looks great across all platforms and mediums.
          📱 During this phase, I'll enter a "deep work" mode—think of it as my
          creative hibernation. 🧘‍♂️ This means no calls or emails, just focused
          work to create your brand magic while you enjoy some quiet time. 🌙
        </div>
        <div className="step_description">
          Finally, I'll put together a brand book that's as thorough as a
          textbook. 📚 Every design decision will be carefully documented and
          highlighted. I'll also prepare a presentation that brings your brand's
          story to life. 🎥
        </div>
      </div>

      {/* four */}
      <div className="step">
        <div className="step_heading">Day 10 presentation</div>
        <div className="step_description">
          Get ready for the reveal! 🎉 I’ll showcase your brand’s new visual
          identity in a virtual meeting. 💻 I’ll walk you through the brand book
          and explain my creative process, celebrating the new look and feel of
          your brand. 🌟
        </div>
      </div>

      {/* five */}
      <div className="step">
        <div className="step_heading">Handoff</div>
        <div className="step_description">
          Your brand is ready to shine! ✨ I’ll finalize all details and ensure
          your team can confidently use your new assets. It’s like graduation
          day for your brand 🎓—ready to make an impact! 🌍
        </div>
      </div>

      {/* six */}
      <div className="step">
        <div className="step_heading">Handshake</div>
        <div className="step_description">
          Congratulations on your new brand! 🎉 I’ll guide you through every
          aspect of your brand identity, ensuring you’re set for success. This
          isn’t just a farewell—it’s the start of a lasting partnership. 🤝
        </div>
      </div>

      {/* seven */}
      <div className="step">
        <div className="step_heading">Ongoing</div>
        <div className="step_description">
          This isn’t goodbye—it’s “see you later”! 👋 I’m here to support your
          brand as it grows. From regular check-ins and workshops to adapting to
          trends and overcoming challenges, I’ll help your brand reach its full
          potential. Let’s keep the momentum going! 🎈🌟
        </div>
      </div>
    </ExpandableCard>
  );
}

export default BrandSprintProcess;
