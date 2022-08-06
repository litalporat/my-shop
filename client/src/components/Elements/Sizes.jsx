import React, { useState } from "react";
import styled, { css } from "styled-components";

const sizes = ["xs", "s", "m", "l", "xl", "one size"];

const Body = styled.div`
  display: flex;
  gap: 1rem;
`;
const Box = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  color: var(--black-color);
  letter-spacing: 2px;
  font-weight: 900;
  border: var(--lightnude-color) solid 2px;
  border-radius: 5px;
  background: var(--lightwhite-color);
  ${(props) =>
    (props.amount <= 0 || props.amount == null) &&
    css`
      color: var(--white-color);
      border-color: var(--lightnude-color);
    `}
`;

const Text = styled.p`
  text-transform: uppercase;
`;

const Sizes = ({ stock, onClick }) => {
  const [selected, setSelected] = useState();

  const colorSelected = (size) => {
    if (stock[size]) {
      if (selected) {
        document.getElementById(selected).style.backgroundColor = "#d8d2d2";
        document.getElementById(selected).style.color = "#120E10";
      }
      document.getElementById(size).style.backgroundColor = "#A18278";
      document.getElementById(size).style.color = "#d8d2d2";
      setSelected(size);
    }
  };

  return (
    <Body>
      {sizes.map((size) => (
        <SizeBox
          size={size}
          stock={stock[size]}
          onClick={onClick}
          colorSelected={colorSelected}
        />
      ))}
    </Body>
  );
};

const SizeBox = ({ size, stock, onClick, colorSelected }) => {
  return (
    <Box
      id={size}
      amount={stock}
      onClick={() => {
        onClick(size, stock);
        colorSelected(size);
      }}
    >
      <Text>{size}</Text>
    </Box>
  );
};

export default Sizes;
