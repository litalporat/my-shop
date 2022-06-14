import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Component
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  color: var(--lightwhite-color);
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 900;
  :hover {
    text-decoration: overline 2px;
  }
`;
const Box = styled.div`
  position: absolute;
  background-color: var(--darkgray-color);
  min-width: 40rem;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 20px 0;
  border-radius: 10px;
  top: 150%;
`;
const Devieder = styled.hr`
  margin: 0px 10px;
  border: 1px solid var(--white-color);
`;
const Item = styled.li`
  padding: 15px 10px;
  margin: 0 10px;
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    background-color: var(--white-color);
  }
`;

/**
 * @param {String} title *must
 * @param {String[]} sideTitles ["example","example"]
 */

const DropDown = (props) => {
  const [dropdown, setdropdown] = useState(false);
  document.addEventListener("click", (e) => {
    setdropdown(false);
  });
  return (
    <Wrapper>
      <Button
        onClick={<Link to="/shop" />}
        onMouseOver={() => setdropdown(true)}
      >
        {props.title}
      </Button>
      {/* <Button onMouseOver={() => setdropdown(!dropdown)}>{props.title}</Button> */}
      {dropdown && <DropDownList sidetitles={props.sidetitles} />}
    </Wrapper>
  );
};

const DropDownList = (props) => {
  return (
    <Box className="DDList">
      <Devieder />
      <Item>
        <Link to="/shop"> All Products </Link>
      </Item>
      <Devieder />
      {props.sidetitles.map((obj) => (
        <>
          <Item>{obj}</Item>
          <Devieder />
        </>
      ))}
    </Box>
  );
};

export default DropDown;
