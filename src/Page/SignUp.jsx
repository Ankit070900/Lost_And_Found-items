import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password " placeholder="Confirm Password" />
      <button>Sing Up</button>
    </div>
  );
};

export default SignUp;
