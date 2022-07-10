import React from "react";
import styled from "styled-components";
import IconBtn from "../Buttons/IconBtn";
import { useContext } from "react";
import CurrencyContext from "../../contexts/CurrencyContext";
import { toast } from 'react-toastify';
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
  const { currency } = useContext(CurrencyContext);
  const rates = JSON.parse(localStorage.getItem("rates"));

  return (
    <Container>
      <Photo src={props.product.imgDisplay[0]}></Photo>
      <Details>
        <Text>{props.product.displayName}</Text>
        <Text>
          {(props.product.price * rates[currency]).toFixed(2)}{" "}
          <small style={{ "font-size": "10px" }}>{currency}</small>{" "}
        </Text>
        {props.product.size && <Text>{props.product.size.toUpperCase()}</Text>}
      </Details>
      <IconList>
        <IconBtn onClick={() => {
            props.delete(props.product, true)
            toast(`${ props.product.displayName } removed from your 🛒!`)
          }}>
          <i class="fa-solid fa-trash-can"></i>
        </IconBtn>
        {props.button}
        {props.children}
      </IconList>
    </Container>
  );
};

export default ListViewProduct;
