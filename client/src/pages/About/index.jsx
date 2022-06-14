import React from "react";
import Map from "../../components/Map/Map";
import styled from "styled-components";

const Body = styled.div`
  margin: 8rem;
  font-weight: bolder;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutPage = () => {
  return (
    <Body>
      <h1>Our store was found in blah blah blah...</h1>
      <Map lat={31.998629} lng={34.775545} />
    </Body>
  );
};

export default AboutPage;
