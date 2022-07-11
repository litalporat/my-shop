import HeartContext from "../../Contexts/HeartContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/ProductView/ForUView";
import CartContext from "../../Contexts/CartContext";
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
