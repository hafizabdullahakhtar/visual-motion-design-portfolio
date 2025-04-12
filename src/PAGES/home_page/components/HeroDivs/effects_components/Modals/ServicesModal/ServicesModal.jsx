import React from "react";

import branding from "./branding.gif";
import sprint from "./sprint.gif";
import Modal from "../Modal";
import ExpandableCard from "./components/ExpandableCard";
import BrandSprintProcess from "./BrandingService/BrandSprintProcess";
import ExpandHeader from "./components/ExpandHeader";
import ExplainerProcess from "./MotionService/ExplanierProcess";
import BrandSprintGuide from "./BrandingService/BrandSprintGuide";

const ServicesModal = ({ onClose }) => {
  return (
    <Modal
      title="Expertise"
      content="I partner with brands to boost their market presence through expert Branding and Motion Design solutions. From compelling brand identities to dynamic motion design, I offer my expertise to elevate their project."
      listItems={[
        "No template work",
        "Deep-dive into your product and ideas",
        "Sustainable and Ethical Design Practices",
        "You in mind, where user-needs drive every decision",
      ]}
      onClose={onClose}
    >
      <ExpandableCard
        isExpanded={true}
        header="Visual Identity and Branding"
        description="From crafting a unique brand identity to refining an existing one, I've helped brands stand out, whether it's a startup finding its voice or an established company redefining its image and refreshing it's visual identity."
      >
        <ExpandHeader
          header="Brand Sprint 🔥"
          subHeader="Strategic branding that develops a holistic brand identity beyond just creating good-looking visuals."
          imgSrc={sprint}
        >
          <div className="deliverables">
            In just 10 days, we develop a clear vision, identify key values, and
            create a fresh brand identity. Brand sprints are not just about
            creating visually appealing designs; they focus on building a
            cohesive brand identity that aligns with business goals,
            communicates effectively with the target audience, and drives
            long-term growth.
          </div>
          <BrandSprintProcess />
          <BrandSprintGuide />
        </ExpandHeader>

        {/* <ExpandHeader
          header="Rapid Brand Kit 🚀"
          subHeader="Core elements required to establish your brand identity."
          text="This is a text"
          imgSrc={branding}
        >
          <div className="deliverables">
            Perfect for startups or businesses looking for a quick refresh, this
            service focuses on delivering essential brand assets, including logo
            design, color palette, typography, and basic brand guidelines. While
            streamlined for speed, the Rapid Brand Kit ensures that your brand
            identity is impactful, cohesive, and ready to connect with your
            audience. In just one week, you'll have a professional brand kit
            tailored to your business needs and goals, positioning you for
            immediate market success.
          </div>
          <RapidBrandKit />
        </ExpandHeader> */}
      </ExpandableCard>
      <ExpandableCard
        header="Motion Design and Animation"
        description="Through dynamic motion design and captivating animations, we bring ideas to life. Whether you're looking to tell a story, enhance user interaction, or elevate your brand's visual experience, our tailored animations and fluid designs engage audiences and create lasting impressions."
      >
        <ExpandHeader
          header="Brand & Product Explainers"
          subHeader="Transform your brand, service, or product into engaging, easy-to-understand visuals."
          imgSrc={sprint}
        >
          <div className="deliverables">
            Brand & Product Explainers are crafted to turn your offerings into
            compelling, easy-to-digest visuals that resonate with your audience.
            I work closely with you to shape a script that nails your message
            and create animations that bring your story to life. Whether you're
            introducing a new product, refreshing your brand, or simplifying
            your service, I’m here to make sure your message isn’t just heard.
            It’s remembered.
          </div>
          <ExplainerProcess />
        </ExpandHeader>

        <ExpandHeader
          header="Video Marketing Content"
          subHeader="Boost your brand visibility with impactful, platform-ready marketing videos."
          imgSrc={branding}
        >
          <div className="deliverables">
            Video Marketing Content is all about telling your brand’s story
            through powerful visuals that captivate and convert. Whether it’s
            for social media, ads, websites, or presentations, I create engaging
            videos tailored to your audience and goals. From short-form content
            to full-fledged promos, I ensure every frame aligns with your brand
            and drives results. Let's make your message impossible to ignore.
            🎯📹
          </div>
          {/* <SocialMediaProcess /> */}
        </ExpandHeader>

        <ExpandHeader
          header="Interactive Animations"
          subHeader="Bring your digital experience to life with lightweight, interactive animations like Lottie, Rive, and Spline."
          imgSrc={branding}
        >
          <div className="deliverables">
            I craft Interactive Animations that add personality and
            functionality to your apps, websites, or products. Whether it's
            lightweight Lottie files, dynamic Rive interactions, or immersive 3D
            animations with Spline. These assets are designed to be smooth,
            responsive, and easy to integrate. They not only elevate user
            experience but also make your brand feel alive and engaging across
            platforms. ✨📱💻
          </div>
          {/* <LottieProcess /> */}
        </ExpandHeader>
      </ExpandableCard>
    </Modal>
  );
};

