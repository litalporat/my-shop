import Photo from "../images/photo.jpg";
import ArrowBtn from "../components/Buttons/ArrowBtn";
import VideoSection from "../components/Sections/VideoSection";
import ForUSection from "../components/Sections/ForUSection";
import { Link } from "react-router-dom";
import Map from "../components/Elements/Map";
import {
  Body,
  Container,
  ForUBtn,
  Image,
  Shape,
  Text,
  Title,
} from "./styles/HomePageStyle";

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
              <ArrowBtn content={"Start Tour"} />
            </Link>
          </Container>
        </Body>
        <ForUBtn>
          #ForU
          <i className="fas fa-fire" style={{ color: "red" }}></i>
        </ForUBtn>
      </Container>
      <ForUSection />
      <VideoSection />
    </>
  );
};

export default HomePage;
