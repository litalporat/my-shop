import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

//Contexts
import CartContext from "../../contexts/CartContext";
import CurrencyContext from "../../contexts/CurrencyContext";

//Components
import Quantity from "../../components/Buttons/QuantityBtn";
import CartProduct from "../../components/ProductView/Product.List/Product.List";
import { Box, Button, Divider, TextField, Card, Grid } from "@mui/material";

//Styles
import { GridContainer, Strong } from "./Page.Cart.Styled";

const CartPage = () => {
  const { products, removeProduct, setProducts } = useContext(CartContext);
  const { currency } = useContext(CurrencyContext);
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
  const rates = JSON.parse(localStorage.getItem("rates"));

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
      axios
        .post("http://localhost:5000/api/orders/", values)
        .then(() => {
          alert("Thank you! your order has been placed successfuly.");
          setProducts([]);
          window.location.replace(window.location.origin);
        })
        .catch(() => {
          alert("Please make sure all inputs are valid.");
        });

      setSubmit(!submit);
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
            {`Total: ${(sum() * rates[currency]).toFixed(2)} `}
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
