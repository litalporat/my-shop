import React, { useContext, useEffect, useState } from "react";
import Product from "../../components/Product";
import Popup from "../../components/PopUp";
import axios from "axios";
import "./Shop.css";
import CartContext from "../../Contexts/CartContext";

const ProductPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setcontent] = useState();
  const [data, setData] = useState();
  const { addProduct } = useContext(CartContext);

  console.log(data);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const changeContent = (product) => {
    setcontent(product);
  };

  return (
    <div className="shop-body">
      {data &&
        data.map((product) => (
          <Product
            product={product}
            onClick={() => {
              changeContent(product);
              togglePopup();
            }}
            onCart={() => addProduct(product)}
            text="ADD TO CART"
          />
        ))}
      {isOpen && <Popup content={content} handleClose={togglePopup} />}
    </div>
  );
};

export default ProductPage;
