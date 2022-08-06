import styled from "styled-components";
import BackGround from "../../images/background.png";

const Body = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const PhotoDiv = styled.div`
  display: flex;
  height: 100%;
  border-radius: 10px;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  flex: 6;
  background-image: url(${BackGround});
`;

const Text = styled.p`
  font-size: 16px;
  letter-spacing: 1px;
`;

const Label = styled.label`
  letter-spacing: 1.5px;
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

const P = styled.p`
  color: black;
`;

const Details = styled.div`
  display: flex;
  text-align: left;
  align-items: flex-start;
  height: 100%;
  padding: 1rem 1rem 1rem 5rem;
  flex: 6;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
`;

const BtnsList = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
  padding-top: 10px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export { Body, PhotoDiv, Text, Label, P, Details, BtnsList };
