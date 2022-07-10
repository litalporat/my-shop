import React from "react";

//Components
import Map from "../components/Elements/Map";

//Styles
import { Body } from "./styles/AboutPageStyle";

const AboutPage = () => {
  return (
    <Body>
      <h1>Our store was found in blah blah blah...</h1>
      <Map lat={31.998629} lng={34.775545} />
    </Body>
  );
};

export default AboutPage;
