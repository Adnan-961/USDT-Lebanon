/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "./AuthContext";
import "react-toastify/dist/ReactToastify.css";
import style from "./style.css";
import Sell from "./Sell";
import Choice from "./Choice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Flips from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { getDatabase, ref, child, set, get } from "firebase/database";
import fireDb from "./firebase";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
export default function NewLogin({ msg }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { setFireUser } = useContext(AuthContext);
  const { fireUser } = useContext(AuthContext);
  const { isLogged } = useContext(AuthContext);
  const { setIsLogged } = useContext(AuthContext);
  const { setPhone } = useContext(AuthContext);
  const { setIslogged } = useContext(AuthContext);
  const firebaseConfig = {
    apiKey: "AIzaSyCrdUfFt2Cgg3yPFXZzByeXH6KL_ZgjtqU",
    authDomain: "usdt-leb.firebaseapp.com",
    databaseURL:
      "https://usdt-leb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "usdt-leb",
    storageBucket: "usdt-leb.appspot.com",
    messagingSenderId: "873574350690",
    appId: "1:873574350690:web:b92b4f5a0d72d8021a763b",
  };

  const app = initializeApp(firebaseConfig);

  let navigate = useNavigate();

  const LogInfo = () => {
    toast.info("You Need to Login First.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  function readData() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${phoneNumber}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let obj = snapshot.val();
          if (obj["password"] === password && obj["number"] === phoneNumber)
            console.log("Signed In");
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const errorMsg = () => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };
  const failedLogin = (error) => {
    toast.error(error, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const Recapcha = () => {
    const auth = getAuth();

    window.recaptchaVerifier = new RecaptchaVerifier(
      "log",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth
    );
  };
  const loadToast = () => {
    toast.info("Communicating with server...", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };
  const ErrorToast = () => {
    toast.error("Something is Wrong! Refresh the page and Try again", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };
  const onSignInSubmit = () => {
    loadToast()
    Recapcha();

    const appVerifier = window.recaptchaVerifier;
    let lebanese = `+961${phoneNumber}`;
    const auth = getAuth();
    signInWithPhoneNumber(auth, lebanese, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("done");
        console.log(confirmationResult);
        let code = prompt("Enter OTP");
        confirmationResult
          .confirm(code)
          .then((result) => {
            toast.success("Logged In!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
            });
            // User signed in successfully.
            const user = result.user;
            setPhone(phoneNumber);
            console.log(user);
            setIslogged(true);
            navigate("/sell");
          })
          .catch((error) => {
            ErrorToast()
            console.log(error);
          });
      })
      .catch((error) => {});
  };
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="sell-parent">
      <ToastContainer/>
        <Fade top>
          {" "}
          <form className="sell-form-login">
            <div className="sell-title pt-10">
              <h1>You Need To Login First</h1>
            </div>
            <div className="inpt-cont-login">
              <div className="data-cont-login"></div>
              <div className="data-cont-login"></div>
            </div>
            <div className="rows-login">
              <div className="data-cont-login">
                <span>Phone Number:</span>
              </div>
              <div className="data-cont-inpt-login">
                <input
                  type="text"
                  placeholder="03123456"
                  className="inputs text-lg"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="btn-row-login">
              <button
                id="log"
                onClick={(e) => {
                  e.preventDefault();
                  onSignInSubmit();
                }}
              >
                Login
              </button>
            </div>
          </form>
        </Fade>
      </div>{" "}
      <Fade bottom>
        <div className="bg"></div>
      </Fade>
    </>
  );
}
