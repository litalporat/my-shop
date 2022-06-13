import React from "react";
import SideBarBtn from "../components/Buttons/SideBarBtn";
import FacebookLog from "../components/FacebookComp/Login";
import FacebookShare from "../components/FacebookComp/Share";
import CartProduct from "../components/ProductView/ListViewProduct";
import Map from "../components/NewComp/Map";
import { IconBtn } from "../components/Buttons";
import CurrenctSelect from "../components/CurrencySelector";

const Test = () => {
  return (
    <>
      <SideBarBtn title={"test"} side={"left"}>
        <CartProduct />
      </SideBarBtn>
      <div>
        <FacebookLog />
        <FacebookShare />
      </div>
      <div style={{ margin: "10rem" }}>
        <Map lat={31.998629} lng={34.775545} />
      </div>
      <div>
        <CurrenctSelect />
      </div>
    </>
  );
};

export default Test;
