import { Link } from "react-router-dom";
import "./Navbar.css";
import CartContext from "../../Contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import { MenuBtn, SideBarBtn, IconBtn, BasicBtn, PopupBtn } from "../Buttons";
import { LikeList, CartList } from "../Lists";
import Login from "../../Login";
import styled from "styled-components";
import axios from "axios";
import SearchBar from "./search";
import CurrenctSelect from "../CurrencySelector";

const BtnsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Navbar = () => {
  const { products } = useContext(CartContext);
  const [navbar, setNavBar] = useState("navbar");
  const [isLogin, setIsLogin] = useState(false);
  const [loginTitle, setLoginTitle] = useState("Login");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then(function (response) {
        // handle success
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  window.onwheel = (e) => {
    if (e.deltaY > 0) setNavBar("navbar down");
    if (e.deltaY < 0) setNavBar("navbar up");
    if (e.x >= 920) setNavBar("navbar");
  };

  useEffect(() => {
    if (localStorage.getItem("key")) {
      console.log("Im holding a key");
      setLoginTitle("Logout");
    }
  }, []);

  useEffect(() => {
    isLogin == true ? setLoginTitle("Logout") : setLoginTitle("Login");
  }, [isLogin]);

  return (
    <div>
      <nav className={navbar}>
        <Link to="/">
          <h2 style={{ textDecoration: "none" }}>My Shop</h2>
        </Link>
        <ul className="navbar__links">
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <MenuBtn title={"Shop"} items={categories} />
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <BtnsDiv>
          <CurrenctSelect />
          <SearchBar />
          <SideBarBtn
            title={"Notification"}
            side={"right"}
            button={
              <IconBtn type={"secondary"}>
                <i className="fa-solid fa-bell"></i>
              </IconBtn>
            }
          >
            {/* Notification List */}
          </SideBarBtn>
          <SideBarBtn
            title={"Likes"}
            side={"right"}
            button={
              <IconBtn type={"secondary"}>
                <i className="fas fa-heart"></i>
              </IconBtn>
            }
          >
            <LikeList />
          </SideBarBtn>
          <SideBarBtn
            title={"Cart"}
            side={"right"}
            button={
              <BasicBtn
                title={"Cart"}
                type={"secondary"}
                icon={<i className="fas fa-shopping-cart"></i>}
              >
                <span className="cartlogo__badge">{products.length}</span>
              </BasicBtn>
            }
          >
            <CartList />
          </SideBarBtn>
          <PopupBtn
            title={"Login"}
            size={"S"}
            button={<BasicBtn title={loginTitle} type={"secondary"} />}
          >
            <Login setIsLogin={setIsLogin} />
          </PopupBtn>
        </BtnsDiv>
      </nav>
    </div>
  );
};

export default Navbar;
