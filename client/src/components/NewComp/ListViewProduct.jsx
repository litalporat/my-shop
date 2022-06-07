import React from "react";
import styled from "styled-components";
import IconBtn from "../Buttons/IconBtn";

const Container = styled.div`
  border-radius: 10px;
  display: flex;
  padding: 10px;
  box-shadow: 0px 1px 10px -5px black;
  align-items: center;
  justify-content: space-between;
`;
const Photo = styled.img`
  width: 5rem;
  border-radius: 10px;
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
`;

const ListViewProduct = (props) => {
  return (
    <Container>
      <Photo src={props.product.images.display[0]}></Photo>
      <Details>
        <h4>{props.product.displayName}</h4>
        <p>Price: {props.product.price} </p>
        <p>Size: XS </p>
      </Details>
      <IconList>
        <IconBtn onClick={props.delete}>
          <i class="fa-solid fa-trash-can"></i>
        </IconBtn>
        {props.button}
      </IconList>
    </Container>
  );
};

export default ListViewProduct;
