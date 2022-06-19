import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, CircularProgress } from "@mui/material";
import { Box, Button, Divider, TextField } from "@mui/material";
import axios from "axios";

const Image = styled.img`
  width: 14rem;
  border-radius: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  gap: 10px;
  width: 98%;
`;

const PhotoDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

const Create = (props) => {
  const [values, setValues] = React.useState({
    name: " ",
    lat: 0,
    lng: 0,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");
    console.table(values);
    // createProduct(values);
    axios.post(`http://localhost:5000/api/locations/`, values);
    props.toggleChange();
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };
  const addProduct = () => {
    let temp = values["products"];
    temp.push("Enter Product id");
    setValues(...values, { products: temp });
  };

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        display: "flex",
        gap: 4,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Divider>Order Details</Divider>
      <GridContainer>
        <IconButton onClick={addProduct}>
          <AddIcon />
        </IconButton>
        {/* {values.products.map((prod, index) => {
          <TextField
            id={`products`}
            inputProps={{ alt: index }}
            label={`Product ${index}`}
            defaultValue={prod.id}
            // onChange={handleArrChange}
          />;
        })} */}
      </GridContainer>

      <GridContainer>
        <TextField id="firstName" label="First Name" onChange={handleChange} />
        <TextField id="lastName" label="Last Name" onChange={handleChange} />
        <TextField id="country" label="Country" onChange={handleChange} />
        <TextField id="city" label="City" onChange={handleChange} />
        <TextField id="address" label="Adress" onChange={handleChange} />
        <TextField id="zipCode" label="Zip Code" onChange={handleChange} />
        <TextField
          id="cardNumber"
          label="Card Number"
          onChange={handleChange}
        />
        <TextField
          id="expirationDate"
          label="Expiration Date"
          onChange={handleChange}
        />
        <TextField id="cvcNumber" label="Cvc Number" onChange={handleChange} />
        <TextField id="customerId" label="ID" onChange={handleChange} />
      </GridContainer>
      <Button variant="contained" onClick={handleSubmit}>
        Create <CircularProgress />
      </Button>
    </Box>
  );
};

export default Create;
