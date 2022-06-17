import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Popup from "./Popup";
import UpdateProduct from "../Forms/Product/Update";
import UpdateLocation from "../Forms/Location/Update";
import axios from "axios";
import { Alert, Fab, IconButton } from "@mui/material";

const BtnGroup = (props) => {
  const deleteFunc = (what, id) => {
    alert("This Product Is Deleted");
    axios.delete(`http://localhost:5000/api/${what}/${id}`);
    props.toggleChange();
  };

  return (
    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
      <Popup
        button={
          <Fab color="primary" aria-label="edit" size={"small"}>
            <EditIcon />
          </Fab>
        }
      >
        {props.what == "products" && (
          <UpdateProduct
            product={props.item}
            toggleChange={props.toggleChange}
          />
        )}
        {props.what == "locations" && (
          <UpdateLocation
            location={props.item}
            toggleChange={props.toggleChange}
          />
        )}
      </Popup>
      <Fab
        color="error"
        size={"small"}
        onClick={() => deleteFunc(props.what, props.item._id)}
      >
        <DeleteIcon />
      </Fab>
    </ButtonGroup>
  );
};
export default BtnGroup;
