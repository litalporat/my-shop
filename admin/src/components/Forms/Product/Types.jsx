import { MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Types = (props) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/categories')
      .then(function (response) {
        // handle success
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <TextField
        id="type"
        select
        label="Type"
        fullWidth
        value={props.value}
        name={'type'}
        onChange={props.onChange}
        helperText="Please Select A Type"
      >
        {categories.map((option) => (
          <MenuItem id="type" key={option.id} value={option.name}>
            {option.displayName}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Types;
