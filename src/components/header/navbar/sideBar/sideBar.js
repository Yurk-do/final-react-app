import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "components/header/navbar/sideBar/sideBar.css";
import { IconContext } from "react-icons";
import { navbarData } from "components/header/navbar/data/navbarData.js";
import LinksSocialNet from "components/linksSocialNet/linksSocialNet.js";
import Copyright from "components/footer/copyright.js";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <IconContext.Provider value={{ color: "white" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {navbarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <LinksSocialNet />
          <Copyright />
        </nav>
      </IconContext.Provider>
    </>
  );
};
export default SideBar;
