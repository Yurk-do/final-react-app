import "components/header/headerBlock/headerBlock.css";
import MainTitle from "components/header/mainTitle/mainTitle.js";
import RegistrationButtons from "components/header/registrationButtons/registrationButtons.js";
import CurrentDate from "components/header/currentDate/currentDate.js";
import UserIcon from "components/header/userIcon/userIcon.js";
import SideBar from "components/header/navbar/sideBar/sideBar.js";
import Mediaquery from "components/mediaquery/mediaquery.js";

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
