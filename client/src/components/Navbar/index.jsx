import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>

            <ul className='navbar__links'>
            <div className='navbar__logo'>
                <h2>Our Shopping Site</h2>
            </div>
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