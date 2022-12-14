// Imports

import { React } from "react";
import { Link } from "react-router-dom";
import "../../styles/signupPage.scss";
//SignUp component

const Presentation = () => {
  return (
    <div>
      <div className="cards">
        <div className="signupLeft">
          <img
            src="https://res.cloudinary.com/sasi/image/upload/v1661591942/flair/Group_7_sdlplq.svg"
            alt="signup"
            className="signupImg"
            loading="lazy"
          />
        </div>
        <div className="signup-formContainer">
          <h1>Sign Up</h1>
          <p>Please Fill the details to continue</p>
          <form className="form">
            <div className="row">
              <div className="col">
                <label htmlFor="firstName" className="label">
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className="signup-input"
                />
              </div>
              <div className="col">
                <label htmlFor="middleName" className="label">
                  Middle Name *
                </label>
                <input
                  id="middleName"
                  type="text"
                  required
                  className="signup-input"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="lastName" className="label">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className="signup-input"
                />
              </div>
              <div className="col">
                <label htmlFor="email" className="label">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="signup-input"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="phoneNumber" className="label">
                  Phone *
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  required
                  className="signup-input"
                />
              </div>
              <div className="col">
                <label htmlFor="gender" className="label">
                  Gender *
                </label>
                <input id="gender" required className="signup-input" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="dob" className="label">
                  Date of Birth *
                </label>
                <input id="dob" required className="signup-input" />
              </div>
              <div className="col">
                <label htmlFor="maritalStatus" className="label">
                  Marital status *
                </label>
                <input id="maritalStatus" required className="signup-input" />
              </div>
            </div>
            <div className="footer">
              <Link to="/login" className="login">
                Already have an account? Login
              </Link>
              <button className="signupBtn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
