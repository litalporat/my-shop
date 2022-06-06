import React from 'react';
import SideBarBtn from '../components/Buttons/SideBarBtn';
import CartProduct from '../components/NewComp/CartProduct';
import Footer from '../components/Sections/Footer';

const Test = () => {
    return (
        <>
        <SideBarBtn title={"test"} side={"left"}>
        <CartProduct/>
        </SideBarBtn>
        </>
    );
};

export default Test;