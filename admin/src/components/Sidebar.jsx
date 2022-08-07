import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../images/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import auth from "../auth/auth";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const navigate = useNavigate();

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  // console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            My Sh<span>o</span>p
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <Link
                to={item.link}
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </Link>
            );
          })}
          {/* signoutIcon */}
          <div
            className="menuItem"
            onClick={() =>
              auth.logout(() => {
                navigate("/login");
              })
            }
          >
            <UilSignOutAlt />
            Logout
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
