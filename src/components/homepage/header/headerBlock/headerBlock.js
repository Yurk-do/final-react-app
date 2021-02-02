import React from "react";
import "./headerBlock.css";
import MainTitle from "../mainTitle/mainTitle.js";
import RegistrationButtons from "../registrationButtons/registrationButtons.js";
import CurrentDate from "../currentDate/currentDate.js";
import UserIcon from "../userIcon/userIcon.js";
import SideBar from "../navbar/sideBar/sideBar";
import { navbarData } from "../navbar/data/navbarData.js";
import Mediaquery from "../../../mediaquery/mediaquery.js";

const HeaderBlock = (props) => (
  <div id="header-container">
    <Mediaquery
      componentLarge={<CurrentDate />}
      componentMedium={null}
      componentSmall={<SideBar />}
    />
    <MainTitle />
    <Mediaquery
      componentLarge={<RegistrationButtons />}
      componentMedium={<RegistrationButtons />}
      componentSmall={null}
    />
    <UserIcon />
  </div>
);

export default HeaderBlock;
