import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const LoginSignUp = () => {
  return (
    <center className="bodys">
      <div className="main_container">
        <SignUp />
        <Login />
      </div>
    </center>
  );
};

export default LoginSignUp;
