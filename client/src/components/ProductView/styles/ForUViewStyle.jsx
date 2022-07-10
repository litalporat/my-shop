import styled from "styled-components";

const Container = styled.div`
  background: var(--lightwhite-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0px 1px 20px -10px black;
`;
const Image = styled.img`
  width: 22rem;
  border-radius: 10px 10px 0 0;
`;
const FlexRow = styled.div`
  display: flex;
  position: absolute;
  gap: 12rem;
  margin-top: 1rem;
  z-index: 2;
`;

export { Container, Image, FlexRow };