export default ServicesModal;

// <ExpandableCard header="Animated Explainer" custombackgroundColor="#ffffff">
//   {/* one */}
//   <div className="step">
//     <div className="step_heading">Discovery</div>
//     <div className="step_description">
//       We kick things off by diving deep into your project's goals and target
//       audience. This is where we get to know your brand inside out, ensuring we
//       craft a video that hits the mark. This is how it goes.
//     </div>
//     <div className="step_description">
//       Initial Consultation → Audience Research → Competitor Analysis → Message
//       Mapping → Strategy Development → Timeline & Milestones
//     </div>
//     <div className="step_description" style={{ fontWeight: "500" }}>
//       Now you got the exact timeline and milestones.
//     </div>
//   </div>
//   {/* two */}
//   <div className="step">
//     <div className="step_heading">Script/Story</div>
//     <div className="step_description">
//       Our next step is to craft a script that's more than just words—it's a
//       compelling story designed to captivate and engage.
//     </div>
//     <div className="step_description">
//       We break down your message into eight essential steps, creating a script
//       that flows naturally and resonates deeply. This is natural structure of
//       explainer that resonates with user.
//     </div>
//     <div className="step_description">
//       <StepDescription />
//     </div>
//     <div className="step_description">
//       Why It Works: This structure not only makes your message clear and
//       memorable but also ensures it resonates emotionally, leading to a more
//       impactful and persuasive explainer video.
//     </div>
//   </div>
//   {/* three */}
//   <div className="step">
//     <div className="step_heading">Storyboarding</div>
//     <div className="step_description">
//       <div className="step_discription">
//         With the script as our guide, we'll translate words into visuals through
//         detailed storyboards. This is where your video starts to come to
//         life—scene by scene, we sketch out each moment, ensuring the flow is
//         smooth and easy to grasp.
//       </div>
//       <div className="step_discription">
//         You'll get an early glimpse of how your story will unfold, allowing for
//         adjustments and enhancements before production begins.
//       </div>
//     </div>
//   </div>
//   {/* four */}
//   <div className="step">
//     <div className="step_heading">Animation</div>
//     <div className="step_description">
//       <div className="step_discription">
//         Get ready for the show! This is where your story leaps off the page and
//         into motion. With our storyboard as the blueprint, we'll craft vibrant,
//         eye-catching animations that don't just tell your story—they make it
//         unforgettable.
//       </div>
//     </div>
//   </div>

//   {/* five */}
//   <div className="step">
//     <div className="step_heading">Voiceover & Sound Design</div>
//     <div className="step_description">
//       <div className="step_discription">
//         To elevate the experience, we add a professional voiceover and dynamic
//         sound design. The voiceover brings your script to life, while sound
//         effects and music add an extra layer of engagement. This combination
//         ensures your video is not just seen but felt.
//       </div>
//     </div>
//   </div>

//   {/* six */}
//   <div className="step">
//     <div className="step_heading">Review & Revisions</div>
//     <div className="step_description">
//       <div className="step_discription">
//         Once the video is ready, we'll share it with you for review. Your
//         feedback is invaluable, and we're committed to making sure the final
//         product meets your vision. We'll refine and tweak the video based on
//         your input to ensure it's perfect.
//       </div>
//     </div>
//   </div>

//   {/* seven */}
//   <div className="step">
//     <div className="step_heading">Final Delivery</div>
//     <div className="step_description">
//       <div className="step_discription">
//         After final touches, we'll deliver your video in high quality and in the
//         format you need. Whether it's for your website, social media, or
//         presentations, you'll receive a polished, professional video that's
//         ready to make an impact.
//       </div>
//     </div>
//   </div>

//   {/* eight */}
//   <div className="step">
//     <div className="step_heading">Ongoing Support</div>
//     <div className="step_description">
//       <div className="step_discription">
//         Our commitment doesn't end with delivery. We're here to support you with
//         any additional edits or advice on how to maximize the video's impact.
//         Think of us as your go-to resource for all things video-related.
//       </div>
//     </div>
//   </div>
// </ExpandableCard>;
