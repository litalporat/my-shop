import React, { useState } from 'react';
import Product from '../../components/Product'
import ProductBtn from '../../components/ProductBtn'
import './Shop.css'
import Cabinet from '../../images/Room1/Cabinet.jpg'
import Light from '../../images/Room1/Light.jpg'
import Chair from '../../images/Room1/Chair.jpg'

const products = [
    {
        title: "cabinet",
        price: "150$",
        photo: "../../images/Room1/Cabinet.jpg",
    },
    {
        title: "chair",
        price: "120$",
        photo: {Chair},
    },
    {
        title: "light",
        price: "50$",
        photo: {Light},
    }
]


const ProductPage = () => {
    const [first, setfirst] = useState()

    const openProduct = prod => {
        setfirst(<Product
        product={prod}
        />)
        console.log(prod.photo)

    }

    return (
        <div className='shop-body'>
            <div className="product-container">
                <div className="prod-cont"> {first} </div>
            <div className="image"> </div>
            <div className="btns-cont">
            {
                products.map((prod) => (
                    <ProductBtn title={prod.title} onClick={() => openProduct(prod)}/>
                ))
            }
            {/* <img src={Photos[0]} alt="" /> */}
            </div>

            </div>
        </div>
    );
};

export default ProductPage;