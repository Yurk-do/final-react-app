import React from "react";
import LinksSocialNet from "components/linksSocialNet/linksSocialNet.js";
import "components/footer/footer.css";
import Copyright from "components/footer/copyright.js";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className="footer">
      <IconContext.Provider value={{ color: "white" }}>
        <LinksSocialNet />
        <Copyright />
      </IconContext.Provider>
    </div>
  );
}

export default Footer;
