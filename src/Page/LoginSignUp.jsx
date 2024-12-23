import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { Link } from "react-router-dom";

const LoginSignUp = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="login_container">
      <div className="form_container">
        <div className="form_toggle">
          <button
            className={login ? "active" : ""}
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          <button
            className={!login ? "active" : ""}
            onClick={() => setLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {login ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default LoginSignUp;
