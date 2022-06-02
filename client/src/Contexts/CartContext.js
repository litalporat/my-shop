import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const data = localStorage.getItem("products");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    const tempProducts = [...products, product];
    setProducts(tempProducts);
  };
  const removeProduct = (product) => {
    const tempProducts = [];
    for (let i = 0; i < products.length; i++)
      if (products[i].displayName != product.displayName)
        tempProducts.push(products[i]);
    setProducts(tempProducts);
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
