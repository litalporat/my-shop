import React, { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import HeartContext from "../../contexts/HeartContext";
import CartProduct from "../ProductView/Product.List/Product.List";
import IconBtn from "../Buttons/IconBtn";
import { PopupBtn } from "../Buttons";
import Popup from "../ProductView/Product.Popup/Product.Popup";

const LikeList = () => {
  const { addProduct } = useContext(CartContext);
  const { hearts, removeHeart } = useContext(HeartContext);

  return (
    <>
      {hearts.map((like) => (
        <CartProduct
          product={like}
          delete={() => removeHeart(like)}
          button={
            <PopupBtn
              title={like.displayName}
              size={"L"}
              button={
                <IconBtn>
                  <i className="fas fa-shopping-cart"></i>
                </IconBtn>
              }
            >
              <Popup product={like} onCart={addProduct} />
            </PopupBtn>
          }
        />
      ))}
    </>
  );
};

export default LikeList;
