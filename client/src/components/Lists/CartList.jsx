import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CartContext from "../../Contexts/CartContext";
import ArrowBtn from "../Buttons/ArrowBtn";
import CartProduct from "../ProductView/ListViewProduct";

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  gap:1rem;
`

const CartList = () => {
  const { products, removeProduct } = useContext(CartContext);

  return (
    <Container>
      {products.map((product) => (
        <CartProduct
          product={product}
          delete={() => removeProduct(product)}
        />
      ))}
      <Link to={"/cart"}>
      <ArrowBtn content={"to checkout"}/>
      </Link>
    </Container>
  );
};

export default CartList;