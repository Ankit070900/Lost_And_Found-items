import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const emailElement = useRef();
  const passwordElement = useRef();
  const handleLogin = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        ref={emailElement}
        onChange={handleLogin}
      />
      <input
        type="password"
        placeholder="Password"
        ref={passwordElement}
        onChange={handleLogin}
      />
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
