import React, { useState, useSyncExternalStore } from "react";
import "./Popup.css";

const Popup = (props) => {
  const [viewPhoto, setViewPhoto] = useState(props.content.images.display[0]);

  const handleClickPhoto = (e) => {
    setViewPhoto(e.target.src);
  };

  if (!props.content) {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}></span>
          There Is No Content
        </div>
      </div>
    );
  }

  return (
    <div
      className="popup-box"
      onClick={(e) =>
        e.target.className == "popup-box" ? props.handleClose() : ""
      }
    >
      <div className="box">
        <div className="popup-details">
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
          <div className={"icon " + props.content.type}></div>
          <p className="text">{props.content.displayName}</p>
          <p className="text text-small">{props.content.description}</p>
          <p className="text">{"₪" + props.content.price}</p>
          <p className="text text-small">
            {Object.keys(props.content.metadata).map((elem) => (
              <p>
                {elem}: {props.content.metadata[elem]}
              </p>
            ))}
          </p>
        </div>
        <div className="popup-photos">
          <div className="main-photo">
            <img src={viewPhoto} />
          </div>
          <div className="choose-photos">
            {props.content.images.display.map((img) => (
              <img
                src={img}
                className={img === viewPhoto ? "chosen-photo" : ""}
                onClick={handleClickPhoto}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
