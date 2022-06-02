import "./RightPopUp.css";
import ListProduct from "../ListProduct";
import HeartContext from "../../Contexts/HeartContext";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import ArrowBtn from "../ArrowBtn";

const RightPopUp = (props) => {
  const { hearts } = useContext(HeartContext);
  const { products } = useContext(CartContext);

  const isCart = props.content == "cart";
  const isWishlist = props.content == "wishlist";
  const data = isCart ? products : hearts;

  return (
    <div className="wishlist-box">
      <span className="close" onClick={props.onClick}>
        x
      </span>
      {data.map((product) => (
        <ListProduct product={product}></ListProduct>
      ))}
    </div>
  );
};

export default RightPopUp;
