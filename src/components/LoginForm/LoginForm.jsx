import React from "react";

import useInput from "../../hooks/useInput.js";

import logo from "../../assets/logo.png";

import { getTokenAPI } from "../../services/services";

import "./LoginForm.css";

const LoginForm = ({ onLogin }) => {
  const {
    value: emailValue,
    isValid: isEmailValid,
    isTouched: emailIsTouched,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const {
    value: passValue,
    isValid: isPassValid,
    isTouched: passIsTouched,
    valueChangeHandler: passChangeHandler,
    reset: resetPass,
  } = useInput((value) => value.trim() !== "" && value.length > 6);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isPassValid && isEmailValid) {
      getTokenAPI({
        email: emailValue,
        password: passValue,
      })
        .then((data) => {
          localStorage.setItem("token", data.accessToken); // JSON data parsed by `data.json()` call
          onLogin(true);
        })
        .catch((err) => alert(`${err}! Please provide correct email or password.`));
    } else {
      alert("All fields are required!");
    }

    resetEmail();
    resetPass();
  };
  let errEmail = "mb-0 test";
  let errPass = "mb-0 test";

  // const errEmail = <p className="mb-0 test">Invalid email</p>;
  
  (!isEmailValid && emailIsTouched) &&( errEmail = "mb-0 error-msg");
  (!isPassValid && passIsTouched) &&( errPass = "mb-0 error-msg");
  

  return (
    <div className="vh-100 font-fam">
      <div className="d-flex justify-content-center align-items-center bg-color h-100">
        <div className="d-flex justify-content-center align-items-center flex-column bg-img form-wrapper">
          <img className="logo" src={logo} alt="logo" />
          <div className="mini-container border-rad">
            <form className="px-4 py-3" onSubmit={onSubmitHandler}>
              <div className="form-group">
                <input
                  type="email"
                  className=" fas form-input-style border-rad placeholder-font"
                  placeholder="&#xf0e0;  enter email"
                  value={emailValue}
                  onChange={emailChangeHandler}
                />
              <p className={errEmail}>Invalid email format</p>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className=" fas form-input-style border-rad placeholder-font"
                  placeholder="&#xf13e;  enter password"
                  value={passValue}
                  onChange={passChangeHandler}
                />
                 <p className={errPass}>Invalid password format!</p>
              </div>
              <button
                type="submit"
                className="w-100 button-col border-rad mb-4 mt-2"
              >
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;