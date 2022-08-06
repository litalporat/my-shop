import { useContext, useState } from "react";

//Contexts
import HeartContext from "../../../contexts/HeartContext";
import CurrencyContext from "../../../contexts/CurrencyContext";

//Components
import Popup from "../Product.Popup/Product.Popup";
import { toast } from "react-toastify";
import { ArrowBtn, PopupBtn, BasicBtn, IconBtn } from "../../Buttons";

//Styles
import {
  Body,
  Container,
  Devider,
  FlexRow,
  Image,
  Price,
  Title,
} from "./Product.Card.Styled";

const Index = (props) => {
  const { handleHearts, include } = useContext(HeartContext);
  const { currency, rates } = useContext(CurrencyContext);
  const [liked, setLiked] = useState(include(props.product));
  const handleNotification = () => {
    props.socket.emit(
      "like",
      { name: "" },
      { name: props.product.displayName }
    );
    if (liked) toast(`You just 🗑️ ${props.product.displayName}`);
    else toast(`You just ❤️ ${props.product.displayName}`);
    setLiked(!liked);
  };

  return (
    <Container>
      <Image
        src={props.product.imgDisplay[0]}
        hover={props.product.imgDisplay[1]}
      />
      <Body>
        <FlexRow>
          <PopupBtn
            title={props.product.displayName}
            size={"L"}
            button={<BasicBtn title={"View"} />}
          >
            <Popup product={props.product} onCart={props.onCart} />
          </PopupBtn>
          <IconBtn
            onClick={() => {
              handleHearts(props.product);
              handleNotification();
            }}
            style={
              include(props.product)
                ? { color: "#ec3434", background: "#A18278" }
                : {}
            }
          >
            <i className="fas fa-heart" />
          </IconBtn>
        </FlexRow>
        <Price>
          {" "}
          {(props.product.price * rates[currency]).toFixed(2)}{" "}
          <small style={{ fontSize: "10px" }}>{currency}</small>{" "}
        </Price>
        <Title> {props.product.displayName} </Title>
        <Devider />
        <PopupBtn
          title={props.product.displayName}
          size={"L"}
          button={<ArrowBtn content={"add to cart"} />}
        >
          <Popup product={props.product} onCart={props.onCart} />
        </PopupBtn>
      </Body>
    </Container>
  );
};

export default Index;
