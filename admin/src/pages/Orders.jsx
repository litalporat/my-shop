import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import BtnGroup from "../components/New/BtnGroup";
import Popup from "../components/New/Popup";
import "./pages.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import Create from "../components/Forms/Order/Create";
const Orders = () => {
  const [data, setData] = useState();
  const [rows, setRows] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const toggleChange = () => {
    setIsChange(!isChange);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "firstName",
      headerName: "First Name",
      width: "100",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: "100",
    },
    {
      field: "country",
      headerName: "Country",
      width: "100",
    },
    {
      field: "city",
      headerName: "City",
      width: "100",
    },
    {
      field: "address",
      headerName: "Address",
      width: "100",
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      width: "100",
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
      .get("http://localhost:5000/api/orders")
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
          firstName: obj.firstName,
          lastName: obj.lastName,
          country: obj.country,
          city: obj.city,
          address: obj.address,
          zipCode: obj.zipCode,
          cardNumber: obj.cardNumber,
          expirationDate: obj.expirationDate,
          cvcNumber: obj.cvcNumber,
          customerId: obj.customerId,
        });
      });
      setRows(temp);
    }
  }, [data]);

  return (
    <div>
      <div className="header">
        <div className="title">Orders Manager</div>
      </div>{" "}
      <div className="table">
        <Popup
          button={
            <Button color="success" startIcon={<AddIcon />}>
              New Order
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

export default Orders;
