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
  const [isCollapsedOpen, setIsCollapsedOpen] = useState(false);
  const tooltipRef = useRef(null);
  const controls = useAnimation();

  const footerIcons = [
    {
      key: "home",
      label: "Home",
      to: "/",
      icon: <HomeIcon />,
    },
    {
      key: "projects",
      label: "Projects",
      to: "/projects",
      icon: <ProjectsIcon />,
    },
    {
      key: "branding-projects",
      label: "Branding",
      to: "/branding-projects",
      icon: <BrandingIcon />,
    },
    {
      key: "aboutme",
      label: "About Me",
      to: "/about-me",
      icon: <AboutMeIcon />,
    },
    {
      key: "email",
      label: "Email",
      href: "mailto:mailsendkrdo@gmail.com",
      icon: <EmailIcon />,
    },
    {
      key: "behance",
      label: "Behance",
      href: "https://www.behance.net/hafizabdullahakhtar",
      icon: <BehanceIcon />,
    },
    {
      key: "dribbble",
      label: "Dribbble",
      href: "https://dribbble.com/abdullahakhtar",
      icon: <DribbbleIcon />,
    },
  ];

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/projects") || path === "/motion-projects") {
      setSelectedIcon("projects");
    } else if (path === "/branding-projects") {
      setSelectedIcon("branding-projects");
    } else if (path === "/about-me") {
      setSelectedIcon("aboutme");
    } else {
      setSelectedIcon("home");
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

  const handleMouseEnter = (event, tooltipText) => {
    const iconRect = event.currentTarget.getBoundingClientRect();
    setTooltip({
      text: tooltipText,
      left: `${iconRect.left + iconRect.width / 2}px`,
      top: `${iconRect.top - 10}px`,
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

  const renderFooterIcons = () =>
    footerIcons.map((item) =>
      item.to ? (
        <Link
          key={item.key}
          to={item.to}
          className={`icon ${item.key} ${
            selectedIcon === item.key ? "selected" : ""
          }`}
          onClick={() => setSelectedIcon(item.key)}
          onMouseEnter={(e) => handleMouseEnter(e, item.label)}
          onMouseLeave={handleMouseLeave}
        >
          {item.icon}
        </Link>
      ) : (
        <a
          key={item.key}
          href={item.href}
          className={`icon ${item.key}`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => handleMouseEnter(e, item.label)}
          onMouseLeave={handleMouseLeave}
        >
          {item.icon}
        </a>
      )
    );

  return (
    <div className="footer-container">
      <motion.div
        className="tooltip"
        style={{ left: tooltip.left, top: tooltip.top }}
        animate={controls}
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        exit={{ opacity: 0, y: -40, scale: 0.95 }}
        ref={tooltipRef}
      >
        {tooltip.text}
      </motion.div>

      {/* Collapsed Toggle */}
      <div className="toggle-icon-container">
        <div
          className="footer-toggle"
          onClick={() => setIsCollapsedOpen((prev) => !prev)}
        >
          <HomeIcon />
        </div>
      </div>

      {/* Vertical Footer (Collapsed) */}
      <div className={`footer-menu-small ${isCollapsedOpen ? "open" : ""}`}>
        {renderFooterIcons()}
      </div>

      {/* Full Footer */}
      <div className="footer-menu">
        <div className="icon-container">{renderFooterIcons()}</div>
      </div>
    </div>
  );
};

export default Footer;
