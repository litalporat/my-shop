import React from 'react';
import { useNavigate } from 'react-router-dom';
import Snowfall from 'react-snowfall';

//Components
import Map from '../../components/Elements/Element.Map/Element.Map';

//Styles
import { Body, Container } from './Page.About.Styled';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <Container>
        <Snowfall color="#d8d2d2" />

        <h2
          style={{
            textDecoration: 'none',
            fontSize: '350%',
          }}
          onClick={() => navigate('/')}
        >
          OurShop
        </h2>
        <h3>
          We don't do fashion like anyone else.
          <br />
          Our line gives you the confidence to express your individuality, and
          provides you with everything you'll need
          <br />
          to create a style that’s all yours—making every day, night, and
          everything in-between as extraordinary as you are.
          <br />
          There are no rules, just endless ways to be you.
        </h3>

        <h1>You can also visit our stores:</h1>
      </Container>
      <Map lat={31.998629} lng={34.775545} />
    </Body>
  );
};

export default AboutPage;
