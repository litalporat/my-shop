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
  const [defaultForyou, setdefaultForyou] = useState([]);
  const [foryouProd, setForyouProd] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products`)
      .then(function (response) {
        // handle success
        const tempdefault = response.data;
        tempdefault.slice(0, 3);
        setdefaultForyou(tempdefault.slice(0, 3));
        setForyouProd();
        console.log(tempdefault.slice(0, 3));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setForyouProd([...defaultForyou]);
    console.log(foryouProd);
  }, defaultForyou);

  // useEffect(() => {
  //   console.log(foryouId);
  //   const temp = [...foryouProd];
  //   foryouId.map((id) => {
  //     axios
  //       .get(`http://localhost:5000/api/products/${id}`)
  //       .then(function (response) {
  //         // handle success
  //         temp.push(response.data);
  //         console.log(response.data);
  //         if (temp.length == 3) setForyouProd(temp);
  //         else if (temp.length > 3) setForyouProd(temp.slice(0, 3));
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       });
  //   });
  // }, [foryouId]);

  // const [foryouId, setForyouId] = useState(() => {
  //   const heartsIds = hearts.map((prod) => prod._id);
  //   const tempIds = [...defaultForyouId];
  //   heartsIds.map((id) => {
  //     if (!defaultForyouId.includes(id)) tempIds.push(id);
  //   });
  //   return tempIds.length > 3 ? tempIds.slice(0, 3) : tempIds;
  // });

  useEffect(() => {
    const tempForyou = [...defaultForyou];
    if (hearts) hearts.map((h) => tempForyou.push(h));
    setForyouProd(tempForyou.slice(0, 3));
    console.log(tempForyou);
  }, hearts);

  return (
    <div>
      <h2>For You</h2>
      <Container>
        {console.log("in return statement")}
        {foryouProd &&
          foryouProd.map(
            (product) => (
              console.log("in map loop"),
              (
                <Product
                  product={product}
                  size="small"
                  content="ADD TO CART"
                  onCart={() => addProduct(product)}
                />
              )
            )
          )}
      </Container>
    </div>
  );
};

export default Foryou;
