import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "./Footer.css";

import HomeIcon from "../../ASSETS/ICONS/HomeIcon";
import ProjectsIcon from "../../ASSETS/ICONS/ProjectsIcon";
import AboutMeIcon from "../../ASSETS/ICONS/AboutMeIcon";
import EmailIcon from "../../ASSETS/ICONS/EmailIcon";
import BehanceIcon from "../../ASSETS/ICONS/BehanceIcon";
import DribbbleIcon from "../../ASSETS/ICONS/DribbbleIcon";
import BrandingIcon from "../../ASSETS/ICONS/BrandingIcon";

const Footer = () => {
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState("home");
  const [tooltip, setTooltip] = useState({ text: "", left: "0px", top: "0px" });
  const controls = useAnimation();
  const tooltipRef = useRef(null);

  useEffect(() => {
    // Determine the selected icon based on the current location
    const path = location.pathname;
    switch (path) {
      case "/projects":
      case "/motion-projects":
        setSelectedIcon("projects");
        break;
      case "/branding-projects":
        setSelectedIcon("branding-projects");
        break;
      case "/about-me":
        setSelectedIcon("aboutme");
        break;
      default:
        setSelectedIcon("home");
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    if (tooltipRef.current) {
      const tooltipWidth = tooltipRef.current.offsetWidth;

      setTooltip((prev) => ({
        ...prev,
        left: `${parseFloat(prev.left) - tooltipWidth / 2}px`,
      }));
    }
  }, [tooltip.text]);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleMouseEnter = (event, tooltipText) => {
    const iconRect = event.currentTarget.getBoundingClientRect();

    setTooltip({
      text: tooltipText,
      left: `${iconRect.left + iconRect.width / 2}px`,
      top: `${iconRect.top - 10}px`, // Adjusted with 10px spacing
    });

    controls.start({
      opacity: 1,
      y: [-40, -45],
      scale: [0.95, 1],
      transition: {
        y: { type: "spring", stiffness: 300, damping: 10 },
        scale: { type: "spring", stiffness: 300, damping: 10 },
        opacity: { duration: 0.3 },
      },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      opacity: 0,
      y: -40,
      scale: 0.95,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 20 },
        scale: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.3 },
      },
    });
    setTooltip({ text: "", left: "0px", top: "0px" });
  };

  const [isCollapsedOpen, setIsCollapsedOpen] = useState(false);

  const renderIcons = () => (
    <>
      <Link
        to="/"
        className={`icon home ${selectedIcon === "home" ? "selected" : ""}`}
        onClick={() => handleIconClick("home")}
        onMouseEnter={(e) => handleMouseEnter(e, "Home")}
        onMouseLeave={handleMouseLeave}
      >
        <HomeIcon />
      </Link>

      <Link
        to="/projects"
        className={`icon projects ${
          selectedIcon === "projects" ? "selected" : ""
        }`}
        onClick={() => handleIconClick("projects")}
        onMouseEnter={(e) => handleMouseEnter(e, "Projects")}
        onMouseLeave={handleMouseLeave}
      >
        <ProjectsIcon />
      </Link>

      <Link
        to="/branding-projects"
        className={`icon branding-projects ${
          selectedIcon === "branding-projects" ? "selected" : ""
        }`}
        onClick={() => handleIconClick("branding-projects")}
        onMouseEnter={(e) => handleMouseEnter(e, "Branding")}
        onMouseLeave={handleMouseLeave}
      >
        <BrandingIcon />
      </Link>

      <Link
        to="/about-me"
        className={`icon aboutme ${
          selectedIcon === "aboutme" ? "selected" : ""
        }`}
        onClick={() => handleIconClick("aboutme")}
        onMouseEnter={(e) => handleMouseEnter(e, "About Me")}
        onMouseLeave={handleMouseLeave}
      >
        <AboutMeIcon />
      </Link>

      <a
        href="mailto:mailsendkrdo@gmail.com"
        className="icon email"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => handleMouseEnter(e, "Email")}
        onMouseLeave={handleMouseLeave}
      >
        <EmailIcon />
      </a>

      <a
        href="https://www.behance.net/hafizabdullahakhtar"
        className="icon behance"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => handleMouseEnter(e, "Behance")}
        onMouseLeave={handleMouseLeave}
      >
        <BehanceIcon />
      </a>

      <a
        href="https://dribbble.com/abdullahakhtar"
        className="icon dribbble"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => handleMouseEnter(e, "Dribbble")}
        onMouseLeave={handleMouseLeave}
      >
        <DribbbleIcon />
      </a>
    </>
  );

  return (
    <div className="footer-container">
      <motion.div
        className="tooltip"
        style={{
          left: tooltip.left,
          top: tooltip.top,
        }}
        animate={controls}
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        exit={{ opacity: 0, y: -40, scale: 0.95 }}
        ref={tooltipRef} // Attach the ref to the tooltip
      >
        {tooltip.text}
      </motion.div>
      <div className="toggle-icon-container">
        <div
          className="footer-toggle"
          onClick={() => setIsCollapsedOpen((prev) => !prev)}
        >
          <HomeIcon />
        </div>
      </div>

      {/* Vertical icon menu for collapsed state */}
      <div className={`footer-menu-small ${isCollapsedOpen ? "open" : ""}`}>
        {renderIcons()}
      </div>

      <div className="footer-menu">
        <div className="icon-container">
          <Link
            to="/"
            className={`icon home ${selectedIcon === "home" ? "selected" : ""}`}
            onClick={() => handleIconClick("home")}
            onMouseEnter={(e) => handleMouseEnter(e, "Home")}
            onMouseLeave={handleMouseLeave}
          >
            <HomeIcon />
          </Link>

          <Link
            to="/projects"
            className={`icon projects ${
              selectedIcon === "projects" ? "selected" : ""
            }`}
            onClick={() => handleIconClick("projects")}
            onMouseEnter={(e) => handleMouseEnter(e, "Projects")}
            onMouseLeave={handleMouseLeave}
          >
            <ProjectsIcon />
          </Link>

          <Link
            to="/branding-projects"
            className={`icon branding-projects ${
              selectedIcon === "branding-projects" ? "selected" : ""
            }`}
            onClick={() => handleIconClick("branding")}
            onMouseEnter={(e) => handleMouseEnter(e, "Branding")}
            onMouseLeave={handleMouseLeave}
          >
            <BrandingIcon />
          </Link>
          <Link
            to="/about-me"
            className={`icon aboutme ${
              selectedIcon === "aboutme" ? "selected" : ""
            }`}
            onClick={() => handleIconClick("aboutme")}
            onMouseEnter={(e) => handleMouseEnter(e, "About Me")}
            onMouseLeave={handleMouseLeave}
          >
            <AboutMeIcon />
          </Link>
          {/* <div className="divider"></div> */}
          <a
            href="mailto:mailsendkrdo@gmail.com"
            className="icon email"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => handleMouseEnter(e, "Email")}
            onMouseLeave={handleMouseLeave}
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.behance.net/hafizabdullahakhtar"
            className="icon behance"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => handleMouseEnter(e, "Behance")}
            onMouseLeave={handleMouseLeave}
          >
            <BehanceIcon />
          </a>
          <a
            href="https://dribbble.com/abdullahakhtar"
            className="icon dribbble"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => handleMouseEnter(e, "Dribbble")}
            onMouseLeave={handleMouseLeave}
          >
            <DribbbleIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
