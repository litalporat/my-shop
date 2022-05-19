import {Link} from 'react-router-dom'
import './Pruduct.css'

const Index = props => {
    return (
        <div className="container">
            <div className={`product-img ${props.product.title}`}>
                </div>
            <div className="flex-row">
            <div className="product-body">
                <div className="title"> {props.product.title} </div>
                <div className="price"> {props.product.price} </div>
            </div>
                <button className="product-btn">+</button>
            </div>
        </div>
    )
}

export default Index