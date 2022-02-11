/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react";
import { AuthContext } from "./AuthContext";
import { useState, useContext } from "react";
import Login from "./Login";
import { getDatabase, ref, child, set, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import FireDB from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import NewLogin from "./NewLogin";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
export default function Newsell(props) {
  let isAuth = props.isAuth;
  const { setFireUser } = useContext(AuthContext);
  const { fireUser } = useContext(AuthContext); // CONTINUE , PUT CONTEXT IN NUMBER /SELL
  const { isLogged } = useContext(AuthContext);
  const { setIsLogged } = useContext(AuthContext);
  const { phone } = useContext(AuthContext);
  const { setPhone } = useContext(AuthContext);
  const { usersArray } = useContext(AuthContext);
  const { setUsersArray } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [delivery, setDelivery] = useState(false);
  let isDelivery = delivery ? "Yes" : "No";
  let submittable =
    name.length < 20 &&
    name.length > 0 &&
    phone.length === 8 &&
    phone.length > 0 &&
    location.length < 15 &&
    location.length > 0 &&
    amount.length < 7 &&
    amount.length > 0 &&
    price.length < 7 &&
    price.length > 0
      ? true
      : false;
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
  const user = {
    name: name,
    number: phone,
    location: location,
    amount: amount,
    price: price,
    delivery: isDelivery,
  };
  const submitSell = () => {
    toast.success("Lised Your Offer!", {
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
    toast.error("Something Went Wrong!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  function writeUserData() {
    if (submittable) {
      const dbRef = ref(getDatabase());
      const db = getDatabase();

      get(child(dbRef, `users/${phone}`)).then((snapshot) => {
        // if (snapshot.exists()) {
        // console.log("User Already Exist!")
        // } else {

        set(ref(db, `users/${phone}`), user)
          .then(() => {
            submitSell();
          })
          .catch((error) => {
            console.error(error);
            ErrorToast();
          });
        // console.log(`User Successfully Registerd !! \n Welcome ${name}`)
      });

      resetInput();
    } else {
      ErrorToast();
    }
  }
  function resetInput() {
    setDelivery(false);
    setAmount("");
    setDelivery("");
    setLocation("");
    setName("");
    setNumber("");
    setPrice("");
  }
  function readData() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let obj = snapshot.val();

          console.log(obj);

          Object.entries(obj).map((item) => {
            console.log(item[1]);
            setUsersArray([...usersArray, item[1]]);
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (isLogged)
    return (
      <>
        <div className="sell-parent">
          <Fade top>
            <form className="sell-form">
              <ToastContainer />
              <div className="sell-title pt-10">
                <h1>List Your Offer</h1>
              </div>
              <div className="inpt-cont">
                <div className="data-cont"></div>
                <div className="data-cont"></div>
              </div>
              <div className="rows">
                <div className="data-cont">
                  <span>Name:</span>
                </div>
                <div className="data-cont-inpt">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Jhon Doe.."
                    className="inputs"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                </div>
              </div>
              <div className="rows">
                <div className="data-cont">
                  <span>Number:</span>
                </div>
                <div className="data-cont-inpt">
                  <input
                    type="text"
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                    value={phone}
                    disabled={true}
                    placeholder={phone}
                    className="inputs"
                  />
                </div>
              </div>
              <div className="rows">
                <div className="data-cont">
                  <span>Location:</span>
                </div>
                <div className="data-cont-inpt">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Beirut.."
                    className="inputs"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                    value={location}
                  />
                </div>
              </div>
              <div className="rows">
                <div className="data-cont">
                  <span>Amount:</span>
                </div>
                <div className="data-cont-inpt">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="100 USDT"
                    className="inputs"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    value={amount}
                  />
                </div>
              </div>
              <div className="rows">
                <div className="data-cont">
                  <span>Price:</span>
                </div>
                <div className="data-cont-inpt">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="102 USD"
                    className="inputs"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    value={price}
                  />
                </div>
              </div>
              <div className="rows">
                <div className="data-cont">
                  <span className="check-span">Delivery ?</span>
                </div>
                <div className="data-cont-inpt">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="check"
                    onChange={(e) => {
                      setDelivery(!delivery);
                    }}
                    value={delivery}
                  />
                </div>
              </div>
              <div className="btn-row">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    writeUserData();
                  }}
                >
                  List offer
                </button>
              </div>
            </form>
          </Fade>
          <button
            onClick={() => {
              console.log(submittable);
            }}
          ></button>
        </div>
        <Fade bottom>
          <div className="bg"></div>
        </Fade>
      </>
    );
  else return <NewLogin />;
}
