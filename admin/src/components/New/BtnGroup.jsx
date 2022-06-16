import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Popup from "./Popup";
import Update from "../Forms/Update";
import axios from "axios";
import { Alert } from "@mui/material";

const BtnGroup = (props) => {
  const deleteProduct = (id) => {
    alert("This Product Is Deleted");
    axios.delete(`http://localhost:5000/api/products/${id}`);
    props.toggleChange()
  };

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined primary button group"
    >
      <Popup
        button={
          <Button color="success" startIcon={<EditIcon />}>
            Update
          </Button>
        }
      >
        <Update product={props.product} toggleChange={props.toggleChange}/>
      </Popup>
      <Button
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => deleteProduct(props.product._id)}
      >
        Delete
      </Button>
    </ButtonGroup>
  );
};
export default BtnGroup;
