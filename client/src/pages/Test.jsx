import React from 'react';
import SideBarBtn from '../components/Buttons/SideBarBtn';
import Product from '../components/NewComp/ListViewProduct';

const Test = () => {
    return (
        <>
        <SideBarBtn title={"test"} side={"left"}>
        <Product/>
        </SideBarBtn>
        </>
    );
};

export default Test;