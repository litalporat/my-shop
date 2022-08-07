import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Create from "../../components/Forms/Location/Create";
import axios from "axios";
import BtnGroup from "../../components/Layouts/ButtonGroup/BtnGroup";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Popup from "../../components/New/Popup";
import "../pages.css";

const Locations = () => {
  const [data, setData] = useState();
  const [rows, setRows] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const toggleChange = () => {
    setIsChange(!isChange);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "lat",
      headerName: "Latitude",
      width: "150",
    },
    {
      field: "lng",
      headerName: "longitude",
      width: "150",
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 100,
      renderCell: (params) => (
        <BtnGroup
          item={params.row.location}
          deleteAction={params.row.deleteAction}
          toggleChange={toggleChange}
          what="locations"
        />
      ),
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/locations")
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [isChange]);

  useEffect(() => {
    if (data) {
      const temp = [];
      data.map((obj, index) => {
        temp.push({
          id: obj._id,
          name: obj.name,
          lat: obj.lat,
          lng: obj.lng,
          __v: obj.__v,
          location: obj,
        });
      });
      setRows(temp);
    }
  }, [data]);

  return (
    <div>
      <div className="header">
        <div className="title">Locations Manager</div>
      </div>
      <div className="table">
        <Popup
          button={
            <Button color="success" startIcon={<AddIcon />}>
              New Location
            </Button>
          }
        >
          <Create toggleChange={toggleChange} />
        </Popup>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          checkboxSelection
          disableSelectionOnClick
          density={""}
          sx={{
            boxShadow: 5,
            padding: 1,
            borderRadius: "10px",
            background: "#ffffffa1",
            "& .MuiDataGrid-cell:hover": {
              color: "primary",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Locations;
