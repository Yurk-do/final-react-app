import React, { useState } from "react";
import "components/header/navbar/navbar.css";
import Media from "react-media";
import SimpleMenu from "components/header/navbar/simpleMenu/simpleMenu.js";
import { navbarData } from "components/header/navbar/data/navbarData.js";

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
