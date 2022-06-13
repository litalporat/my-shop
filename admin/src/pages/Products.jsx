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
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "productName",
    headerName: "Product",
    width: 300,
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
    width: 250,
    renderCell: (params) => <BtnGroup update={params.row.update} />,
  },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description:
  //       "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
];

const rowsTemp = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
];

const Products = () => {
  const [data, setData] = useState();
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

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
          id: index + 1,
          mainPhoto: obj.images.display[0],
          productName: obj.displayName,
          price: obj.price,
          update: () => updateProduct(obj),
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
