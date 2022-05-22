import React, { useState } from 'react';
import Product from '../../components/Product'
import Popup from '../../components/PopUp'
// const axios = require('axios');
import axios from 'axios'
import './Shop.css'

const products = [
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
    {
        title: "cabinet",
        price: "150$",
    },
]




const ProductPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setcontent] = useState();

    axios({
        method: 'get',
        url: 'http://localhost:5000/api/products',
      })
        .then(function (response) {
          console.table(response.data[0])
        });

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    const changeContent = (product) => {
      setcontent(product)
    }

    return (
        <div className='shop-body'>
            {
                products.map(product =>(
                    <Product
                    product={product}
                    onClick={()=> {changeContent(product);togglePopup()}}
                    />
                    ))
                }
            {
                isOpen && <Popup
                content={content}
                handleClose={togglePopup}
                />
            }
        </div>
    );
};

export default ProductPage;