import { Box, Button, Divider, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 14rem;
  border-radius: 10px;
`;

const PhotosContainer = styled.div`
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

const Update = (product) => {
  const [values, setValues] = React.useState({
    productName: product.product.displayName,
    price: product.product.price,
    description: product.product.description,
    imgDisplay: product.product.imgDisplay,
    imgDetails: product.product.imgDetails,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");
    console.table(values);
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };
  const handleImageChange = (event) => {
    console.log(event.target.id);
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
        width: "100%",
        display: "flex",
        gap: 4,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Divider>Product Details</Divider>
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          gap: 5,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: "100%",
            gap: 5,
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-read-only-input"
            label="Product ID"
            defaultValue={product.product._id}
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
        <Box
          sx={{
            display: "flex",
            maxWidth: "100%",
            gap: 5,
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-read-only-input"
            label="Product ID"
            defaultValue={product.product._id}
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
        <Box
          sx={{
            display: "flex",
            maxWidth: "100%",
            gap: 5,
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-read-only-input"
            label="Product ID"
            defaultValue={product.product._id}
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
      <Divider>Display Photos</Divider>
      <PhotosContainer>
        {values.imgDisplay.map((img, index) => (
          <PhotoDiv>
            <Image src={img} />
            <TextField
              id={`imgDisplay`}
              index={index}
              label={`Display Photo ${index}`}
              defaultValue={img}
              onChange={handleImageChange}
            />
          </PhotoDiv>
        ))}
      </PhotosContainer>
      <Divider>Details Photos</Divider>
      <PhotosContainer>
        {values.imgDetails.map((img, index) => (
          <PhotoDiv>
            <Image src={img} />
            <TextField
              id={`imgDisplay`}
              index={index}
              label={`Details Photo ${index}`}
              defaultValue={img}
              onChange={handleImageChange}
            />
          </PhotoDiv>
        ))}
      </PhotosContainer>
      <Button variant="contained" onClick={handleSubmit}>
        Update <CircularProgress />{" "}
      </Button>
    </Box>
  );
};

export default Update;
