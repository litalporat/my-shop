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

  // const productsInclude = (product) => {
  //   for (const prod in products) {
  //     if (prod._id == product._id) return true;
  //     console.log(`comparing ${prod._id} and ${product._id}`);
  //   }
  //   return false;
  // };

  const addProduct = (product) => {
    const index = products.findIndex((prod) => {
      return prod._id == product._id && prod.size == product.size;
    });
    if (index >= 0) {
      products[index].quantity++;
    } else {
      product.quantity = 1;
      const tempProducts = [...products, product];
      setProducts(tempProducts);
    }
  };
  const removeProduct = (product) => {
    if (product.quantity > 1) product.quantity--;
    else {
      const tempProducts = [];
      products.map((prod) => {
        if (prod._id != product._id) tempProducts.push(prod);
      });
      setProducts(tempProducts);
    }
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
