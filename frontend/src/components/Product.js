import {Link} from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <img src="" alt=""/>
            <div>
                <p>
                    Name: lala
                </p>
                <p>
                    Description: lalalalala
                </p>
                <p>
                    Price: 4.99$
                </p>
            </div>
            <Link to="/product/1"></Link>
        </div>
    )
}

export default Product