import React from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import Popup from "./Popup";
import { Fab } from "@mui/material";
import { Box, Divider } from "@mui/material";
import styled from "styled-components";

const PhotoDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  margin: 0px 40px;
`;

const Image = styled.img`
  width: 14rem;
  border-radius: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
  width: 98%;
  justify-content: center;
`;

const PopProducts = (props) => {
  return (
    <Popup
      button={
        <Fab color="primary" aria-label="edit" size={"small"}>
          <OpenInFullIcon />
        </Fab>
      }
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: 4,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Divider>Products</Divider>
        <GridContainer>
          {props.products.map((product) => (
            <PhotoDiv>
              <Image src={product.img} />
              <p>ID: {product._id}</p>
              <p>Size: {product.size}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Price: {product.price}</p>
            </PhotoDiv>
          ))}
        </GridContainer>
      </Box>
    </Popup>
  );
};

export default PopProducts;
