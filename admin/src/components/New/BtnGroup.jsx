import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import Popup from "./Popup";

//onClick={props.update}

const BtnGroup = (props) => {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined primary button group"
    >
      <Popup button={<Button>View</Button>} />
      <Popup button={<Button color="success">Update</Button>} />
      <Button color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </ButtonGroup>
  );
};
export default BtnGroup;
