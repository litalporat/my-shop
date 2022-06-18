import React, { useContext, useState } from "react";
import CartContext from "../../Contexts/CartContext";
import "./Cart.css";
import { Box, Button, Divider, TextField } from "@mui/material";
import { Card } from "@mui/material";
import { Grid } from "@mui/material";
import Quantity from "../../components/Buttons/QuantityBtn";
import CartProduct from "../../components/ProductView/ListViewProduct";
import styled from "styled-components";
// import Box from "@mui/material/Box";

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

  const sum = () => {
    let sum = 0;
    products.map((prod) => (sum += prod.price * prod.quantity));
    return sum;
  };

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
          {products.map(
            (product) => (
              console.log(product),
              (
                <CartProduct product={product} delete={removeProduct}>
                  <Quantity
                    disable={product.stock[product.size]}
                    quantity={product.quantity}
                    product={product}
                  />
                </CartProduct>
              )
            )
          )}
          <Strong>{`Total: ${sum()} ₪`}</Strong>
        </Box>
        <Divider>Details</Divider>
        <Box
          sx={{
            width: "90%",
            alignSelf: "center",
          }}
        >
          <GridContainer>
            <TextField label="First Name" />
            <TextField label="Last Name" />
            <TextField label="Country" />
            <TextField label="City" />
            <TextField label="Address" />
            <TextField label="Zip Code" />
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
            <TextField label="Card Number" />
            <TextField label="Expiration Date" />
            <TextField label="Cvc Number" />
            <TextField label="ID" />
          </GridContainer>
        </Box>
        <Button
          variant="contained"
          sx={{ width: "90%", height: "50px", alignSelf: "center" }}
        >
          Place Order
        </Button>
      </Card>
    </Grid>
  );
};

export default CartPage;
