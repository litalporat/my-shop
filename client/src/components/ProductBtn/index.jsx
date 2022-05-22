import React, { useState } from 'react';
import './ProductBtn.css'

const ProductBtn = props => {

    return (
        <button className='show-btn' onClick={props.onClick}>
            {props.title}
        </button>
    );
};

export default ProductBtn;