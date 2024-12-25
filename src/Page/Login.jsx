import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot Password?</a>
      <button>Login</button>
      <p>
        Not a Member?{" "}
        <a href="#" onClick={() => setLogin(false)}>
          {" "}
          Sign Up Now
        </a>
      </p>
    </div>
  );
};

export default Login;
