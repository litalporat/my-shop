import React, { useContext, useState } from "react";
import CartContext from "../../Contexts/CartContext";
import Product from "../../components/ProductView/CardView";
import Popup from "../../components/PopUp";
import "./Cart.css";
import { ArrowBtn, PopupBtn } from "../../components/Buttons";

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
            checkout={true}
          />
        ))}
      {isOpen && <Popup content={content} handleClose={togglePopup} />}

      {products.length > 0 && (
        <PopupBtn
          title={"Thank you!"}
          size={"s"}
          button={<ArrowBtn content={"place order"} />}
        >
          <p>your order has been placed successfuly.</p>
        </PopupBtn>
      )}
    </div>
  );
};

export default CartPage;
