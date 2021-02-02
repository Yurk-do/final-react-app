import React, { useState } from "react";
import "./navbar.css";
import Media from "react-media";
import SideBar from "./sideBar/sideBar.js";
import SimpleMenu from "./menu/menu.js";
import { navbarData } from "./data/navbarData.js";

const Navbar = () => {
  return (
    <>
      <Media query="(min-width: 830px)">
        {(matches) => {
          return matches ? <SimpleMenu navbarData={navbarData} /> : null;
        }}
      </Media>
    </>
  );
};

export default Navbar;
