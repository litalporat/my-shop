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

const Label = styled.label`
  color: black;
`;

const P = styled.p`
  color: black;
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
  const [viewPhoto, setViewPhoto] = useState(props.product.imgDetails[0]);
  const [chosenSize, setChosenSize] = useState();
  const [error, setError] = useState(false);

  const handleClickPhoto = (e) => {
    setViewPhoto(e.target.src);
  };

  const setSize = (size, stock) => {
    if (stock > 0) {
      console.log("setting size");
      console.log(size);
      setError(false);
      setChosenSize(size);
    } else {
      console.log("setting error");
      setError(true);
      setChosenSize();
    }
  };

  const handleAddToCart = () => {
    console.log("in handle cart");
    if (chosenSize) {
      console.log("error = false  && chosen size true");
      props.product.size = chosenSize;
      props.onCart(props.product);
    } else {
      console.log("error is true or size is undefined ");
      setError(true);
    }
  };

  return (
    <Body>
      <PhotoDiv>
        <div className="main-photo">
          <img src={viewPhoto} />
        </div>
        <div className="choose-photos">
          {props.product.imgDetails.map((img) => (
            <img
              src={img}
              className={img === viewPhoto ? "chosen-photo" : ""}
              onClick={handleClickPhoto}
            />
          ))}
        </div>
      </PhotoDiv>
      <Details>
        <Label htmlFor="">Descriptons:</Label>
        <P className="text text-small">{props.product.description}</P>
        <Label htmlFor=""> Price:</Label>
        <P className="text">{"₪" + props.product.price}</P>
        <Sizes stock={props.product.stock} onClick={setSize} />
        <ArrowBtn content={"add to cart"} onClick={handleAddToCart} />
        {error && (
          <p style={{ color: "red" }}>please choose an available size...</p>
        )}
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
