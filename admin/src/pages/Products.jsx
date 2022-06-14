import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import styled, { css } from "styled-components";
import BtnGroup from "../components/New/BtnGroup";
import { Button } from "@mui/material";

const Body = styled.div``;
const Header = styled.div`
  width: 100%;
  height: 30vh;
`;
const Table = styled.div`
  width: 100%;
  height: 50vh;
`;

function getFullName(params) {
  console.log(params);
}

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
    editable: true,
    type: "number",
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 300,
    renderCell: (params) => <BtnGroup update={params.row.update} product={params.row}/>,
  },
];

const Products = () => {
  const [data, setData] = useState();
  const [rows, setRows] = useState([]);

  const updateProduct = (product) => {
    console.log(product.displayName);
  };

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
  }, []);

  useEffect(() => {
    if (data) {
      const temp = [];
      data.map((obj, index) => {
        temp.push({
          id: obj._id,
          mainPhoto: obj.images.display[0],
          productName: obj.displayName,
          price: obj.price,
          description:obj.description,
        });
      });
      setRows(temp);
    }
  }, [data]);

  return (
    <Body>
      <Header></Header>
      <Table>
        <DataGrid
          rows={rows}
          columns={columnsTemp}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Table>
      {/* {data && data.map((obj) => <div>{obj.displayName}</div>)} */}
    </Body>
  );
};

export default Products;
