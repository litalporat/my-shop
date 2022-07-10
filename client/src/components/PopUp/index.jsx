import React, { useState, useSyncExternalStore } from "react";
import styled from "styled-components";
import { ArrowBtn, IconBtn } from "../Buttons";
import Sizes from "../NewComp/Sizes";
import "./Popup.css";
import BackGround from "../../images/background.png";
import { useContext } from "react";
import CurrencyContext from "../../Contexts/CurrencyContext";
import { toast } from "react-toastify";

const Body = styled.div`
  display: flex;
  height: 100%;
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
  font-size: 16px;
  letter-spacing: 1px;
`;

const Label = styled.label`
  letter-spacing:1.5px;
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

const P = styled.p`
  color: black;
`;

const Details = styled.div`
  display: flex;
  text-align: left;
  align-items: flex-start;
  height: 100%;
  padding: 1rem 1rem 1rem 5rem;
  flex: 6;
  flex-direction: column;
  gap:25px;
  justify-content: center;
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
  const { currency, rates } = useContext(CurrencyContext);
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
    if (chosenSize) {
      props.product.size = chosenSize;
      props.onCart(props.product);
      toast(`${props.product.displayName} added to your 🛒!`);
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
        <Label htmlFor="">Descriptons</Label>
        <Text>{props.product.description}</Text>
        <Label>
          {(props.product.price * rates[currency]).toFixed(2)}
          <small style={{ padding: "0 5px" }}>{currency}</small>
        </Label>
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
