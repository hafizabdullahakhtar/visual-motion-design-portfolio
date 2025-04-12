import React from "react";
import ExpandableCard from "../components/ExpandableCard";

function ExplainerProcess() {
  return (
    <ExpandableCard
      header="Explainer Video Process"
      custombackgroundColor="#f7f9fa"
    >
      {/* Step 1 */}
      <div className="step">
        <div className="step_heading">Initial Consultation</div>
        <div className="step_description">
          I start with a detailed consultation to understand your objectives,
          target audience, and key messages. 🎯 This helps me align the video’s
          goals with your vision and ensures we’re on the same page from the
          start. 🤝
        </div>
      </div>

      {/* Step 2 */}
      <div className="step">
        <div className="step_heading">Scriptwriting</div>
        <div className="step_description">
          A great script is just the beginning! 📝 While your script is
          essential, it needs to seamlessly connect with the visuals to truly
          engage your audience. I don’t just write and refine your script; I
          ensure it works hand-in-hand with my animations to create a cohesive
          and compelling story. 🎬
        </div>
      </div>

      {/* Step 3 */}
      <div className="step">
        <div className="step_heading">Storyboarding</div>
        <div className="step_description">
          Visualize the flow of the video with a storyboard. I’ll outline each
          scene and transition to map out how the script will come to life
          visually. 📊✏️
        </div>
      </div>

      {/* Step 4 */}
      <div className="step">
        <div className="step_heading">Voiceover Recording</div>
        <div className="step_description">
          Professional voiceover recording to match the tone and style of your
          video. 🎙️ I ensure the voiceover enhances the animation and aligns
          with your brand. If you prefer, you're absolutely welcome to provide
          your own voiceover as well—just let me know! 🎧
        </div>
      </div>

      {/* Step 5 */}
      <div className="step">
        <div className="step_heading">Design & Animation</div>
        <div className="step_description">
          This is where the magic happens! ✨ In this deep work phase, I bring
          your storyboard to life through meticulous design and animation. 🖌️🎨
          My goal is to craft engaging visuals that not only capture attention
          but also vividly illustrate your message.
        </div>
      </div>

      {/* Step 6 */}
      <div className="step">
        <div className="step_heading">Review & Revisions</div>
        <div className="step_description">
          I'll review the draft video with you, gather feedback, and make
          necessary revisions to ensure it meets your expectations and
          effectively communicates your message. 🧐
        </div>
      </div>

      {/* Step 7 */}
      <div className="step">
        <div className="step_heading">Final Delivery</div>
        <div className="step_description">
          Delivering the final video in the required format and resolution. 📦
          I'll provide you with all the assets and ensure everything is ready
          for your launch. 🚀
        </div>
      </div>

      {/* Handoff */}
      <div className="step">
        <div className="step_heading">Handoff</div>
        <div className="step_description">
          I’ll wrap up with a smooth handoff, delivering all the final video
          assets and any additional materials you might need. 📝 This ensures
          you have everything ready to go, whether you’re using the video for
          marketing, presentations, or other purposes. If you have any final
          tweaks or additional requests, I’m here to make sure everything is
          perfect! 👌
        </div>
      </div>

      {/* Handshake */}
      <div className="step">
        <div className="step_heading">Handshake</div>
        <div className="step_description">
          Congratulations on your fantastic new explainer video! 🎉 I’ll guide
          you through how to get the most out of your new asset and ensure
          you’re fully equipped to use it effectively. This isn’t just a
          goodbye—it’s the beginning of a lasting partnership. 🤝 I’m here to
          support you as you showcase your message to the world. 🌍
        </div>
      </div>
    </ExpandableCard>
  );
}

export default ExplainerProcess;
