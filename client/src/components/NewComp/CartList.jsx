import React, { useContext } from "react";

import CartContext from "../../Contexts/CartContext";
import CartProduct from "./ListViewProduct";

const CartList = () => {
  const { products, removeProduct } = useContext(CartContext);

  return (
    <>
      {products.map((product) => (
        <CartProduct
          product={product}
          delete={() => removeProduct(product)}
        />
      ))}
    </>
  );
};

export default CartList;
