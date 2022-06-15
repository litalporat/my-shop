import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import styled, { css } from "styled-components";
import BtnGroup from "../components/New/BtnGroup";
import { Button } from "@mui/material";
import updateProduct from "../Hooks/ProductCrud";
import Popup from "../components/New/Popup";
import AddIcon from "@mui/icons-material/Add";
import Create from "../components/Forms/Create";

const Body = styled.div``;
const Header = styled.div`
  width: 100%;
  height: 15%;
`;
const Table = styled.div`
  width: 100%;
  height: 75%;
`;

function getFullName(params) {
  console.log(params);
}

const Products = () => {
  const [data, setData] = useState();
  const [rows, setRows] = useState([]);

  const columnsTemp = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "productName",
      headerName: "Product",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      type: "number",
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 300,
      renderCell: (params) => (
        <BtnGroup product={params.row.product} />
      ),
    },
  ];

  // const updateProduct = (product) => {
  //   console.log(product.displayName);
  // };

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
    // updateProduct();
  }, []);

  useEffect(() => {
    if (data) {
      const temp = [];
      data.map((obj, index) => {
        temp.push({
          id: obj._id,
          mainPhoto: obj.imgDisplay[0],
          productName: obj.displayName,
          price: obj.price,
          description: obj.description,
          product: obj,
        });
      });
      setRows(temp);
    }
  }, [data]);

  return (
    <Body>
      <Header></Header>
      <Table>
      <Popup
        button={
          <Button color="success" startIcon={<AddIcon />}>
            New Product
          </Button>
        }
      >
        <Create />
      </Popup>
        <DataGrid
          rows={rows}
          columns={columnsTemp}
          pageSize={9}
          rowsPerPageOptions={[3]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Table>
      {/* {data && data.map((obj) => <div>{obj.displayName}</div>)} */}
    </Body>
  );
};

export default Products;
