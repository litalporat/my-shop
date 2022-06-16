import React from "react";
import { useContext } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import CartContext from "../../Contexts/CartContext";

const Container = styled.span`
  display: flex;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  vertical-align: middle;
  height: 30px;
`;

const BtnLeftDisable = styled.button`
  color: #e0e0e0;
  height: 100%;
  width: 1.5rem;
  font-size: 1.5rem;
  background-color: #f3f3f3;
  color: #888;
  border: 0 solid #dbdbdb;
  text-align: center;
  cursor: pointer;
  border-radius: 3px 0 0 3px;
`;

const BtnLeft = styled.button`
  height: 100%;
  width: 1.5rem;
  font-size: 1.5rem;
  background-color: #f3f3f3;
  color: #888;
  border: 0 solid #dbdbdb;
  text-align: center;
  cursor: pointer;
  border-radius: 3px 0 0 3px;
`;

const BtnRightDisable = styled.button`
  color: #e0e0e0;
  height: 100%;
  width: 1.5rem;
  font-size: 1.5rem;
  background-color: #f3f3f3;
  color: #888;
  border: 0 solid #dbdbdb;
  text-align: center;
  cursor: pointer;
  border-radius: 0 3px 3px 0;
`;

const BtnRight = styled.button`
  height: 100%;
  width: 1.5rem;
  font-size: 1.5rem;
  background-color: #f3f3f3;
  color: #888;
  border: 0 solid #dbdbdb;
  text-align: center;
  cursor: pointer;
  border-radius: 0 3px 3px 0;
`;

const QuantityDisplay = styled.input`
  width: 2rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: 0;
  border-top: 0 solid #dbdbdb;
  border-bottom: 0 solid #dbdbdb;
  text-align: center;
`;

const QuantitySelector = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const { addProduct, removeProduct } = useContext(CartContext);

  const decrement = () => {
    removeProduct(props.product);
    setQuantity(quantity - 1);
  };

  const increment = () => {
    addProduct(props.product);
    setQuantity(quantity + 1);
  };

  return (
    <Container>
      {quantity == 1 ? (
        <BtnLeftDisable>-</BtnLeftDisable>
      ) : (
        <BtnLeft onClick={decrement}>-</BtnLeft>
      )}
      <QuantityDisplay type="text" value={quantity} readOnly />
      {quantity == props.disable ? (
        <BtnRightDisable>+</BtnRightDisable>
      ) : (
        <BtnRight onClick={increment}>+</BtnRight>
      )}
    </Container>
  );
};

export default QuantitySelector;
