import React, { useContext, useState } from "react";
import CartContext from "../../Contexts/CartContext";
import Product from "../../components/Product";
import Popup from "../../components/PopUp";
import "./Cart.css";

const CartPage = () => {
  const { products, removeProduct } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setcontent] = useState();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const changeContent = (product) => {
    setcontent(product);
  };
  return (
    <div className="cart-body">
      {products &&
        products.map((product) => (
          <Product
            product={product}
            onClick={() => {
              changeContent(product);
              togglePopup();
            }}
            onCart={() => removeProduct(product)}
            text="REMOVE ITEM"
          />
        ))}
      {isOpen && <Popup content={content} handleClose={togglePopup} />}
    </div>
  );
};

export default CartPage;
