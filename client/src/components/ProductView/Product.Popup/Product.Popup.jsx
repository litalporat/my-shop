import React, { useState } from "react";
import { useContext } from "react";

//Components
import { ArrowBtn, ButtonArrow, ButtonIcon, IconBtn } from "../../Buttons";
import Sizes from "../../Elements/Element.Sizes/Element.Sizes";

//Styles
import "./Popup.css";

import CurrencyContext from "../../../contexts/CurrencyContext";
import { toast } from "react-toastify";
import {
  Body,
  BtnsList,
  Details,
  Label,
  PhotoDiv,
  Text,
} from "./Product.Popup.Styled";

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
      setError(false);
      setChosenSize(size);
    } else {
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
        <ButtonArrow content={"add to cart"} onClick={handleAddToCart} />
        {error && (
          <p style={{ color: "red" }}>please choose an available size...</p>
        )}
      </Details>
      <BtnsList>{/* Leaves space an add buttons in the future */}</BtnsList>
    </Body>
  );
};

export default Popup;
