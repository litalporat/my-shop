import { Box, Button, CircularProgress, Divider, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import styled from "styled-components";

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
    axios.post(`http://localhost:5000/api/locations/`, values, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("key")}`,
      },
    });
    props.toggleChange();
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
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
      <Divider>Location Details</Divider>

      <GridContainer>
        <TextField id="name" label="Name" onChange={handleChange} />
        <TextField id="lat" label="Latitude" onChange={handleChange} />
        <TextField id="lng" label="Longitude" onChange={handleChange} />
      </GridContainer>
      <Button variant="contained" onClick={handleSubmit}>
        Create <CircularProgress />
      </Button>
    </Box>
  );
};

export default Create;
