import { Box, Button, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 15rem;
  border-radius: 10px;
`;

const Update = (product) => {
  const [values, setValues] = React.useState({
    productName: product.product.productName,
    price: product.product.price,
    description: product.product.description,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");
    console.table(values);
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{
        maxWidth: "100%",
        display: "flex",
        gap: 2,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Image src={product.product.mainPhoto} />
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <TextField
          id="outlined-read-only-input"
          label="Product ID"
          defaultValue={product.product.id}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="price"
          label="Price"
          type="number"
          onChange={handleChange}
          defaultValue={values.price ? values.price : "No Data"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="productName"
          label="Product Name"
          defaultValue={
            values.productName ? values.productName : "No Data"
          }
          onChange={handleChange}
        />
      </Box>
      <TextField
        id="description"
        label="Description"
        defaultValue={
          values.description ? values.description : "No Data"
        }
        onChange={handleChange}
        fullWidth
        multiline
        maxRows={4}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Update <CircularProgress />{" "}
      </Button>
    </Box>
  );
};

export default Update;
