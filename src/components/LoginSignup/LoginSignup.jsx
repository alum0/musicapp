import React, { useTransition } from "react";
import "./LoginSignup.css";
import axios from "axios";
//import Button from "@mui/material/Button";

const LoginSignup = () => {
  function sendUser(e) {
    e.preventDefault();
    let login = document.getElementById("login").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if (login === "" || email === "" || pass === "") {
      alert("Fill in all fields");
    } else {
      const url = "http://localhost:80/login-signup";
      const userData = {
        login: login,
        password: pass,
        email: email,
      };
      axios
        .post(url, userData)
        .then((response) => {
          console.log("Данные записаны в базу", response.data);
        })
        .catch((error) => {
          console.log("Ашибка", error.message);
        });
    }
  }
  return (
    <div className="countainer">
      <div className="header">
        <div className="text">Sign up</div>
      </div>
      <form action="" method="post" onSubmit={sendUser}>
        <div className="inputs">
          <div className="input">
            <input id="login" type="text" placeholder="Login" name="login" />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input id="email" type="email" placeholder="Email" name="email" />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
        </div>
        <div className="submit-container">
          <button>SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
