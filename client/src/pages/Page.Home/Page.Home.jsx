import { Link } from 'react-router-dom';
import ArrowBtn from '../../components/Buttons/ArrowBtn';
import { SectionForU, SectionVideo } from '../../components/Sections';
import Photo from '../../images/photo.jpg';
import {
  Body,
  Container,
  ForUBtn,
  Image,
  Shape,
  Text,
  Title
} from './Page.Home.Styled';

const HomePage = () => {
  return (
    <>
      <Container>
        <Body>
          <Shape>
            <Image src={Photo} alt="Hello" />
          </Shape>
          <Container>
            <Title> Welcome To Our App</Title>
            <Text>
              After months of work; planning, designing, learning, developing,
              team working and bug fixing.
              <br /> Wer'e very happy to present to you our first app.
              <br /> It's been a very fulfilling, long process that has thought
              us a lot about web developement and we all enjoyed the making of
              it.
            </Text>
            <Link to="/shop">
              <ArrowBtn content={'Start Tour'} />
            </Link>
          </Container>
        </Body>
        <ForUBtn>
          #ForU
          <i className="fas fa-fire" style={{ color: 'red' }}></i>
        </ForUBtn>
      </Container>
      <SectionForU />
      <SectionVideo />
    </>
  );
};

export default HomePage;
