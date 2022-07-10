import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  gap: 20px;
  justify-content: center;
`;

const Strong = styled.strong`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

export { GridContainer, Strong };
