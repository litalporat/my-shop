import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import styled, { css } from "styled-components";
import BtnGroup from "../components/New/BtnGroup";
import { Button } from "@mui/material";
import Popup from "../components/New/Popup";
import AddIcon from "@mui/icons-material/Add";
import Create from "../components/Forms/Product/Create";

const Body = styled.div``;
const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: 5px;
  margin: 10px;
`;
const Header = styled.div`
  background: #ffffffa1;
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
`;
const Table = styled.div`
  width: 100%;
  height: 80%;
`;
const Image = styled.img`
  width: 3rem;
`;

const Products = () => {
  const [data, setData] = useState();
  const [rows, setRows] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const toggleChange = () => {
    setIsChange(!isChange);
  };

  const columnsTemp = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "mainPhoto",
      headerName: "Photo",
      width: 80,
      renderCell: (params) => (
        <Image src={params.row.mainPhoto} />
      )
    },
    {
      field: "productName",
      headerName: "Product",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    {
      field: "color",
      headerName: "Color",
      width: 120,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 100,
      renderCell: (params) => (
        <BtnGroup
          item={params.row.product}
          deleteAction={params.row.deleteAction}
          toggleChange={toggleChange}
          what="products"
        />
      ),
    },
  ];

  // Getting the data from the DB.
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
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
          mainPhoto: obj.imgDisplay[0],
          productName: obj.displayName,
          price: obj.price,
          type: obj.type,
          color: obj.color,
          product: obj,
        });
      });
      setRows(temp);
    }
  }, [data]);

  return (
    <Body>
      <Header>
        <Title>Products Manager</Title>
      </Header>
      <Table>
        <Popup
          button={
            <Button color="success" startIcon={<AddIcon />}>
              New Product
            </Button>
          }
        >
          <Create toggleChange={toggleChange} />
        </Popup>
        <DataGrid
          rows={rows}
          columns={columnsTemp}
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
      </Table>
    </Body>
  );
};

export default Products;
