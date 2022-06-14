import Photo from "../images/photo.jpg";
import ArrowBtn from "../components/Buttons/ArrowBtn";
import styled from "styled-components";
import VideoSection from "../components/Sections/VideoSection";
import ForUSection from "../components/Sections/ForUSection";
import { Link } from "react-router-dom";

const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  height: 100vh;
  padding: 0 5rem;
`;
const Shape = styled.div`
  height: 50rem;
  width: 32rem;
  background-color: #9a6758;
  padding: 1rem;
  border-radius: 0rem 0rem 16rem 16rem;
  margin-top: -16vh;
`;
const Image = styled.img`
  width: 30rem;
  border-radius: 15rem;
  margin-top: 10rem;
`;
const Container = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
`;
const Text = styled.p`
  text-align: center;
`;
const ForUBtn = styled.button`
  font-family: "Dancing Script", cursive;
  width: 20rem;
  height: 5rem;
  background: var(--lightwhite-color);
  margin-top: -16vh;
  border-radius: 20px 20px 0 0;
  font-size: 30px;
  font-weight: 800;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

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
    </>
  );
};

export default HomePage;
