import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Popup from "./Popup";
import Update from "../Forms/Update";

//onClick={props.update}

const BtnGroup = (props) => {
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
        <Update product={props.product} />
      </Popup>
      <Button color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </ButtonGroup>
  );
};
export default BtnGroup;
