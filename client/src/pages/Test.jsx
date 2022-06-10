import React from "react";
import SideBarBtn from "../components/Buttons/SideBarBtn";
import FacebookLog from "../components/FacebookComp/Login";
import FacebookShare from "../components/FacebookComp/Share";
import CartProduct from "../components/NewComp/CartProduct";
import Map from "../components/NewComp/Map";
import Foryou from "../components/Foryou";
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
    <div style={{margin: "10rem"}}>
        <Map
        lat={31.998629}
        lng={34.775545}/>
    </div>
    </>
  );
};

export default Test;
