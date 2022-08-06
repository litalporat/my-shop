import React, { useState } from "react";
import { Body, Box, Text } from "./Element.Sizes.Styled";

const sizes = ["xs", "s", "m", "l", "xl", "one size"];

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
