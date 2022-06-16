import React, { useContext, useState } from "react";
import CartContext from "../../Contexts/CartContext";
import HeartContext from "../../Contexts/HeartContext";
import CartProduct from "../ProductView/ListViewProduct";
import IconBtn from "../Buttons/IconBtn";
import SizeBtn from "../Buttons/SizeBtn";
const LikeList = () => {
  const { hearts, removeHeart } = useContext(HeartContext);

  return (
    <>
      {hearts.map((like) => (
        <CartProduct
          product={like}
          delete={() => removeHeart(like)}
          cartButton={true}
        />
      ))}
    </>
  );
};

export default LikeList;
