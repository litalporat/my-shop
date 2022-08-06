import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../../contexts/CartContext';
import {
  BtnLeft,
  BtnLeftDisable,
  BtnRight,
  BtnRightDisable,
  Container,
  QuantityDisplay,
} from './Button.Quantity.Styled';

const Quantity = (props) => {
  const [quantity, setQuantity] = useState(props.product.quantity);
  const { addProduct, removeProduct } = useContext(CartContext);

  useEffect(() => {
    setQuantity(props.product.quantity);
  }, [props.product.quantity]);

  const decrement = () => {
    removeProduct(props.product, false);
  };

  const increment = () => {
    addProduct(props.product);
  };

  return (
    <Container side={'left'}>
      {quantity == 1 ? (
        <BtnLeftDisable>-</BtnLeftDisable>
      ) : (
        <BtnLeft onClick={decrement}>-</BtnLeft>
      )}

      <QuantityDisplay id="QD" type="text" value={quantity} readOnly />

      {quantity == props.disable ? (
        <BtnRightDisable>+</BtnRightDisable>
      ) : (
        <BtnRight onClick={increment}>+</BtnRight>
      )}
    </Container>
  );
};

export default Quantity;
