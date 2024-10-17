import React, { act, useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="countainer">
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="Login" />
        </div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>
        ) : (
          <div className="input">
            <input type="email" placeholder="Email" />
          </div>
        )}
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div />
        ) : (
          <div className="input">
            <input type="password" placeholder="Password" />
          </div>
        )}
      </div>
      {action === "Sign Up" ? (
        <div />
      ) : (
        <div className="forgot-password" action>
          Lost Password?<span> Click HERE!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
