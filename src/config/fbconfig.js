import { initializeApp } from '@firebase/app';
import {getAuth} from 'firebase/auth'
// var serviceAccount = require("./serviceAccount.json");

const firebaseConfig = {
  apiKey: "AIzaSyCaj0-em72mYRUIlPxq7nlkFrG_NY3Dc0g",
  authDomain: "loginandsignupauth-5b948.firebaseapp.com",
  projectId: "loginandsignupauth-5b948",
  storageBucket: "loginandsignupauth-5b948.appspot.com",
  messagingSenderId: "579813199254",
  appId: "1:579813199254:web:46b0319e443af4bbc561b7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth
}
