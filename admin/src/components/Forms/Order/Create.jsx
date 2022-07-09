import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, CircularProgress } from "@mui/material";
import { Box, Button, Divider, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
    firstName: " ",
    lastName: "",
    country: "",
    city: "",
    address: "",
    zipCode: 0,
    total: 0,
  });
  const [products, setProducts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      firstName: values.firstName,
      lastName: values.lastName,
      country: values.country,
      city: values.city,
      address: values.address,
      zipCode: values.zipCode,
      total: values.total,
      products: products,
    };
    axios
      .post(`http://localhost:5000/api/orders/`, order)
      .then(() => {
        alert("You have submitted the form.");
      })
      .catch(() => {
        alert("Please make sure all inputs are valid.");
      });
    props.toggleChange();
  };

  useEffect(() => {
    let sum = 0;
    products.map((prod) => (sum += prod.price * prod.quantity));
    setValues({ ...values, total: sum });
    document.getElementById("total").value = sum;
  }, [products]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  const addProduct = () => {
    let temp = [...products];
    temp.push({
      _id: "Enter Product Id",
      size: "Enter Size",
      quantity: "Enter Quantity",
      price: "Enter price",
    });
    setProducts(temp);
  };

  const removeProduct = (index) => {
    let temp = [...products];
    temp.pop(temp[index]);
    setProducts(temp);
  };

  const handleProductChange = (event) => {
    let temp = [...products];
    if (event.target.id == "_id") {
      axios
        .get(`http://localhost:5000/api/products/${event.target.value}`)
        .then((response) => {
          const prod = {
            _id: response.data._id,
            size: response.data.size,
            quantity: 1,
            price: response.data.price,
            img: response.data.imgDisplay[0],
          };
          temp[event.target.alt] = prod;
          document.getElementById(`price${event.target.alt}`).value =
            prod.price;
          document.getElementById(`quantity${event.target.alt}`).value =
            prod.quantity;
          setProducts(temp);
        });
    } else {
      const prod = temp[event.target.alt];
      const name =
        event.target.id == "size"
          ? "size"
          : event.target.id.replace(/[0-9]/g, "");
      prod[name] = event.target.value;
      setProducts(temp);
    }
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
        <TextField id="firstName" label="First Name" onChange={handleChange} />
        <TextField id="lastName" label="Last Name" onChange={handleChange} />
        <TextField id="country" label="Country" onChange={handleChange} />
        <TextField id="city" label="City" onChange={handleChange} />
        <TextField id="address" label="Adress" onChange={handleChange} />
        <TextField id="zipCode" label="Zip Code" onChange={handleChange} />
      </GridContainer>
      <Divider>Products</Divider>
      <center>
        <IconButton onClick={addProduct}>
          <AddIcon />
        </IconButton>
        <GridContainer>
          {products.map((prod, index) => (
            <PhotoDiv>
              <Image src={prod.img} index={index} />
              <IconButton onClick={() => removeProduct(index)}>
                <RemoveIcon />
              </IconButton>{" "}
              <TextField
                id={`_id`}
                inputProps={{ alt: index }}
                label={`Product ${index}`}
                defaultValue={prod._id}
                onChange={handleProductChange}
              />
              <TextField
                id={`size`}
                inputProps={{ alt: index }}
                label={`Product size `}
                defaultValue={prod.size}
                onChange={handleProductChange}
              />
              <TextField
                id={`quantity${index}`}
                inputProps={{ alt: index }}
                label={`Product quantity`}
                defaultValue={prod.quantity}
                onChange={handleProductChange}
              />
              <TextField
                id={`price${index}`}
                inputProps={{ alt: index }}
                label={`Price`}
                defaultValue={prod.price}
                onChange={handleProductChange}
              />
            </PhotoDiv>
          ))}
        </GridContainer>
        <TextField
          id="total"
          label="Total"
          defaultValue={values.total}
          onChange={handleChange}
          InputProps={{
            readOnly: true,
          }}
        />
      </center>

      <Button variant="contained" onClick={handleSubmit}>
        Create <CircularProgress />
      </Button>
    </Box>
  );
};

export default Create;
