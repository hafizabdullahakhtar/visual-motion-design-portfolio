// HomePage.js
import React from "react";
import HeroDivs from "./components/HeroDivs/HeroDivs";
import "./HomePage.css";
import ActionButton from "./components/ActionButton/ActionButton";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="hero">
        <div className="home_heading">
          Your Partner in Creating
          <br />
          <span> Unforgettable Brand Experiences</span>
        </div>
        <HeroDivs />
        <div className="action_area">
          <ActionButton
            text="Book a Call"
            isPrimary={true}
            route="book-a-call"
          />
        </div>
        <div className="disclaimer">
          *Disclaimer: I design for your users,
          <br /> not just for you.
        </div>
      </div>
    </div>
    
  );
};

export default HomePage;
