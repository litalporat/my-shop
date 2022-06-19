import React from "react";
import styled, { css } from "styled-components";

const sizes = ["xs", "s", "m", "l", "xl", "one size"];

const Body = styled.div`
  display: flex;
  gap: 1rem;
`;
const Box = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  color: var(--lightwhite-color);
  letter-spacing: 2px;
  font-weight: 900;
  border: var(--nude-color) solid 2px;
  border-radius: 50%;
  ${(props) =>
    props.amount > 15
      ? css`
          background: green;
        `
      : props.amount > 0 && props.amount < 15
      ? css`
          background: blue;
        `
      : css`
          background: var(--darkgray-color);
        `}
`;
const Text = styled.p`
  text-transform: uppercase;
`;

const Sizes = ({ stock, onClick }) => {
  return (
    <Body>
      {sizes.map((size) => (
        <SizeBox size={size} stock={stock[size]} onClick={onClick} />
      ))}
    </Body>
  );
};

const SizeBox = ({ size, stock, onClick }) => {
  return (
    <Box amount={stock} onClick={() => onClick(size, stock)}>
      <Text>{size}</Text>
    </Box>
  );
};

export default Sizes;
