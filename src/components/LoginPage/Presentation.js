import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login-page-image.png";
import "../../styles/loginPage.scss";
const Presentation = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="cards">
        <div className="leftHalf">
          <img src={loginImg} className="loginImage" alt="login" />
        </div>
        <div className="formContainer">
          <h1 style={{ fontSize: "34px" }}>Welcome Back !</h1>
          <p>Please Login to your account</p>
          <div className="form">
            <div className="password">
              <label htmlFor="email" className="loginPageLabels">
                Email Address or User Name
              </label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="Please enter your mail ID"
              />
            </div>
            <div className="password">
              <label htmlFor="id_password" className="loginPageLabels">
                Password
              </label>
              <div className="passwordContainer">
                <input
                  className="input"
                  type={visible ? "text" : "password"}
                  name="password"
                  required=""
                  id="id_password"
                  placeholder="**********"
                />
                <div>
                  {visible ? (
                    <AiOutlineEye
                      size={24}
                      onClick={() => setVisible(!visible)}
                      className="eyeLogo"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={24}
                      onClick={() => setVisible(!visible)}
                      className="eyeLogo"
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <Link to="/signup" className="signUp">
                Don't Have an Account?
              </Link>
            </div>
            <div className="loginButtonContainer">
              <button className="loginButton">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
