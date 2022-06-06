import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  background: var(--black-color);
  color: var(--lightwhite-color);

`;

const Footer = () => {
  return <Container>Hello World</Container>;
};

export default Footer;
