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

    const prod = Object.assign({}, product);
    let tempProducts = [];
    if (index >= 0) {
      if (products[index].quantity >= prod.stock[prod.size]) return;
      prod.quantity = products[index].quantity + 1;
      products.map((p) => {
        if (!(p._id == product._id && p.size == product.size))
          tempProducts.push(p);
        else tempProducts.push(prod);
      });
    } else {
      prod.quantity = 1;
      tempProducts = [...products, prod];
    }
    setProducts(tempProducts);
  };

  const removeProduct = (product, all) => {
    // console.log("in remove");
    const index = products.findIndex((prod) => {
      return prod._id == product._id && prod.size == product.size;
    });
    const tempProducts = [];
    products.map((prod) => {
      if (!(prod._id == product._id && prod.size == product.size))
        tempProducts.push(prod);
      else if (!all) {
        prod.quantity = prod.quantity - 1;
        tempProducts.push(prod);
      }
    });
    setProducts(tempProducts);
    // console.log(products);
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
