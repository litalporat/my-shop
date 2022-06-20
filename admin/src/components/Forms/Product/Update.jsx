import { Box, Button, Divider, IconButton, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import Types from "./Types";

const Image = styled.img`
  width: 14rem;
  border-radius: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
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
    displayName: props.product.displayName,
    price: props.product.price,
    color: props.product.color,
    type: props.product.type,
    discount: props.product.discount,
    description: props.product.description,
    imgDisplay: props.product.imgDisplay,
    imgDetails: props.product.imgDetails,
    stock: { xs: 0, s: 0, m: 0, l: 0, os: 0, ...props.product.stock },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");
    console.log(values.imgDisplay);
    axios.patch(
      `http://localhost:5000/api/products/${props.product._id}`,
      values,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("key")}`,
        },
      }
    );
    props.toggleChange();
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };
  const handleStockChange = (event) => {
    let temp = { ...values.stock };
    temp[event.target.id] = Number(event.target.value);
    setValues({ ...values, stock: temp });
  };
  const handleTypeChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleImageChange = (event) => {
    let temp = [...values[event.target.id]];
    console.log(event.target);
    temp[event.target.alt] = event.target.value;
    setValues({ ...values, [event.target.id]: temp });
  };
  const addPhoto = (id) => {
    let temp = [...values[id]];
    temp.push("Enter An URL");
    setValues({ ...values, [id]: temp });
  };
  const removePhoto = (id, index) => {
    let temp = [...values[id]];
    temp.pop(temp[index]);
    setValues({ ...values, [id]: temp });
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
      <Divider>Product Details</Divider>
      <TextField
        id="outlined-read-only-input"
        label="Product ID"
        defaultValue={props.product._id}
        InputProps={{
          readOnly: true,
        }}
      />
      <GridContainer>
        <TextField
          id="displayName"
          label="Product Name"
          defaultValue={values.displayName ? values.displayName : "No Data"}
          onChange={handleChange}
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
        <Types onChange={handleTypeChange} value={values.type} />
        <TextField
          id="type"
          label="Type"
          onChange={handleChange}
          defaultValue={values.type ? values.type : "No Data"}
        />
        <TextField
          id="color"
          label="Color"
          defaultValue={values.color ? values.color : "No Data"}
          onChange={handleChange}
        />
        <TextField
          id="discount"
          label="Discount"
          defaultValue={values.discount ? values.discount : "No Data"}
          onChange={handleChange}
        />
      </GridContainer>
      <TextField
        id="description"
        label="Description"
        defaultValue={values.description ? values.description : "No Data"}
        onChange={handleChange}
        fullWidth
        multiline
        maxRows={4}
      />
      <Divider>Stock</Divider>
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {Object.keys(values.stock).map((size) => (
          <TextField
            id={size}
            label={size.toUpperCase()}
            type="number"
            defaultValue={values.stock[size] ? values.stock[size] : "No Data"}
            onChange={handleStockChange}
          />
        ))}
      </Box>
      <Divider>Display Photos</Divider>
      <center>
        <IconButton onClick={() => addPhoto("imgDisplay")}>
          <AddIcon />
        </IconButton>
        <br />
        <br />
        <GridContainer>
          {values.imgDisplay.map((img, index) => (
            <PhotoDiv>
              <Image src={img} index={index} />
              <IconButton onClick={() => removePhoto("imgDisplay", index)}>
                <RemoveIcon />
              </IconButton>
              <TextField
                id={`imgDisplay`}
                index={index}
                inputProps={{ alt: index }}
                label={`Display Photo ${index}`}
                defaultValue={img}
                onChange={handleImageChange}
              />
            </PhotoDiv>
          ))}
        </GridContainer>
      </center>
      <Divider>Details Photos</Divider>
      <center>
        <IconButton onClick={() => addPhoto("imgDetails")}>
          <AddIcon />
        </IconButton>
        <br />
        <br />
        <GridContainer>
          {values.imgDetails.map((img, index) => (
            <PhotoDiv>
              <Image src={img} index={index} />
              <IconButton onClick={() => removePhoto("imgDetails", index)}>
                <RemoveIcon />
              </IconButton>
              <TextField
                id={`imgDisplay`}
                index={index}
                inputProps={{ alt: index }}
                label={`Details Photo ${index}`}
                defaultValue={img}
                onChange={handleImageChange}
              />
            </PhotoDiv>
          ))}
        </GridContainer>
      </center>
      <Button variant="contained" onClick={handleSubmit}>
        Update <CircularProgress />{" "}
      </Button>
    </Box>
  );
};

export default Update;
