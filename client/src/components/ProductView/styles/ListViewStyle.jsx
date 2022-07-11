import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  display: flex;
  box-shadow: 0px 1px 10px -5px black;
  align-items: center;
  justify-content: space-between;
`;
const Photo = styled.img`
  width: 7rem;
  border-radius: 10px 0 0 10px;
  image-rendering: -webkit-optimize-contrast;
`;
const Details = styled.div`
  color: var(--black-color);
  flex: 1;
  padding: 0 10px;
`;
const IconList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 10px;
  align-items: center;
`;
const Text = styled.p`
  letter-spacing: 1px;
`;

export { Container, Photo, Details, IconList, Text };
