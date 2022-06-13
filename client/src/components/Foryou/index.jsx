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
  flex-direction:column;
`;



const Foryou = () => {
  const { hearts } = useContext(HeartContext);
  const { addProduct } = useContext(CartContext);

  const defaultForyouId = [
    "628a3950cd566118fe095cbc",
    "628a3950cd566118fe095cbd",
    "628a3950cd566118fe095cc5",
  ];

  const [foryouId, setForyouId] = useState(() => {
    const heartsIds = hearts.map((prod) => prod._id);
    const tempIds = [...defaultForyouId];
    heartsIds.map((id) => {
      if (!defaultForyouId.includes(id)) tempIds.push(id);
    });
    return tempIds.length > 3 ? tempIds.slice(0, 3) : tempIds;
  });

  const [foryouProd, setForyouProd] = useState([]);

  useEffect(() => {
    const heartsIds = hearts.map((prod) => prod._id);
    const tempForyouId = [...defaultForyouId];
    heartsIds.map((id) => {
      if (!defaultForyouId.includes(id)) tempForyouId.push(id);
    });
    setForyouId(tempForyouId.slice(0, 3));
  }, hearts);

  useEffect(() => {
    const temp = [...foryouProd];
    foryouId.map((id) => {
      axios
        .get(`http://localhost:5000/api/products/${id}`)
        .then(function (response) {
          // handle success
          temp.push(response.data);
          temp.length == 3
            ? setForyouProd(temp)
            : setForyouProd(temp.slice(0, 3));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    });
  }, foryouId);

  return (
    <Body>
      <h2>For You</h2>
      <Container>
        {foryouProd.map((product) => (
          <Product
            product={product}
            onCart={() => addProduct(product)}
          />
        ))}
      </Container>
    </Body>
  );
};

export default Foryou;
