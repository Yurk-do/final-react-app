import React from "react";
import "./simpleMenu.css";
import { Link } from "react-router-dom";

const SimpleMenu = ({ navbarData }) => {
  return (
    <>
      <div className="container-simple-menu">
        <ul className="simple-menu">
          {navbarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default SimpleMenu;
