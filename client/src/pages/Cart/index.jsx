import React, { useContext, useState } from "react";
import CartContext from "../../Contexts/CartContext";
import "./Cart.css";
import { Box, Button, Divider, TextField, Card, Grid } from "@mui/material";
import Quantity from "../../components/Buttons/QuantityBtn";
import CartProduct from "../../components/ProductView/ListViewProduct";
import styled from "styled-components";
import axios from "axios";
import CurrencyContext from "../../Contexts/CurrencyContext";
import { useEffect } from "react";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  gap: 20px;
  justify-content: center;
`;

const Strong = styled.strong`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

const CartPage = () => {
  const { products, removeProduct } = useContext(CartContext);
  const { currency, rates } = useContext(CurrencyContext);
  const [values, setValues] = useState({
    products: "",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    address: "",
    zipCode: 0,
    total: 0,
  });
  const [submit, setSubmit] = useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  const sum = () => {
    let sum = 0;
    products.map((prod) => (sum += prod.price * prod.quantity));
    return sum;
  };
  const order = (event) => {
    event.preventDefault();
    const temp = [];
    products.map((prod) => {
      temp.push({
        _id: prod._id,
        size: prod.size,
        quantity: prod.quantity,
        price: prod.price,
        img: prod.imgDisplay[0],
      });
    });
    const total = sum();

    setValues({ ...values, products: temp, total: total });
    setSubmit(!submit);
  };

  useEffect(() => {
    console.log("in useEffect");
    if (submit) {
      console.log(values);
      axios.post("http://localhost:5000/api/orders/", values);
      alert("Thank you! your order has been placed successfuly.");
      setSubmit(!submit);
      axios
        .get("http://localhost:5000/api/orders")
        .then((response) => console.log(response.data));
    }
  }, [submit]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        component="form"
        sx={{
          width: "60%",
          display: "flex",
          gap: 4,
          justifyContent: "center",
          flexDirection: "column",
          margin: "140px 0px",
          padding: "40px 20px",
        }}
      >
        <Divider>Checkout</Divider>
        <Box
          sx={{
            width: "70%",
            alignSelf: "center",
          }}
        >
          {products.map((product) => (
            <Box sx={{ padding: "10px" }}>
              <CartProduct product={product} delete={removeProduct}>
                <Quantity
                  disable={product.stock[product.size]}
                  product={product}
                />
              </CartProduct>
            </Box>
          ))}
          <Strong>
            {`Total: ${(sum() * rates[currency]).toFixed(2)} `}{" "}
            <small style={{ padding: " 1px 5px" }}>{currency}</small>
          </Strong>
        </Box>
        <Divider>Details</Divider>
        <Box
          sx={{
            width: "90%",
            alignSelf: "center",
          }}
        >
          <GridContainer>
            <TextField
              id="firstName"
              label="First Name"
              onChange={handleChange}
            />
            <TextField
              id="lastName"
              label="Last Name"
              onChange={handleChange}
            />
            <TextField id="country" label="Country" onChange={handleChange} />
            <TextField id="city" label="City" onChange={handleChange} />
            <TextField id="address" label="Address" onChange={handleChange} />
            <TextField id="zipCode" label="Zip Code" onChange={handleChange} />
          </GridContainer>
        </Box>
        <Divider>Payment</Divider>
        <Box
          sx={{
            width: "90%",
            alignSelf: "center",
          }}
        >
          <GridContainer>
            <TextField id="cardNumber" label="Card Number" />
            <TextField id="expirationDate" label="Expiration Date" />
            <TextField id="cvcNumber" label="Cvc Number" />
            <TextField id="customerId" label="ID" />
          </GridContainer>
        </Box>
        <Button
          variant="contained"
          sx={{ width: "90%", height: "50px", alignSelf: "center" }}
          onClick={order}
        >
          Place Order
        </Button>
      </Card>
    </Grid>
  );
};

export default CartPage;
