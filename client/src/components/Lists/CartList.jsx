import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CartContext from "../../contexts/CartContext";
import ArrowBtn from "../Buttons/ArrowBtn";
import Quantity from "../Buttons/QuantityBtn";
import CartProduct from "../ProductView/Product.List/Product.List";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CartList = (props) => {
  const { products, removeProduct } = useContext(CartContext);

  return (
    <Container>
      {products.map(
        (product) => (
          console.log(product),
          (
            <CartProduct product={product} delete={removeProduct}>
              <Quantity
                disable={product.stock[product.size]}
                product={product}
              />
            </CartProduct>
          )
        )
      )}
      {products.length > 0 && (
        <Link onClick={props.closeSideBar} to={"/cart"}>
          <ArrowBtn content={"to checkout"} />
        </Link>
      )}
    </Container>
  );
};

export default CartList;
