import React from "react";
import "./registrationButtons.css";

const RegistrationButtons = (props) => (
  <div id="registration-block">
    <input
      id="button-subscribe"
      type="button"
      value="subscribe"
      onClick={null}
      className="registration-buttons"
    />
    <input
      id="button-sign-in"
      type="button"
      value="sign in"
      onClick={null}
      className="registration-buttons"
    />
  </div>
);

export default RegistrationButtons;
