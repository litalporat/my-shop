import React from "react";

//Components
import Map from "../../components/Elements/Map";

//Styles
import { Body, Container } from "./Page.About.Styled";

const AboutPage = () => {
  return (
    <Body>
      <Container>
        <h2
          style={{
            textDecoration: "none",
            fontSize: "350%",
          }}
        >
          OurShop
        </h2>
        <h3>
          We don't do fashion like anyone else does fashion. Our Brand, created
          by the best design team, look between the lines to bring you the
          freshest clothing. Giving you the confidence to express your
          individuality, we've got all the stuff you need to invent a style
          that’s all yours… making every day, night and everything in-between as
          extraordinary as you are. There are no rules – just endless ways to be
          you.
        </h3>

        <h1>You can also visit our stores</h1>
      </Container>
      <Map lat={31.998629} lng={34.775545} />
    </Body>
  );
};

export default AboutPage;
