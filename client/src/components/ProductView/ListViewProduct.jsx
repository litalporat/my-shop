import React from "react";
import styled from "styled-components";
import IconBtn from "../Buttons/IconBtn";
import { useContext } from "react";
import CurrencyContext from "../../Contexts/CurrencyContext";
import SizeBtn from "../Buttons/SizeBtn";
import { useState } from "react";
import CartContext from "../../Contexts/CartContext";

const Container = styled.div`
  border-radius: 10px;
  display: flex;
  box-shadow: 0px 1px 10px -5px black;
  align-items: center;
  justify-content: space-between;
`;
const Photo = styled.img`
  width: 7rem;
  border-radius: 10px 0 0 10px;
  image-rendering: -webkit-optimize-contrast;
`;
const Details = styled.div`
  color: var(--black-color);
  flex: 1;
  padding: 0 10px;
`;
const IconList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-right: 10px;
`;
const Text = styled.p`
  letter-spacing: 1px;
`;

const ListViewProduct = (props) => {
  const { currency, rates } = useContext(CurrencyContext);
  const [clickCart, setClick] = useState(false);
  const { addProduct } = useContext(CartContext);

  return (
    <Container>
      <Photo src={props.product.imgDisplay[0]}></Photo>
      <Details>
        <Text>{props.product.displayName}</Text>
        {/* <Text>
          Price: {(props.product.price * rates[currency]).toFixed(2)} {currency}
        </Text> */}
        {props.product.size && <Text>{props.product.size}</Text>}
      </Details>
      <IconList>
        <IconBtn onClick={props.delete}>
          <i class="fa-solid fa-trash-can"></i>
        </IconBtn>
        {props.cartButton && (
          <IconBtn onClick={() => setClick(!clickCart)}>
            <i className="fas fa-shopping-cart"></i>
          </IconBtn>
        )}
        {props.cartButton && clickCart && (
          <SizeBtn
            product={props.product}
            onCart={() => addProduct(props.product)}
            closeSize={() => setClick(!clickCart)}
          />
        )}
      </IconList>
      {props.children}
    </Container>
  );
};

export default ListViewProduct;
