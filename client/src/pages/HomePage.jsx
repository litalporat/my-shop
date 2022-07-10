import Photo from "../images/photo.jpg";
import ArrowBtn from "../components/Buttons/ArrowBtn";
import VideoSection from "../components/Sections/VideoSection";
import ForUSection from "../components/Sections/ForUSection";
import { Link } from "react-router-dom";
import Map from "../components/Map/Map";
import { Body, Container, ForUBtn, Image, Shape, Text, Title } from "./styles/HomePageStyle";


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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              unde quibusdam, laborum aperiam veniam et nisi architecto
              doloremque commodi tempore eveniet vero velit accusamus, ipsam ex
              nesciunt provident reiciendis! Nihil.
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
      <Map lat={31.998629} lng={34.775545} />
    </>
  );
};

export default HomePage;
