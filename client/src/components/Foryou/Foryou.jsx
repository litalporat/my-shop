import OrderHistoryContext from "../../contexts/OrderHistory";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Product from "../ProductView/Product.ForU/Product.ForU";
import CartContext from "../../contexts/CartContext";
import styled from "styled-components";

const Container = styled.div`
  gap: 5rem;
  justify-content: center;
  display: flex;
  padding: 3rem;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Foryou = () => {
  const { orders } = useContext(OrderHistoryContext);
  const { addProduct } = useContext(CartContext);
  // const [defaultForyou, setdefaultForyou] = useState([]);
  const [foryouProd, setForyouProd] = useState([]);
  const colors = ["Blue", "Red", "Green", "Black", "Pink", "White"];

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products`)
      .then(function (response) {
        const allProducts = response.data;
        console.log(orders);
        if (orders.length > 0) {
          axios
            .get(
              `http://localhost:5000/api/products/${
                orders[orders.length - 1][0]._id
              }`
            )
            .then(function (response) {
              const prod = response.data;
              console.log(prod.color[0]);
              var colorIndex;
              for (let i = 0; i < colors.length; i++) {
                if (prod.color[0].includes(colors[i])) colorIndex = i;
              }
              const products = [
                ...allProducts.filter(
                  (p) =>
                    p.color.includes(colors[colorIndex]) && p._id != prod._id
                ),
                ...allProducts,
              ];
              setForyouProd(products.slice(0, 3));
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        } else {
          setForyouProd(allProducts.slice(0, 3));
        }
        // handle success
        const temp = response.data.slice(0, 3);
        setForyouProd(temp);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [orders]);

  return (
    <Body>
      <h2>For You</h2>
      <Container>
        {foryouProd.map((product) => (
          <Product
            key={product._id}
            product={product}
            onCart={() => addProduct(product)}
          />
        ))}
      </Container>
    </Body>
  );
};

export default Foryou;
