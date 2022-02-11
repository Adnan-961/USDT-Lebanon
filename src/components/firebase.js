/* eslint-disable no-unused-vars */
import React from 'react';
import style from "./style.css"
import { useState } from 'react';
import { getDatabase, ref,child, set,get } from "firebase/database";
import { initializeApp } from "firebase/app";

export default function Signup() {
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
}