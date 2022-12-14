import { Modal } from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch } from "react-redux";
import { auth } from "../../config/fbconfig";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../slice/userSlice";
const Presentation = ({ setUseMobile, useMobile }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const recaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
          console.log(response);
        },
      },
      auth
    );
  };
  const signIn = (e) => {
    e.preventDefault();
    recaptcha();
    console.log(number);

    const verifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+${number}`, verifier)
      .then((res) => {
        window.confirmationResult = res;
      })
      .catch((err) => console.log(err));
    setOpen(true);
  };

  const verify = () => {
    const confirm = window.confirmationResult;
    confirm
      .confirm(otp)
      .then((res) => {
        dispatch(setUser(res));
      })
      .then(navigate("/home"))
      .catch((err) => console.log(err));
    setOpen(false);
  };

  return (
    <div>
      <form className="formContainer">
        <PhoneInput
          type="number"
          onChange={(e) => setNumber(e)}
          value={number}
        />
      </form>
      <div className="loginButtonContainer">
        <button
          className="loginButton"
          onClick={signIn}
          id="sign-in-button"
          type="submit"
        >
          submit
        </button>
        <button
          className="loginButton"
          type="button"
          onClick={() => setUseMobile(!useMobile)}
        >
          Login With Email and password
        </button>
      </div>
      <div id="recaptcha-container"></div>
      <Modal open={open}>
        <div className="loginButtonContainer">
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="input"
            placeholder="Enter OTP"
          />
          <button onClick={verify} className="loginButton">
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Presentation;
