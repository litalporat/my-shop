import styled, { css } from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5;
`;

const Box = styled.div`
  gap: 1rem;
  z-index: 10;
  width: 22rem;
  height: 100%;
  display: flex;
  ${(props) =>
    props.side == 'right'
      ? css`
          right: 0;
          border-radius: 10px 0 0 10px;
        `
      : css`
          border-radius: 0px 10px 10px 0px;
        `}
  padding: 1rem;
  position: absolute;
  overflow-x: hidden;
  flex-direction: column;
  background: var(--lightwhite-color);
  box-shadow: 0px 0px 20px -5px black;
`;

const Button = styled.button`
  display: flex;
`;

const Title = styled.h3`
  color: var(--darkgray-color);
  font-size: 30px;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) =>
    props.side == 'right'
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: row-reverse;
        `}
`;

export { Container, Box, Button, Title, TitleDiv };
