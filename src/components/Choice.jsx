/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from 'react';
import style from "./style.css"
import { initializeApp } from "firebase/app";
import List from "./List";
import { BrowserRouter as Router } from "react-router-dom";
import {Routes,Route,Link} from "react-router-dom";
import { getAuth, RecaptchaVerifier ,signInWithPhoneNumber } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { useContext } from 'react';
function Choice() {
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

    const {phone} = useContext(AuthContext);




  return (
      
      <div className='flex flex-col w-screen h-screen items-center text-2xl pt-10 '>
            <h1>You Are Now Logged in as <span className='text-green-500 text-3xl semi-bold'>{phone}</span> </h1>
            <h1>Do you want to Buy or Sell ?</h1>
            <div className='flex justify-center items-center w-full h-full'>
            <div className='flex w-3/4 h-3/4 bg-gray-300 rounded-3xl justify-center items-center'>
                <div className='w-full h-full flex justify-center items-center'>
            <button className='bg-green-500 w-80 h-20 rounded-3xl text-3xl text-white font-semibold hover:bg-green-600 '><Link to="/buy">Buy</Link></button>
            </div>
            <div className='w-full flex justify-center items-center flex-row'>
            <button id="log" className='bg-green-500 w-80 h-20 rounded-3xl text-3xl text-white font-semibold hover:bg-green-600 '><Link to="/Sell">Sell</Link> </button>
            </div>
            </div>
            </div>
            <div className='flex justify-center items-center  '>

          

</div>

       </div>    );
}
export default Choice;



