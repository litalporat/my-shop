import React, { useEffect, useState } from 'react';
import Product from '../../components/Product'
import Popup from '../../components/PopUp'
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
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
        .then(function (response) {
          // handle success
          setData(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    },[])
    
    console.log(data)

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    const changeContent = (product) => {
      setcontent(product)
    }

    return (
        <div className='shop-body'>
            {
                data && data.map(product =>(
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