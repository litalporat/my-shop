import React from "react";
import styled from "styled-components";
import "./ArrowBtn.css";

const Button = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 12rem;
  height: auto;

  :hover Circle {
    width: 100%;
  }
`;
const Cirlce = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: var(--lightnude-color);
  border-radius: 1.625rem;
`;

const ArrowBtn = (props) => {
  return (
    <Button onClick={props.onClick}>
      <span className="circle">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{props.content}</span>
    </Button>
  );
};

export default ArrowBtn;
