import React from "react";

//Components
import Popup from "../PopUp";
import { ArrowBtn, BasicBtn, IconBtn, PopupBtn } from "../Buttons";

//Styles
import { Container, FlexRow, Image } from "./styles/ForUViewStyle";

const ForUView = (props) => {
  return (
    <Container>
      <FlexRow>
        <PopupBtn
          title={props.product.displayName}
          size={"L"}
          button={<BasicBtn title={"View"} />}
        >
          <Popup product={props.product} />
        </PopupBtn>
        <IconBtn>
          <i className="fa-solid fa-up-right-from-square"></i>
        </IconBtn>
      </FlexRow>
      <Image src={props.product.imgDisplay[0]} />
      <PopupBtn
        title={props.product.displayName}
        size={"L"}
        button={<ArrowBtn content={"add to cart"} />}
      >
        <Popup product={props.product} onCart={props.onCart} />
      </PopupBtn>
    </Container>
  );
};

export default ForUView;
