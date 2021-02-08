import React from "react";
import "components/footer/copyright.css";

function Copyright() {
  return (
    <p className="copyright">
      Copyright &copy; Yury Dabranau {new Date().getFullYear()}. All rights
      reserved
    </p>
  );
}

export default Copyright;
