import React from "react";
import styled from "styled-components";
import { ArrowBtn } from "../Buttons";

const Container = styled.div`
  width: 22vw;
  height: 22vh;
  background: black;
`;
const Image = styled.img`
  width: 22rem;
`;

const ForUView = (props) => {
  return (
    <Container>
      <Image src={props.product.images.display[0]} />
      <ArrowBtn content={"add to cart"} />
    </Container>
  );
};

export default ForUView;
