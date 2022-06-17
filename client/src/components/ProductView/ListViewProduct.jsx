import React from "react";
import styled from "styled-components";
import IconBtn from "../Buttons/IconBtn";
import { useContext } from "react";
import CurrencyContext from "../../Contexts/CurrencyContext";

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
  gap: 10px;
  padding-right: 10px;
  align-items: center;
`;
const Text = styled.p`
  letter-spacing: 1px;
`;

const ListViewProduct = (props) => {
  const { currency, rates } = useContext(CurrencyContext);

  return (
    <Container>
      <Photo src={props.product.imgDisplay[0]}></Photo>
      <Details>
        <Text>{props.product.displayName}</Text>
        {/* <Text>
          Price: {(props.product.price * rates[currency]).toFixed(2)} {currency}
        </Text> */}
        {props.product.size && <Text>{props.product.size.toUpperCase()}</Text>}
      </Details>
      <IconList>
        <IconBtn onClick={() => props.delete(props.product, true)}>
          <i class="fa-solid fa-trash-can"></i>
        </IconBtn>
        {props.button}
        {props.children}
      </IconList>
    </Container>
  );
};

export default ListViewProduct;
