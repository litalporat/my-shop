import React from "react";

//Components
import { ButtonArrow, ButtonBasic, ButtonIcon, ButtonPopup } from "../../Buttons";
import Popup from "../Product.Popup/Product.Popup";

//Styles
import { Container, FlexRow, Image } from "./Product.ForU.Styled";

const ForUView = (props) => {
  return (
    <Container>
      <FlexRow>
        <ButtonPopup
          title={props.product.displayName}
          size={"L"}
          button={<ButtonBasic title={"View"} />}
        >
          <Popup product={props.product} />
        </ButtonPopup>
        <ButtonIcon>
          <i className="fa-solid fa-up-right-from-square"></i>
        </ButtonIcon>
      </FlexRow>
      <Image src={props.product.imgDisplay[0]} />
      <ButtonPopup
        title={props.product.displayName}
        size={"L"}
        button={<ButtonArrow content={"add to cart"} />}
      >
        <Popup product={props.product} onCart={props.onCart} />
      </ButtonPopup>
    </Container>
  );
};

export default ForUView;
