import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <h2>Our Shopping Site</h2>
            </div>

            <ul className='navbar__links'>
                <li>
                    <Link to="/">
                        <i className='fas fa-home'></i>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <i className='fas fa-on'></i>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/shop">
                        <i className='fas fa-shop'></i>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/shoes">
                        <i className='fas fa-shoes'></i>
                        Shoes
                    </Link>
                </li>
                <li>
                    <Link className="cart__link" to="/cart">
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span className='cartlogo__badge'>0</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar