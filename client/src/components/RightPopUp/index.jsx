import "./RightPopUp.css";
import ListCartProduct from "../ListCartProduct";
import HeartContext from "../../Contexts/HeartContext";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import ListHeartProduct from "../ListHeartroduct";
import { Link } from "react-router-dom";

const RightPopUp = (props) => {
  const { hearts } = useContext(HeartContext);
  const { products } = useContext(CartContext);

  const isCart = props.content == "cart";
  const isWishlist = props.content == "wishlist";
  const data = isCart ? products : hearts;

  return (
    <div className="side-box">
      <span className="close" onClick={props.onClick}>
        x
      </span>
      {isCart &&
        data.map((product) => (
          <ListCartProduct product={product}></ListCartProduct>
        ))}
      {isWishlist &&
        data.map((product) => (
          <ListHeartProduct product={product}></ListHeartProduct>
        ))}
      {isCart && (
        <Link to="/cart" className="checkout-btn">
          checkout
        </Link>
      )}
    </div>
  );
};

export default RightPopUp;
