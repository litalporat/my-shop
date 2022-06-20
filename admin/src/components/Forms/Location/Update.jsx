import { Box, Button, Divider, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import styled from "styled-components";
import axios from "axios";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  gap: 10px;
`;

const Update = (props) => {
  const [values, setValues] = React.useState({
    name: props.location.name,
    lat: props.location.lat,
    lng: props.location.lng,
  });

  console.log(props.location);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");
    console.table(values);
    axios.patch(
      `http://localhost:5000/api/locations/${props.location._id}`,
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
      <TextField
        id="outlined-read-only-input"
        label="Location ID"
        defaultValue={props.location._id}
        InputProps={{
          readOnly: true,
        }}
      />
      <GridContainer>
        <TextField
          id="name"
          label="Location Name"
          defaultValue={values.name ? values.name : "No Data"}
          onChange={handleChange}
        />
        <TextField
          id="lat"
          label="Latitude"
          type="number"
          onChange={handleChange}
          defaultValue={values.lat ? values.lat : "No Data"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="lng"
          label="Longitude"
          type="number"
          onChange={handleChange}
          defaultValue={values.lng ? values.lng : "No Data"}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </GridContainer>
      <Button variant="contained" onClick={handleSubmit}>
        Update <CircularProgress />{" "}
      </Button>
    </Box>
  );
};

export default Update;
