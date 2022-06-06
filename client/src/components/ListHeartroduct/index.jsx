import ArrowBtn from "../ArrowBtn";
import CartContext from "../../Contexts/CartContext";
import React, { useContext } from "react";

const ListHeartProduct = (props) => {
  const { addProduct } = useContext(CartContext);
  console.log(props.product);

  return (
    <div className="liked-list">
      <img src={props.product.images.display[0]} className="list-image" />
      <p>{props.product.displayName}</p>
      <p>{props.product.color[0]}</p>
      <p>{props.product.price}</p>
      <span className="around-btn">
        <ArrowBtn
          text="ADD TO CART"
          onClick={() => addProduct(props.product)}
        />
      </span>
    </div>
  );
};

export default ListHeartProduct;
