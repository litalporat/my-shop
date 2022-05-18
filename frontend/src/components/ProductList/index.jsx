import React from 'react';
import Product from '../Product'
import './ProductList.css'

const Index = () => {
    return (
        <div className="product-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
};

export default Index;