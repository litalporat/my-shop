import "./Foryou.css";
import HeartContext from "../../Contexts/HeartContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/ProductView/CardView";
import CartContext from "../../Contexts/CartContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 3rem;
  width: 100vw;
  justify-content: center;
  padding: 3rem;
`;

const Foryou = () => {
  const { hearts } = useContext(HeartContext);
  const { addProduct } = useContext(CartContext);
  // const [defaultForyou, setdefaultForyou] = useState([]);
  const [foryouProd, setForyouProd] = useState([]);

  useEffect(() => {
    if (hearts.length >= 3) {
      setForyouProd(hearts.slice(0, 3));
    } else {
      axios
        .get(`http://localhost:5000/api/products`)
        .then(function (response) {
          // handle success
          const temp = [...hearts, ...response.data].slice(0, 3);
          console.log(temp);
          const arrayUniqueById = [
            ...new Map(temp.map((item) => [item["_id"], item])).values(),
          ];
          console.log(arrayUniqueById);
          if (arrayUniqueById.length < 3) {
            arrayUniqueById.push(response.data[4]);
          }
          setForyouProd(arrayUniqueById);
          console.log(arrayUniqueById);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [hearts]);

  return (
    <div>
      <h2>For You</h2>
      <Container>
        {foryouProd &&
          foryouProd.map((product) => (
            <Product
              product={product}
              size="small"
              content="ADD TO CART"
              onCart={() => addProduct(product)}
            />
          ))}
      </Container>
    </div>
  );
};

export default Foryou;
