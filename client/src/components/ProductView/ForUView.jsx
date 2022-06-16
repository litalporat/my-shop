import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ArrowBtn, BasicBtn, IconBtn, PopupBtn } from "../Buttons";
import SizeBtn from "../Buttons/SizeBtn";
import Popup from "../PopUp";

const Container = styled.div`
  background: var(--lightwhite-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0px 1px 20px -10px black;
`;
const Image = styled.img`
  width: 22rem;
  border-radius: 10px 10px 0 0;
`;
const FlexRow = styled.div`
  display: flex;
  position: absolute;
  gap: 12rem;
  margin-top: 1rem;
  z-index: 2;
`;

const ForUView = (props) => {
  const [clickCart, setClick] = useState(false);

  return (
    <Container>
      <FlexRow>
        <PopupBtn
          title={props.product.displayName}
          size={"L"}
          button={<BasicBtn title={"View"} />}
        >
          <Popup product={props.product} />
        </PopupBtn>
        <IconBtn>
          <i className="fa-solid fa-up-right-from-square"></i>
        </IconBtn>
      </FlexRow>
      <Image src={props.product.imgDisplay[0]} />
      <ArrowBtn content={"add to cart"} onClick={() => setClick(!clickCart)} />
      {clickCart && (
        <SizeBtn
          product={props.product}
          onCart={props.onCart}
          closeSize={() => setClick(!clickCart)}
        />
      )}
    </Container>
  );
};

export default ForUView;
