import React, { useEffect, useState } from "react";

import Modal from "../Modal";
import "./AchievementsModal.css";
import ExpandHeader from "../ServicesModal/components/ExpandHeader";

import pandadocClient from "../../../../../../../ASSETS/IMAGES/clients/pandadocClient.jpeg";
import homieClient from "../../../../../../../ASSETS/IMAGES/clients/homieClient.jpg";
import underClient from "../../../../../../../ASSETS/IMAGES/clients/underClient.jpeg";
import soliClient from "../../../../../../../ASSETS/IMAGES/clients/soliClient.jpg";
import pointfiveClient from "../../../../../../../ASSETS/IMAGES/clients/pointfiveClient.jpeg";
import fuegoClient from "../../../../../../../ASSETS/IMAGES/clients/fuegoClient.jpeg";

// Feedback data array
const feedbackData = [
  {
    image: homieClient,
    header: "Client: Emily Roberts",
    subHeader: "Creative Director at World United Studios Limited",
    moreheadertext: "Project: Branding and Lottie Animation for Homie",
    feedback: `Abdullah was instrumental in bringing 'Homie,' our AI project manager, to life. His branding work gave Homie a unique identity—striking the perfect balance between cutting-edge technology and a friendly, approachable persona. The logo and visual elements he designed were clean, modern, and instantly recognizable. But the real magic happened with the Lottie animations. He created fluid, dynamic animations that added a sense of interactivity and personality to Homie, making it not just a tool, but a seamless part of our users’ workflow. Abdullah’s creativity and attention to detail were key in setting our product apart in the crowded AI space.`,
  },
  {
    image: underClient,
    header: "Client: Eden Vidal",
    subHeader: "Collaboration with Spacetop (sightful)",
    moreheadertext: "Project: Branding and Lottie Animation",
    feedback: `Abdullah’s design and motion work for Spacetop was nothing short of extraordinary. We wanted to convey the futuristic and immersive nature of our AR laptop, and Abdullah delivered with stunning visuals that captured the innovation behind our product. The motion graphics he created blended seamlessly with our user interface, elevating the entire experience and making it feel fluid and intuitive. His ability to translate complex concepts into engaging, dynamic designs helped us communicate the core value of Spacetop to our audience in a visually compelling way. Abdullah’s work is a testament to his forward-thinking approach and mastery of motion design.`,
  },
  {
    image: soliClient,
    header: "Client: Soli",
    subHeader: "Collaboration with Under Studio",
    moreheadertext: "Project: Branding & Motion",
    feedback: `We are beyond grateful for Abdullah's incredible contribution to Soli. He truly captured the essence of what we stand for—solidarity, safety, and sisterhood for women worldwide. His attention to detail and ability to create designs that speak to the heart of our mission was remarkable. The motion graphics he designed brought warmth and life to our message, helping us connect deeply with our community. Abdullah’s dedication and passion were evident in every step of the process, and his work has made a lasting impact on how women experience Soli. I highly recommend Abdullah to anyone looking for a designer who not only delivers stunning visuals but also truly understands and cares about the story being told.`,
  },
  {
    image: pointfiveClient,
    header: "Client: Yael Elad",
    subHeader: "CEO at Pointfive",
    moreheadertext: "Project: Branding, Motion Design, and Social Media Assets",
    feedback: `Abdullah did an outstanding job helping us define and elevate PointFive’s brand. His branding work gave our cloud efficiency platform a modern, clean, and professional identity that resonates perfectly with our tech-savvy audience. The motion design he delivered was dynamic and engaging, perfectly complementing our messaging around cloud visibility and remediation. Additionally, the social media assets he created for our campaigns were spot-on—visually compelling and on-brand, driving increased engagement across all platforms. Abdullah’s creative input and attention to detail were invaluable, and his work truly helped us stand out in a competitive market. I highly recommend him to anyone looking for a designer who can bring innovation and consistency to their brand.`,
  },
  {
    image: fuegoClient,
    header: "Client: Kevin Weschle",
    subHeader: "Marketing Director at Fuego",
    moreheadertext: "Project: Facebook Ads Campaign Optimization",
    feedback: `I can't thank Abdullah enough for his exceptional work on our Facebook ads campaign for Fuego! He took our initial concepts and transformed them into eye-catching, dynamic ads that truly resonate with our audience of dancers and sneaker enthusiasts. His keen eye for detail and understanding of our brand's energetic spirit made a significant difference in our campaign's performance. Since implementing his strategies and optimizations, we've seen a noticeable boost in engagement and conversions! Abdullah is a true professional and an asset to any marketing team. I wholeheartedly recommend him to anyone looking to elevate their advertising game!`,
  },
  {
    image: pandadocClient,
    header: "Client: Angie T.",
    subHeader: "Marketing Manager at PandaDoc",
    moreheadertext: "Project: Series of Animated Educational Explainer Videos",
    feedback: `I want to extend my heartfelt gratitude to Abdullah for the fantastic animated educational explainer videos he created for PandaDoc. His ability to distill complex concepts into engaging and easy-to-understand animations was impressive. Each video not only captured the essence of our product but also resonated with our audience, making our marketing efforts much more effective. Abdullah's creativity, attention to detail, and commitment to our vision were evident throughout the project. Our team has received great feedback, and I can confidently say that his work has elevated our content strategy significantly. I highly recommend Abdullah to any company looking for a talented animator and storyteller!`,
  },
];

// Function to shuffle the array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap
  }
  return array;
};

const AchievementsModal = ({ onClose }) => {
  const [shuffledFeedback, setShuffledFeedback] = useState([]);

  useEffect(() => {
    // Shuffle the feedback data and set it to state
    setShuffledFeedback(shuffleArray([...feedbackData]));
  }, []);

  return (
    <>
      <Modal
        title="Achievements"
        content="Our journey has been marked by numerous milestones that reflect our commitment to excellence and innovation. From successful project launches to impactful collaborations, each achievement showcases our ability to deliver results that resonate with our clients' goals. We take pride in our track record and invite you to explore the highlights that demonstrate our dedication to making a difference."
        onClose={onClose}
      >
        {shuffledFeedback.map((item, index) => (
          <div style={{ marginBottom: "1rem" }}>
            <ExpandHeader
              key={index}
              header={item.header}
              subHeader={item.subHeader}
              moreheadertext={item.moreheadertext}
              imgSrc={item.image}
              backgroundColor="var(--grey-color)"
              isExpanded="true"
            >
              {item.feedback}
            </ExpandHeader>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default AchievementsModal;
