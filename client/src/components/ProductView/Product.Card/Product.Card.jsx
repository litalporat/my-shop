import { useContext, useState } from "react";

//Contexts
import CurrencyContext from "../../../Contexts/CurrencyContext";
import HeartContext from "../../../Contexts/HeartContext";

//Components
import { toast } from "react-toastify";
import {
  ButtonArrow,
  ButtonBasic,
  ButtonIcon,
  ButtonPopup,
} from "../../Buttons";
import Popup from "../Product.Popup/Product.Popup";

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
          <ButtonPopup
            title={props.product.displayName}
            size={"L"}
            button={<ButtonBasic title={"View"} />}
          >
            <Popup product={props.product} onCart={props.onCart} />
          </ButtonPopup>
          <ButtonIcon
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
          </ButtonIcon>
        </FlexRow>
        <Price>
          {" "}
          {(props.product.price * rates[currency]).toFixed(2)}{" "}
          <small style={{ fontSize: "10px" }}>{currency}</small>{" "}
        </Price>
        <Title> {props.product.displayName} </Title>
        <Devider />
        <ButtonPopup
          title={props.product.displayName}
          size={"L"}
          button={<ButtonArrow content={"add to cart"} />}
        >
          <Popup product={props.product} onCart={props.onCart} />
        </ButtonPopup>
      </Body>
    </Container>
  );
};

export default Index;
