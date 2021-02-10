import React from "react";

import LoginForm from "components/login/loginForm.js";
import "components/Pages/login/loginPage.css";

function LoginPage() {
  const submit = (data) => {
    alert(data.email + "  " + data.password);
  };
  return (
    <div className="login-box">
      <div className="heading-bar">
        <h2>Login Page</h2>
        <LoginForm submit={submit} />
      </div>
    </div>
  );
}
export default LoginPage;
