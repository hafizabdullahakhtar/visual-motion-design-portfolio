import React from "react";

const EmailButton = () => {
  // Replace with your email address and desired subject/body
  const email = "mailsendkrdo@gmail.com"; // Replace with your email
  const subject = "Inquiry about your services"; // Optional
  const body = "Hello, I would like to know more about your services."; // Optional

  // Create mailto URL
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={mailtoUrl}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#007BFF", // Button color
        color: "#fff",
        borderRadius: "5px",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Email_icon.svg" // Email icon URL
        alt="Email"
        style={{ width: "24px", height: "24px", marginRight: "8px" }}
      />
      Email Us
    </a>
  );
};

export default EmailButton;
