import HeartContext from "../../Contexts/HeartContext";
import { useContext } from "react";
import styled from "styled-components";

import { ArrowBtn, PopupBtn, BasicBtn, IconBtn } from "../Buttons";
import Popup from "../PopUp";
import CurrencyContext from "../../Contexts/CurrencyContext";

const Container = styled.div`
  background-color: #d8d2d2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 20px -10px black;
`;
const Body = styled.div`
  margin: 1rem;
  font-weight: bolder;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Price = styled.div`
  color: var(--lightwhite-color);
  padding: 2px 2rem;
  margin-top: -1.8rem;
  font-size: 24px;
  border-radius: 0 0 10px 10px;
  letter-spacing: 2px;
  background-color: var(--darkgray-color);
`;
const Title = styled.div`
  color: var(--darkbrown-color);
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  width: 20rem;
  text-align: center;
`;
const Image = styled.img`
  width: 22rem;
  border-radius: 5px 5px 0 0;
  :hover {
    content: url(${(props) => props.hover});
  }
`;
const Devider = styled.tr`
  background-color: var(--lightnude-color);
  height: 2px;
  border-radius: 50%;
  width: 20rem;
  box-shadow: 0px 8px 10px 1px white;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -2.5rem;
  width: 20rem;
  align-items: center;
  justify-content: space-between;
`;

const Index = (props) => {
  const { handleHearts, include } = useContext(HeartContext);
  const { currency, rates } = useContext(CurrencyContext);

  const handleNotification = () => {
    console.log(props.socket);
    props.socket.emit("like", {
      user: "user",
      product: props.product,
    });
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
          <small style={{ "font-size": "10px" }}>{currency}</small>{" "}
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
