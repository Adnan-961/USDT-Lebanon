/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { initializeApp } from "firebase/app";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Login from "./components/Login"
// import Sell from "./components/Sell";
import NewList from './components/NewList';
import Choice from './components/Choice';
import Signup from './components/Signup';
import "./index.css"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from './components/Navbar';
import Buy from './components/Buy';
import List from "./components/List";
import { AuthContext } from './components/AuthContext';
import {  createUserWithEmailAndPassword } from "firebase/auth";
// import style from "./components/style.css"
import Front from "./components/Front"
import Bodyy from "./components/Bodyy"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase,ref, set } from "firebase/database";
import { useState } from 'react';
// import NEWSELL from "./components/NewSell"
import NewSell from './components/NewSell';
import NewLogin from "./components/NewLogin";
export default function App() {
const [fireUser,setFireUser] = useState("");
const [usersArray,setUsersArray] = useState([]);
const [isLogged,setIslogged]=useState(false);
const [phone,setPhone]=useState("");

  return (<> 
     <AuthContext.Provider value={{fireUser,setFireUser,usersArray,setUsersArray,isLogged,setIslogged,phone,setPhone}}>
   

<Routes>
    <Route path="/" element={<Bodyy/>}/>
    <Route path="/login" element={<NewLogin/>}/>
    <Route path="/list" element={<List/>}/>
    {/* <Route path="/sell" element={<Sell/>}/> */}
    <Route path="/sell" element={<NewSell/>}/>
    <Route path="/login" element={<NewLogin/>}/>
    <Route path="/buy" element={<NewList/>}/>
    {/* <Route path="/newbuy" element={<NewList/>}/> */}
    {/* <Route path="/signup" element={<Signup/>}/> */}
    {/* <Route path="/Choice" element={<Choice/>}/> */}
    <Route path="*" element={<Bodyy/>}/>
    </Routes>
       
    
    
  
     </AuthContext.Provider>


        </>

  );
}