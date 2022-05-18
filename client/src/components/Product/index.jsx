import {Link} from 'react-router-dom'
import './Pruduct.css'

const Index = () => {
    return (
        <div className="container">
            <div className="product-img">
            </div>
            <div className="flex-row">
            <div className="product-body">
                <div className="title"> Product Title</div>
                <div className="price"> 150$ </div>
            </div>
                <button className="product-btn">+</button>
            </div>
        </div>
    )
}

export default Index