import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Popup from "./Popup";
import Update from "../Forms/Update";
import axios from "axios";
import { Alert, Fab, IconButton } from "@mui/material";

const BtnGroup = (props) => {
  const deleteProduct = (id) => {
    alert("This Product Is Deleted");
    axios.delete(`http://localhost:5000/api/products/${id}`);
    props.toggleChange();
  };

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined primary button group"
    >
      <Popup
        button={
          <Fab color="primary" aria-label="edit" size={"small"}>
            <EditIcon />
          </Fab>
        }
      >
        <Update
          product={props.product}
          toggleChange={props.toggleChange}
        />
      </Popup>
      <Fab
        color="error"
        size={"small"}
        onClick={() => deleteProduct(props.product._id)}
      >
        <DeleteIcon />
      </Fab>
    </ButtonGroup>
  );
};
export default BtnGroup;
