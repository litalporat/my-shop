import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Body = styled.div``;
const Title = styled.h1``;
const Form = styled.div``;

const Update = (product) => {
    const [values, setValues] = React.useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });
    
    const handleSubmit = (event) => {
      event.preventDefault();
      alert("You have submitted the form.");
    };

  const handleChange = (prop) => (event) => {
      console.log(prop);
      setValues({ ...values, [prop]: event.target.value });
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
    <Body>
      <Box
        component="form"
        sx={{
            maxWidth: '100%',
          }}
      >
        <div>
          <TextField
            id="outlined-read-only-input"
            label="Product ID"
            defaultValue={product.product.id}
            InputProps={{
                readOnly: true,
            }}
            />
          <TextField
            id="outlined"
            label="Product Name"
            defaultValue={product.product.productName}
            onChange={handleChange}
          />
          <TextField
            id="outlined-number"
            label="Price"
            type="number"
            defaultValue={product.product.price}
            InputLabelProps={{
              shrink: true,
            }}
          />
        <TextField
          id="fullWidth"
          label="Description"
          defaultValue={"Desc"}
          fullWidth
        />
        </div>
        <Button variant="contained" onClick={handleChange}>Update</Button>
      </Box>
    </Body>
  );
};

export default Update;
