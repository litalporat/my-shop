import React, { useState } from 'react';
import Product from '../../components/Product'
import Popup from '../../components/PopUp'
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
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    const changeContent = (product) => {
      console.log(product);
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