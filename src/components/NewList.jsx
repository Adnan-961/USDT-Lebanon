
/* eslint-disable array-callback-return */    //TODO ! RENDER ARRAY ON WELCOME PAGE AND PASS BY CONTEXT
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from 'react';
import style from "./style.css"
import ReactLoading from 'react-loading';
import List from "./List";
import { AuthContext } from './AuthContext';
import { useState,useContext,useEffect } from 'react';
import Login from "./Login"
import { getDatabase, ref,child, set,get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import FireDB from "./firebase";
import {ToastContainer,toast, Flip} from "react-toastify"
import refresh from "./refresh.png"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Flips from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
export default function NewList(){
    const [arr,setArr] = useState([])
    const {usersArray} = useContext(AuthContext);
    const {setUsersArray} = useContext(AuthContext);
    const [once,setOnce] = useState(true);
    const [showSortedArrayAsc,setShowSortedArrayAsc] = useState(false);
    const [showSortedArrayDesc,setShowSortedArrayDesc] = useState(false);
    const [showFiltered,setShowFiltered] = useState(false);
    const [showArray,setShowArray] = useState(true);
    const [filter,setFilter] = useState("");
    const [loading,setLoading] = useState(true);
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
      const dbRef = ref(getDatabase(app));
      function renderApp(){
        arr.splice(0,arr.length)
        get(child(dbRef, `users/`)).then((snapshot) => {
            if (snapshot.exists()) {
              let obj = snapshot.val()
        
              console.log(obj);
              
              Object.entries(obj).map(item => {
                console.log(item[1])
                setArr(oldArray => [...oldArray, item[1]]);
              })
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
      
        }
if(once){
  renderApp()
  setOnce(false)
}
useEffect(() => {
setTimeout(() => {
  setLoading(false)
}, 1500);

},[]);
let renderedArray = arr.map((info,index)=><List Color= {index%2===0 ? "even" : "odd" } Amount={info["amount"]} Location={info["location"]} Price={info["price"]} Number={info["number"]} Delivery={info["delivery"]} Name={info["name"] }/>)
let filtered = arr.filter((item)=>item.location.toLowerCase().startsWith(filter.toLowerCase())).map((info,index)=><List Color= {index%2===0 ? "even" : "odd" } Amount={info["amount"]} Location={info["location"]} Price={info["price"]} Number={info["number"]} Delivery={info["delivery"]} Name={info["name"]}/>)
let sortedDesc =arr.sort(function (a, b) {
  return b.price - a.price;
}).map((info,index)=><List Color= {index%2===0 ? "even" : "odd" } Amount={info["amount"]} Location={info["location"]} Price={info["price"]} Number={info["number"]} Delivery={info["delivery"]} Name={info["name"]}/>);
let sortedAsc =arr.sort(function (a, b) {
  return a.price - b.price;
}).map((info,index)=><List Color= {index%2===0 ? "even" : "odd" } Amount={info["amount"]} Location={info["location"]} Price={info["price"]} Number={info["number"]} Delivery={info["delivery"]} Name={info["name"]}/>);
   
    return(
    <>
   {loading && <div className='flex justify-center items-center w-full h-screen'>   <ReactLoading type='spokes' color='#009393' height={150} width={85} /></div>} 
   {!loading && <div className="list-parent"> 
        <div className="list-title"><span> View Offers</span></div>
        <Fade top> <div className="controls">
            <div className="control-1">Sort-By{" "}<button   onClick={()=>{
        setShowSortedArrayAsc(true);
        setShowArray(false)
        setShowSortedArrayDesc(false);
        setFilter("");
      }
      }><img src="https://cdn-icons-png.flaticon.com/512/626/626075.png" alt="Sort by asc" className='icons asc' /></button><button onClick={()=>{
        setShowSortedArrayAsc(false);
        setShowArray(false)
        setShowSortedArrayDesc(true);
        setFilter("");
      }}> <img src="https://cdn-icons-png.flaticon.com/512/626/626013.png" alt="sort by Desc" className='icons desc'/></button></div>
            <div className="control-2">Search: <input type="text" name="search" id="buy-search" placeholder='location' value={filter} onChange={(e)=>{
              setFilter(e.target.value);   setShowSortedArrayAsc(false);
        setShowArray(false)
        setShowSortedArrayDesc(false);
}}/></div>
            <div className="control-3"><button onClick={renderApp}><img src={refresh} alt="" className="refresh"/></button></div>
        </div></Fade>
       <div className="list-cont">
        <div><span className="list-header">Name</span></div>
        <div><span className="list-header">Amount</span></div>  
        <div><span className="list-header">Price</span></div>  
        <div><span className="list-header">Location</span></div>  
        <div><span className="list-header">Contact</span></div>  
        <div><span className="list-header">Delivery</span></div>
          
        </div>
         <div className="list-container">

  {/* <button onClick={()=>setShowArray(false)}>Click</button> */}
        {showSortedArrayAsc      &&        sortedAsc }
        {showSortedArrayDesc     &&        sortedDesc} 
        {filter                  &&         filtered }
        {!showSortedArrayAsc && !showSortedArrayDesc && !filter && renderedArray}
        
        {/* {!filter                 &&     renderedArray} */}
        {/* {showArray && renderedArray} */}
        
    </div>
    </div>}
     <div>
    </div>
    </>
    )
}