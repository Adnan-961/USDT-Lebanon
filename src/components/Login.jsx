/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useState,useContext } from 'react';
import {ToastContainer,toast} from "react-toastify"
import { AuthContext } from './AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import style from "./style.css"
import Sell from "./Sell"
import Choice from './Choice';
import Navbar from "./Navbar";
import Footer from './Footer';
import { getDatabase, ref,child, set,get } from "firebase/database";
import fireDb from "./firebase"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { BrowserRouter as Router,useNavigate  } from "react-router-dom";
import {  RecaptchaVerifier ,signInWithPhoneNumber } from "firebase/auth";
function Login({msg}) {
  const [phoneNumber,setPhoneNumber] = useState("");
  const [password,setPassword] = useState("");
  const {setFireUser} = useContext(AuthContext);
  const {fireUser} = useContext(AuthContext);
  const {isLogged} = useContext(AuthContext);
  const {setIsLogged} = useContext(AuthContext);
  const {setPhone} = useContext(AuthContext);
  const {setIslogged} = useContext(AuthContext);
  const firebaseConfig = {
    apiKey: "AIzaSyCrdUfFt2Cgg3yPFXZzByeXH6KL_ZgjtqU",
    authDomain: "usdt-leb.firebaseapp.com",
    databaseURL: "https://usdt-leb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "usdt-leb",
    storageBucket: "usdt-leb.appspot.com",
    messagingSenderId: "873574350690",
    appId: "1:873574350690:web:b92b4f5a0d72d8021a763b"
  };
  
  
  const app = initializeApp(firebaseConfig);

  let navigate = useNavigate()

  
const LogInfo = ()=>{
  toast.info("You Need to Login First.", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    })
}

  function readData(){

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${phoneNumber}`)).then((snapshot) => {
      if (snapshot.exists()) {
        
        let obj = snapshot.val()
          if(obj["password"] === password && obj["number"] ===phoneNumber)
        console.log("Signed In");
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  
  }


const errorMsg = ()=>{
  toast.error(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    });
}
const failedLogin = (error)=>{
  toast.error(error, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    });
}


  const Recapcha = ()=>{
    const auth = getAuth();

    window.recaptchaVerifier = new RecaptchaVerifier('log', {
      'size':"invisible",
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      }
    }, auth);

}
const onSignInSubmit= () =>{
    Recapcha();
  
    toast.info("Communicating with server...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      });
    const appVerifier = window.recaptchaVerifier;
    let lebanese = `+961${phoneNumber}`
    const auth = getAuth();
    signInWithPhoneNumber(auth, lebanese, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
         
          console.log("done")
          console.log(confirmationResult)
          let code = prompt("Enter OTP");
          confirmationResult.confirm(code).then((result) => {
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
            console.log("Logged IN Perfectly !")
            const user = result.user;
            // ...
            setPhone(phoneNumber);
            console.log(user)
            setIslogged(true);
           navigate('/choice')
          }).catch((error) => {
            toast.error("Wrong Code!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              });
            
              
            
            console.log(error)
          });
        }).catch((error) => {
        
         
          console.log(error)
        });
        
    
}

  
  
if(!isLogged)
  return (
      
      <div className='flex flex-col w-full h-screen '><button onClick={failedLogin}>Show</button>
<div className='w-full header text-6xl flex justify-center mt-10 font-semibold'><h1>Account Login</h1></div>
<div className='w-full header text-2xl flex justify-center mt-20'><h1>Login With your Phone Number</h1></div>
<div className='w-full flex justify-center items-center mt-10 '>
<div className='w-full flex items-center justify-center '> <input type="text" placeholder="Ex: 03123456" className='static pl-5 text-2xl w-96 h-24 rounded-3xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl' onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
 </div>
</div>

<div className='w-full flex justify-center items-center mt-8 '>
  <button id="log" className='bg-green-500 w-96 h-24 rounded-3xl text-3xl text-white font-semibold hover:bg-green-600'onClick={onSignInSubmit}>Login </button>
    <ToastContainer/>
</div>

</div>    );
else return(<Choice/> )
}
export default Login;