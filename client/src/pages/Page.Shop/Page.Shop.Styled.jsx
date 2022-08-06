import styled from "styled-components";

const ShopPageBody = styled.div`
  margin-top: 5%;
`;
const ShopList = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;
const FitlersStyle = styled.div`
  background: #d8d2d2;
  margin: 8px 22px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px -10px black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RowFlex = styled.div`
  display: flex;
  gap: 1rem;
`;

export { ShopPageBody, ShopList, FitlersStyle, RowFlex };
