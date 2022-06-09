import React from "react";
import SideBarBtn from "../components/Buttons/SideBarBtn";
import FacebookLog from "../components/FacebookComp/Login";
import FacebookShare from "../components/FacebookComp/Share";
import CartProduct from "../components/NewComp/CartProduct";
import Footer from "../components/Sections/Footer";

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
    </>
  );
};

export default Test;
