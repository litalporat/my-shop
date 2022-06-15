import { Box, Button, Divider, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

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

const Create = () => {
  const [values, setValues] = React.useState({
    productName: " ",
    price: " ",
    description: " ",
    imgDisplay: " ",
    imgDetails: " ",
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

  const newPhoto = () => {
    document.getElementById("display").appendChild(
        <PhotoDiv>
          <IconButton>
            <AddIcon />
          </IconButton>
          <Image src={""} />
          <TextField
            id={`imgDisplay`}
            index={""}
            label={`Display Photo `}
            defaultValue={""}
            onChange={""}
          />
        </PhotoDiv>
    );
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
            id="productName"
            label="Product Name"
            onChange={handleChange}
          />
          <TextField id="type" label="Type" onChange={handleChange} />
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
            id="color"
            label="Color"
            onChange={handleChange}
          />
          <TextField
            id="discount"
            label="Discount"
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
            id="price"
            label="Price"
            type="number"
            onChange={handleChange}
          />
        </Box>
      </Box>
      <TextField
        id="description"
        label="Description"
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
        <TextField
          id="xs"
          label="XS"
          type="number"
          onChange={handleChange}
        />{" "}
        <TextField
          id="s"
          label="S"
          type="number"
          onChange={handleChange}
        />{" "}
        <TextField
          id="m"
          label="M"
          type="number"
          onChange={handleChange}
        />{" "}
        <TextField
          id="l"
          label="L"
          type="number"
          onChange={handleChange}
        />{" "}
        <TextField
          id="xl"
          label="XL"
          type="number"
          onChange={handleChange}
        />
        <TextField
          id="os"
          label="One-Size"
          type="number"
          onChange={handleChange}
        />
      </Box>
      <Divider>Display Photos</Divider>
      <IconButton onClick={newPhoto}>
        <AddIcon />
      </IconButton>
      <PhotosContainer id="display"></PhotosContainer>
      <Divider>Details Photos</Divider>
      <IconButton onClick={newPhoto}>
        <AddIcon />
      </IconButton>
      <PhotosContainer id="details"></PhotosContainer>
      <Button variant="contained" onClick={handleSubmit}>
        Create <CircularProgress />{" "}
      </Button>
    </Box>
  );
};

export default Create;
