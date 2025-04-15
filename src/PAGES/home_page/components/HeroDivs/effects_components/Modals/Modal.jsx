import React from "react";
import "./Modal.css";
import CloseIcon from "../../../../../../ASSETS/ICONS/CloseIcon";
import ActionButton from "../../../ActionButton/ActionButton";
import Divider from "./ProcessModal/components/Divider";

const Modal = ({ title, content, listItems, children, onClose }) => {
  return (
    <div className="modal-background">
      <div className="modal-content-wrapper">
        <div className="modal-content">
          {title && <div className="heading">{title}</div>}
          {content && <div className="modal_detail">{content}</div>}

          {listItems && (
            <div className="modal_list">
              <ul>
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal_service_cards">{children}</div>

          <div className="close_button" onClick={onClose}>
            Close
            <CloseIcon />
          </div>
          <Divider />

          <div
            className="text"
            style={{
              fontStyle: "italic",
              fontWeight: "100",
              textAlign: "center",
            }}
          >
            Looking for expert advice? Book a call today!
          </div>

          <div
            className="action_area"
            style={{ margin: "2rem", display: "grid", placeItems: "center" }}
          >
            <ActionButton text="📞 Book Meeting" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
