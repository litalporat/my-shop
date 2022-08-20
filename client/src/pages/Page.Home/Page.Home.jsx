import { Link } from "react-router-dom";
import ArrowBtn from "../../components/Buttons/Button.Arrow/Button.Arrow";
import { SectionForU, SectionVideo } from "../../components/Sections";
import Photo from "../../images/photo.jpg";
import {
  Body,
  Container,
  ForUBtn,
  Image,
  Shape,
  Text,
  Title,
} from "./Page.Home.Styled";

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
              After months of team work—planning, designing, learning,
              <br />
              developing, and fixing bugs—wer'e happy to present to you our
              first app.
              <br /> It's been a long and rewarding process that has taught us a
              lot about web developement.
              <br /> Enjoy!
            </Text>
            <Link to="/shop">
              <ArrowBtn content={"Start Tour"} />
            </Link>
          </Container>
        </Body>
        <ForUBtn>
          #ForU
          <i className="fas fa-fire" style={{ color: "red" }}></i>
        </ForUBtn>
      </Container>
      <SectionForU />
      <SectionVideo />
    </>
  );
};

export default HomePage;
