import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartContext from '../../contexts/CartContext';
import fetchCatagories from '../../utils/fetchCatagories';
import { BasicBtn, IconBtn, MenuBtn, SideBarBtn } from '../Buttons';
import CurrenctSelect from '../CurrencySelector';
import { CartList, LikeList } from '../Lists';
import './Navbar.css';
import SearchBar from './search';

const BtnsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Navbar = () => {
  const { products } = useContext(CartContext);
  const [navbar, setNavBar] = useState('navbar');
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetchCatagories().then((data) => {
      setCategories(data);
    });
  }, []);

  window.onwheel = (e) => {
    if (e.deltaY > 0) setNavBar('navbar down');
    if (e.deltaY < 0) setNavBar('navbar up');
    if (e.x >= 920) setNavBar('navbar');
  };

  return (
    <div>
      <nav className={navbar}>
        <Link to="/">
          <h2
            style={{ textDecoration: 'none', color: 'var(--lightnude-color)' }}
          >
            OurShop
          </h2>
        </Link>
        <ul className="navbar__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <MenuBtn title={'Shop'} items={categories} />
          </li>
        </ul>
        <BtnsDiv>
          <CurrenctSelect />
          <SearchBar />
          <SideBarBtn
            title={'Likes'}
            side={'right'}
            button={
              <IconBtn type={'secondary'}>
                <i className="fas fa-heart"></i>
              </IconBtn>
            }
          >
            <LikeList />
          </SideBarBtn>
          <SideBarBtn
            title={'Cart'}
            side={'right'}
            button={
              <BasicBtn
                title={'Cart'}
                type={'secondary'}
                icon={<i className="fas fa-shopping-cart"></i>}
              >
                <span className="cartlogo__badge">{products.length}</span>
              </BasicBtn>
            }
          >
            <CartList />
          </SideBarBtn>
        </BtnsDiv>
      </nav>
    </div>
  );
};

export default Navbar;
