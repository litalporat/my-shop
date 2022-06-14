import React, { useState, useSyncExternalStore } from "react";
import styled from "styled-components";
import { ArrowBtn, IconBtn } from "../Buttons";
import Sizes from "../NewComp/Sizes";
import "./Popup.css";
import BackGround from "../../images/background.png";

const Body = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const PhotoDiv = styled.div`
  display: flex;
  height: 100%;
  border-radius: 10px;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  flex: 6;
  background-image: url(${BackGround});
`;
const Text = styled.p`
  padding: 10px;
`;
const Details = styled.div`
  display: flex;
  height: 100%;
  padding: 10px;
  flex: 6;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const BtnsList = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
  padding-top: 10px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Popup = (props) => {
  const [viewPhoto, setViewPhoto] = useState(
    props.product.images.display[0]
  );

  const handleClickPhoto = (e) => {
    setViewPhoto(e.target.src);
  };

  return (
    <Body>
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
      <Details>
        <label htmlFor=""> Descriptons:</label>
        <p className="text text-small">{props.product.description}</p>
        <label htmlFor=""> Price:</label>
        <p className="text">{"₪" + props.product.price}</p>
        <label htmlFor=""> Details:</label>
        <p className="text text-small">
          {Object.keys(props.product.metadata).map((elem) => (
            <p>
              {elem} : {props.product.metadata[elem]}
            </p>
          ))}
        </p>
        <Sizes stock={props.product.stock} />
        <ArrowBtn content={"add to cart"} />
      </Details>
      <BtnsList>
        <IconBtn>
          <i className="fas fa-heart"></i>
        </IconBtn>
        <IconBtn>
          <i className="fa-solid fa-up-right-from-square"></i>
        </IconBtn>
      </BtnsList>
    </Body>
  );
};

export default Popup;
