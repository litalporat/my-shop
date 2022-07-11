import React from "react";
import styled from "styled-components";
import FacebookShare from "../FacebookComp/Share";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 20rem;
  background: var(--black-color);
  color: var(--lightwhite-color);
`;

const Footer = () => {
  return (
    <Container>
      <p>
        Liked our shop?
        <br />
        Write us a recommendation on facebook
      </p>
      <FacebookShare />

      <p>
        Ⓒ all rights reserved to
        <br />
        Bar Shoshani | Lital Porat | Nimi Flaisher | Ravid Eliyahu
      </p>
    </Container>
  );
};

export default Footer;
