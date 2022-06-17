import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import createProduct from "../../Hooks/ProductCrud";
import { IconButton, CircularProgress } from "@mui/material";
import { Box, Button, Divider, TextField } from "@mui/material";
import axios from "axios";
import Types from "./Product/Types";

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
    displayName: " ",
    color: [],
    type: [],
    discount: 0,
    price: " ",
    description: " ",
    stock: { xs: 0, s: 0, m: 0, l: 0, os: 0 },
    imgDisplay: [],
    imgDetails: [],
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");
    console.table(values);
    // createProduct(values);
    axios.post(`http://localhost:5000/api/products/`, values);
    props.toggleChange();
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };
  const handleTypeChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleObjChange = (event) => {
    let temp = { ...values.stock };
    temp[event.target.id] = Number(event.target.value);
    setValues({ ...values, stock: temp });
    console.log(values.stock);
  };
  const handleArrChange = (event) => {
    let temp = [...values[event.target.id]];
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
      <>
        <GridContainer>
          <TextField
            id="displayName"
            label="Product Name"
            onChange={handleChange}
          />
          <Types onChange={handleTypeChange} value={values.type}/>
          <TextField
            id="color"
            label="Color"
            onChange={handleArrChange}
          />
          <TextField
            id="discount"
            label="Discount"
            onChange={handleChange}
          />
          <TextField
            id="price"
            label="Price"
            type="number"
            onChange={handleChange}
          />
        </GridContainer>
        <TextField
          id="description"
          label="Description"
          onChange={handleChange}
          fullWidth
          multiline
          maxRows={4}
        />
      </>
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
            onChange={handleObjChange}
          />
        ))}
      </Box>
      <Divider>Display Photos</Divider>
      <center>
        <IconButton onClick={() => addPhoto("imgDisplay")}>
          <AddIcon />
        </IconButton>
        <GridContainer>
          {values.imgDisplay.map((img, index) => (
            <PhotoDiv>
              <Image src={img} index={index} />
              <IconButton
                onClick={() => removePhoto("imgDisplay", index)}
              >
                <RemoveIcon />
              </IconButton>
              <TextField
                id={`imgDisplay`}
                inputProps={{ alt: index }}
                label={`Display Photo ${index}`}
                defaultValue={img}
                onChange={handleArrChange}
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
        <GridContainer>
          {values.imgDetails.map((img, index) => (
            <PhotoDiv>
              <Image src={img} index={index} />
              <IconButton
                onClick={() => removePhoto("imgDetails", index)}
              >
                <RemoveIcon />
              </IconButton>
              <TextField
                id={`imgDetails`}
                inputProps={{ alt: index }}
                label={`Details Photo ${index}`}
                defaultValue={img}
                type={"url"}
                onChange={handleArrChange}
              />
            </PhotoDiv>
          ))}
        </GridContainer>
      </center>
      <Button variant="contained" onClick={handleSubmit}>
        Create <CircularProgress />
      </Button>
    </Box>
  );
};

export default Create;
