import React, { useState, useSyncExternalStore } from "react";
import styled from "styled-components";
import "./Popup.css";

const PhotoDiv = styled.div`
    height: 50vh;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`
const Text =styled.p`
  padding: 10px;
`


const Popup = (props) => {
  const [viewPhoto, setViewPhoto] = useState(props.product.images.display[0]);

  const handleClickPhoto = (e) => {
    setViewPhoto(e.target.src);
  };

  return (
      <>
        <PhotoDiv>
          <div className={"icon " + props.product.type}></div>
          <p className="text">{props.product.displayName}</p>
          <p className="text text-small">{props.product.description}</p>
          <p className="text">{"₪" + props.product.price}</p>
          <p className="text text-small">
            {Object.keys(props.product.metadata).map((elem) => (
              <p>
                {elem}: {props.product.metadata[elem]}
              </p>
            ))}
          </p>
        </PhotoDiv>
        <PhotoDiv>
          <div className="main-photo">
            <img src={viewPhoto} />
          </div>
          <div className="choose-photos">
            {props.product.images.display.map((img) => (
              <img
                src={img}
                className={img === viewPhoto ? "chosen-photo" : ""}
                onClick={handleClickPhoto}
              />
            ))}
          </div>
        </PhotoDiv>
      </>
  );
};

export default Popup;
