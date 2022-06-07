import "./Foryou.css";
import HeartContext from "../../Contexts/HeartContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Product from "../../components/Product";
import CartContext from "../../Contexts/CartContext";
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
    const tempIds = [...heartsIds, ...defaultForyouId];
    return tempIds.length > 3 ? tempIds.slice(0, 3) : tempIds;
  });

  const [foryouProd, setForyouProd] = useState([]);
  // const temp = [];
  // foryouId.map((id) => {
  //   axios
  //     .get(`http://localhost:5000/api/products/${id}`)
  //     .then(function (response) {
  //       // handle success
  //       temp.push(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // });
  // return temp;
  // });

  useEffect(() => {
    const heartsIds = hearts.map((prod) => prod._id);
    const tempForyouId = [...heartsIds, ...defaultForyouId].slice(0, 3);
    setForyouId(tempForyouId);
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
    <div>
      <h2>For You</h2>
      <div className="foryou-container">
        {console.log("in return statement")}
        {foryouProd.map(
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
      </div>
    </div>
  );
};

export default Foryou;
