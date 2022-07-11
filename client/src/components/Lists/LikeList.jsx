import React, { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import HeartContext from "../../Contexts/HeartContext";
import CartProduct from "../ProductView/ListViewProduct";
import IconBtn from "../Buttons/IconBtn";
import { PopupBtn } from "../Buttons";
import Popup from "../PopUp";

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
