import {Link} from 'react-router-dom'
import './Pruduct.css'
import Normal from  '../../images/normal.jpg'
import ArrowBtn from '../ArrowBtn'

const Index = props => {
    return (
        <div className="container">
            <span className='image-span'/>
            <div className="product-body">
                <div className="flex-row">
                <button className='view-btn' onClick={props.onClick}> View </button>
                <center >
                    <div className="title"> {props.product.title} </div> 
                    <div className="price"> {props.product.price} </div> 
                </center>
                <button className='like-btn'>
                    <i className='fas fa-heart'></i>
                </button>
                </div>
                <tr></tr>
                <sbr />
                <ArrowBtn content={"Add To Cart"}/>
            </div>
        </div>
    )
}

export default Index