import { prototype } from "google-map-react";
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
    const index = products.findIndex((prod) => {
      return prod._id == product._id && prod.size == product.size;
    });
    if (index >= 0) {
      products[index].quantity++;
    } else {
      const prod = Object.assign({}, product);
      prod.quantity = 1;
      console.log(prod);
      const tempProducts = [...products, prod];
      setProducts(tempProducts);
    }
  };
  const removeProduct = (product, all) => {
    if (!all) product.quantity--;
    else {
      const tempProducts = [];
      products.map((prod) => {
        if (!(prod._id == product._id && prod.size == product.size))
          tempProducts.push(prod);
      });
      setProducts(tempProducts);
    }
    console.log(products);
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
