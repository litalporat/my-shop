import React from "react";
import styled, { css } from "styled-components";

const Cirlce = styled.button`
  width: 45px;
  height: 45px;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 10px -5px black;

  ${(props) =>
    props.type == "secondary"
      ? css`
          border: var(--lightwhite-color) solid 2px;
          i {
            color: var(--lightwhite-color);
          }
          :hover {
            background-color: var(--lightwhite-color);
            i {
              color: var(--black-color);
            }
          }
        `
      : css`
          border: var(--lightnude-color) solid 2px;
          color: var(--lightnude-color);
          background: #d8d2d2;
          :hover {
            background-color: var(--lightnude-color);
            i {
              color: var(--lightwhite-color);
            }
          }
        `}
`;
/**
 * @param {String} title *must
 * @param {Object} style *option
 * @param {String} type primarly | secondary
 * @param {Function} onClick *option
 * @param {[Object]} children 
 */
const IconBtn = (props) => {
  return (
    <Cirlce onClick={props.onClick} type={props.type} style={props.style}>
      {props.children}
    </Cirlce>
  );
};

export default IconBtn;
