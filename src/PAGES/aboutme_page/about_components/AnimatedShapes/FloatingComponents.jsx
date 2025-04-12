import { useState } from "react";
import { motion } from "framer-motion";
import avatar1 from "../../pic3.jpg";
import avatar2 from "../../pic3.jpg";
import avatar3 from "../../pic3.jpg";
import avatar4 from "../../pic3.jpg";

import "./FloatingComponents.css";

export const ExpandMode_01_CreativeCurious = () => {
  const [isCreative, setIsCreative] = useState(true);

  const toggleState = () => {
    setIsCreative(!isCreative);
  };

  return (
    <div className="exp_01_toggle-container" onClick={toggleState}>
      {/* Animated text with Framer Motion */}
      <motion.div
        className={`exp_01_toggle-text ${isCreative ? "left" : "right"}`}
        animate={{
          opacity: 1, // Keep opacity to 1 for both texts
          x: isCreative ? -10 : 10, // Slight shift of text during transition
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {isCreative ? "Creative" : "Curious"}
      </motion.div>

      {/* Animated circle using Framer Motion */}
      <motion.div
        className="exp_01_toggle-circle"
        animate={{
          x: isCreative ? 0 : 90, // Transition left to right (based on state)
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
};

// export const ExpandMode_02_iPhoneUI = () => {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const phoneNumber = "+923095604091";
//     const email = "mailsendkrdo@gmail.com";

//     const handleCopyEmail = () => {
//       navigator.clipboard.writeText(email);
//       alert("Email copied to clipboard!");
//     };

//     return (
//       <motion.div
//         className="exp02_iphone-ui-container"
//         onClick={() => setIsExpanded(!isExpanded)}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.3 }}
//       >
//         <motion.div
//           className={`exp02_phone-ui-header ${isExpanded ? "expanded" : "collapsed"}`}
//           animate={{
//             height: isExpanded ? "200px" : "60px",
//             transition: { type: "spring", stiffness: 300, damping: 25 },
//           }}
//         >
//           {/* Phone Icon and Number */}
//           <div className="exp02_phone-icon">
//             P
//           </div>
//           <div className="exp02_phone-number">
//             {isExpanded ? phoneNumber : "Incoming Call..."}
//           </div>
//           <motion.div
//             className="exp02_copy-email-icon"
//             onClick={handleCopyEmail}
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             C
//           </motion.div>
//         </motion.div>

//         {isExpanded && (
//           <motion.div
//             className="exp02_action-buttons"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.3 }}
//           >
//             <button className="exp02_accept-button">Accept</button>
//             <button className="exp02_reject-button">Reject</button>
//           </motion.div>
//         )}
//       </motion.div>
//     );
//   };

export const ExpandMode_02_MyAvatars = () => {
  return (
    <div className="exp02_avatar-container">
      <div className="exp02_avatar-stack">
        <img
          className="exp02_avatar-img"
          src={avatar1}
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <img
          className="exp02_avatar-img"
          src={avatar2}
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <img
          className="exp02_avatar-img"
          src={avatar3}
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <img
          className="exp02_avatar-img"
          src={avatar4}
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="exp02_avatar-text">
        Trusted by <strong>60K+</strong> developers.
      </p>
    </div>
  );
};
