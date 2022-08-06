import React from "react";
import { useContext } from "react";

//Contexts
import CurrencyContext from "../../../contexts/CurrencyContext";

//Components
import IconBtn from "../../Buttons/IconBtn";
import { toast } from "react-toastify";

//Styles
import {
  Container,
  Details,
  IconList,
  Photo,
  Text,
} from "./Product.List.Styled";

const ListView = (props) => {
  const { currency } = useContext(CurrencyContext);
  const rates = JSON.parse(localStorage.getItem("rates"));

  return (
    <Container>
      <Photo src={props.product.imgDisplay[0]}></Photo>
      <Details>
        <Text>{props.product.displayName}</Text>
        <Text>
          {(props.product.price * rates[currency]).toFixed(2)}{" "}
          <small style={{ "font-size": "10px" }}>{currency}</small>{" "}
        </Text>
        {props.product.size && <Text>{props.product.size.toUpperCase()}</Text>}
      </Details>
      <IconList>
        <IconBtn
          onClick={() => {
            props.delete(props.product, true);
            toast(`${props.product.displayName} removed from your 🛒!`);
          }}
        >
          <i class="fa-solid fa-trash-can"></i>
        </IconBtn>
        {props.button}
        {props.children}
      </IconList>
    </Container>
  );
};

export default ListView;
