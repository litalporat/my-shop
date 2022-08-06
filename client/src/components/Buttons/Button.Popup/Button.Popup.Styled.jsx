import styled, { css } from 'styled-components';

const BackFrame = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5;
  align-items: center;
  justify-content: center;
  background: #120e10b3;
`;

const Box = styled.div`
  gap: 1rem;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  padding: 1rem;
  position: absolute;
  overflow-x: hidden;
  flex-direction: column;
  background: var(--lightwhite-color);
  box-shadow: 0px 0px 20px -5px black;
  height: 80vh;
  ${(props) =>
    props.size == 'L'
      ? css`
          width: 80vw;
        `
      : props.size == 'M'
      ? css`
          width: 50vw;
        `
      : css`
          width: 30vw;
        `}
`;
const Button = styled.button`
  display: flex;
`;
const Title = styled.h3`
  color: var(--darkgray-color);
  font-size: 30px;
  width: 100%;
  text-align: center;
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { BackFrame, Box, Button, Title, TitleDiv };
