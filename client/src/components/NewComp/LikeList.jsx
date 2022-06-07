import React, { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import HeartContext from "../../Contexts/HeartContext";
import CartProduct from "./ListViewProduct";
import IconBtn from "../Buttons/IconBtn";

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
            <IconBtn onClick={() => addProduct(like)}>
              <i className="fas fa-shopping-cart"></i>
            </IconBtn>
          }
        />
      ))}
    </>
  );
};

export default LikeList;
