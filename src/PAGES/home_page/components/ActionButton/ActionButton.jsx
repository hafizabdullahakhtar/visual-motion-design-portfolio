import { Link } from "react-router-dom";
import "./ActionButton.css";

const ActionButton = ({
  text = "action",
  isPrimary = true,
  route = "/book-a-call",
  buttonColor = "#000000",
}) => {
  return (
    <Link
      to={route}
      className={`is_action_button ${isPrimary ? "primary" : "secondary"}`}
      style={{ backgroundColor: buttonColor }}
    >
      <div className="text">{text}</div>
    </Link>
  );
};

export default ActionButton;
