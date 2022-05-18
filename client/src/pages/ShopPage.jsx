import React from 'react';
import ProductList from '../components/ProductList'
import CartBtn from '../components/CartBtn'

const ProductPage = () => {
    return (
        <div>
            <CartBtn/>
            <ProductList/> 
        </div>
    );
};

export default ProductPage;