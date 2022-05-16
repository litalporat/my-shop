import './HomeScreen.css'
import Product from '../components/Product'
const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <div>lastest products</div>
            <div>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default HomeScreen