import { Box, Button, Divider, IconButton, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Image = styled.img`
  width: 14rem;
  border-radius: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.two ? "50% 50%" : "33.3% 33.3% 33.3%"};
  gap: 10px;
`;

const PhotoDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

const Update = (props) => {
  const [values, setValues] = React.useState({
    _id: props.order._id,
    firstName: props.order.firstName,
    lastName: props.order.lastName,
    country: props.order.country,
    city: props.order.city,
    address: props.order.address,
    zipCode: props.order.zipCode,
    total: props.order.total,
    createdAt: props.order.createdAt,
  });

  const [products, setProducts] = useState(props.order.products);

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
      .patch(`http://localhost:5000/api/orders/${props.order._id}`, order, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("key")}`,
        },
      })
      .then(() => {
        alert("You have submitted the form.");
      })
      .catch(() => {
        alert("Please make sure all inputs are valid.");
      });
    props.toggleChange();
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    let sum = 0;
    products.map((prod) => {
      sum += prod.price * prod.quantity;
    });
    setValues({ ...values, total: sum });
    document.getElementById("total").value = sum;
  }, [products]);

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
        event.target.id == `price${event.target.alt}`
          ? "price"
          : event.target.id;
      prod[name] = event.target.value;
      setProducts(temp);
    }
  };
  const addProduct = () => {
    let temp = [...products];
    temp.push({
      _id: "Enter Product Id",
      size: "Enter Size",
      quantity: "Enter Quantity",
      price: "Enter Price",
    });
    setProducts(temp);
  };
  const removeProduct = (index) => {
    let temp = [...products];
    temp.pop(temp[index]);
    setProducts(temp);
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
      <GridContainer two>
        <TextField
          id="outlined-read-only-input"
          label="ORDER ID"
          defaultValue={values._id}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="CREATED AT"
          defaultValue={values.createdAt}
          InputProps={{
            readOnly: true,
          }}
        />
      </GridContainer>
      <GridContainer>
        <TextField
          id="firstName"
          label="First Name"
          defaultValue={values.firstName ? values.firstName : "No Data"}
          onChange={handleChange}
        />
        <TextField
          id="lastName"
          label="Last Name"
          onChange={handleChange}
          defaultValue={values.lastName ? values.lastName : "No Data"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="country"
          label="Country"
          onChange={handleChange}
          defaultValue={values.country ? values.country : "No Data"}
        />
        <TextField
          id="city"
          label="City"
          defaultValue={values.city ? values.city : "No Data"}
          onChange={handleChange}
        />
        <TextField
          id="address"
          label="Address"
          defaultValue={values.address ? values.address : "No Data"}
          onChange={handleChange}
        />
        <TextField
          id="zipCode"
          label="Zip Code"
          defaultValue={values.zipCode ? values.zipCode : "No Data"}
          onChange={handleChange}
        />
      </GridContainer>

      <Divider>Products</Divider>
      <IconButton onClick={() => addProduct()}>
        <AddIcon />
      </IconButton>
      <GridContainer>
        {products.map((prod, index) => (
          <PhotoDiv>
            <Image src={prod.img} index={index} />
            <IconButton onClick={() => removeProduct(index)}>
              <RemoveIcon />
            </IconButton>
            <TextField
              id={`_id`}
              index={index}
              inputProps={{ alt: index }}
              label={`Product ${index}`}
              defaultValue={prod._id}
              onChange={handleProductChange}
            />
            <TextField
              id={`size`}
              index={index}
              inputProps={{ alt: index }}
              label={`Product size`}
              defaultValue={prod.size}
              onChange={handleProductChange}
            />
            <TextField
              id={`quantity${index}`}
              index={index}
              inputProps={{ alt: index }}
              label={`Product quantity`}
              defaultValue={prod.quantity}
              onChange={handleProductChange}
            />
            <TextField
              id={`price${index}`}
              index={index}
              inputProps={{ alt: index }}
              label={`Price`}
              defaultValue={prod.price}
              onChange={handleProductChange}
            />
          </PhotoDiv>
        ))}
      </GridContainer>
      <center>
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
        Update <CircularProgress />{" "}
      </Button>
    </Box>
  );
};

export default Update;
