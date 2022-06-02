import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2>My Shop</h2>
            <ul className='navbar__links'>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/shop">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/test">
                        Test
                    </Link>
                </li>
            </ul>
            <ul className='navbar__links'>
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