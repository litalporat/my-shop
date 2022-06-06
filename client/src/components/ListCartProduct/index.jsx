import ArrowBtn from "../ArrowBtn";
import CartContext from "../../Contexts/CartContext";
import React, { useContext } from "react";

const ListCartProduct = (props) => {
  const { removeProduct } = useContext(CartContext);
  console.log(props.product);

  return (
    <div className="liked-list">
      <img src={props.product.images.display[0]} className="list-image" />
      <p>{props.product.displayName}</p>
      <ArrowBtn
        text="REMOVE ITEM"
        onClick={() => removeProduct(props.product)}
      />
    </div>
  );
};

export default ListCartProduct;
