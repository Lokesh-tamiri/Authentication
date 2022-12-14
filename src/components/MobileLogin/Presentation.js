import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth'
import { useState } from 'react';

import {auth} from '../../config/fbconfig'



const Presentation = ({setUseMobile,useMobile}) => {

  const [number,setNumber] = useState("")
  const [otp,setOtp] = useState("")
  const recaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
        console.log(response);

      }
    }, auth);
  }
  const signIn = () => {
    
  recaptcha();   
  const verifier = window.recaptchaVerifier
  signInWithPhoneNumber(auth,`+91${number}`,verifier).then(res=>{
    window.confirmationResult = res;
  }).catch(err=>console.log(err))
}

const verify = () => {
  const confirm = window.confirmationResult
  confirm.confirm(otp).then(res=>{
    console.log(res)
  }).catch(err=>console.log(err));
}

  return <div>
        <form className="formContainer">
        <input className="input" type="number" onChange={(e)=>setNumber(e.target.value)} value={number}/>
        </form>
        <div className="loginButtonContainer">
        <button className="loginButton" onClick={signIn} id="sign-in-button" type="submit">submit</button>
        <button className="loginButton" type="button" onClick={()=>setUseMobile(!useMobile)}>Login With Email and password</button>
        </div>
        <div id='recaptcha-container'>
        </div>
        <div className='loginButtonContainer'>
        <input value={otp} onChange={(e)=>setOtp(e.target.value)} className="input" placeholder='Enter OTP'/>
        <button onClick={verify} className="loginButton">Confirm</button>
        </div>
    </div>;
};

export default Presentation;
