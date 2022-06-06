import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-weight: bold;
  border-radius: 5rem;
  padding: 0.5rem 1rem;
  color: var(--darkbrown-color);
  background: var(--lightwhite-color);
  box-shadow: 0px 1px 10px -5px black;
  border: var(--lightnude-color) solid 2px;
`;

const BasicButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      {props.title}
    </Button>
  );
};

export default BasicButton;
