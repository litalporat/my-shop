import "./Home.css";
import Photo from "../../images/photo.jpg";
import ArrowBtn from "../../components/ArrowBtn";
import HeartContext from "../../Contexts/HeartContext";
import { useContext, useState } from "react";

const HomePage = () => {
  const { hearts } = useContext(HeartContext);
  const [foryou, setForyou] = useState([
    "628a3950cd566118fe095cbc",
    "628a3950cd566118fe095cbd",
    "628a3950cd566118fe095cc5",
  ]);

  console.log(foryou);

  return (
    <div className="home-body">
      <div className="a">
        <img src={Photo} alt="Hello" className="home-photo" />
      </div>
      <div className="home-cont">
        <div className="home-head">
          <h1> Welcome To Our App</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste unde
            quibusdam, laborum aperiam veniam et nisi architecto doloremque
            commodi tempore eveniet vero velit accusamus, ipsam ex nesciunt
            provident reiciendis! Nihil.
          </p>
          <ArrowBtn content={"Start Tour"} />
          <div className="foryou">
            <h2>For You</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
