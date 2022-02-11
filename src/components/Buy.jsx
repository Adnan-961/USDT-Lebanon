/* eslint-disable array-callback-return */    //TODO ! RENDER ARRAY ON WELCOME PAGE AND PASS BY CONTEXT
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React from 'react';
import style from "./style.css"
import List from "./List";
import { AuthContext } from './AuthContext';
import { useState,useContext,useEffect } from 'react';
import Login from "./Login"
import { getDatabase, ref,child, set,get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import FireDB from "./firebase";
import {ToastContainer,toast} from "react-toastify"
function Buy() {
    const [arr,setArr] = useState([])
    const {usersArray} = useContext(AuthContext);
    const {setUsersArray} = useContext(AuthContext);
    const [once,setOnce] = useState(true);
    const [showSortedArrayAsc,setShowSortedArrayAsc] = useState(false);
    const [showSortedArrayDesc,setShowSortedArrayDesc] = useState(false);
    const [showFiltered,setShowFiltered] = useState(true);
    const [showArray,setShowArray] = useState(true);
    const [filter,setFilter] = useState("");
    // let data = usersArray;
    // console.log(data)



    useEffect(() => {

    });
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

let renderedArray = arr.map((info)=><List Amount={info["name"]} Location={info["number"]} Price={info["location"]} Number={info["amount"]} Delivery={info["price"]} Name={info["delivery"]}/>)
let filtered = arr.filter((item)=>item.location.toLowerCase().startsWith(filter.toLowerCase())).map((info)=><List Amount={info["name"]} Location={info["number"]} Price={info["location"]} Number={info["amount"]} Delivery={info["price"]} Name={info["delivery"]}/>)
let sortedDesc =arr.sort(function (a, b) {
  return b.price - a.price;
}).map((info)=><List Amount={info["name"]} Location={info["number"]} Price={info["location"]} Number={info["amount"]} Delivery={info["price"]} Name={info["delivery"]}/>);
let sortedAsc =arr.sort(function (a, b) {
  return a.price - b.price;
}).map((info)=><List Amount={info["name"]} Location={info["number"]} Price={info["location"]} Number={info["amount"]} Delivery={info["price"]} Name={info["delivery"]}/>);
   
return (
      
      <div className='flex flex-col w-full h-screen items-center gradient-parent text-sm'> 

<div className='w-4/5 h-40 items-center text-5xl flex justify-between mt-5 font-semibold '>
<div className='flex w-1/4  flex-start'>
   <h1 className='buy-usdt pr-4 text-xsm'>Filter </h1> 
   <button> 
     <img src="https://cdn-icons-png.flaticon.com/512/626/626075.png" alt="Sort by asc" className='w-8 h-8 hover:bg-green-500' 
      onClick={()=>{
        setShowSortedArrayAsc(true);
        setShowArray(false)
        setShowSortedArrayDesc(false);
        setFilter("");
      }
      } />
      </button> <button> <img src="https://cdn-icons-png.flaticon.com/512/626/626013.png" alt="" className='w-8 h-8 hover:bg-green-500'  onClick={()=>{
        setShowSortedArrayDesc(true)
        setShowArray(false)
        setShowSortedArrayAsc(false);
        setFilter("");
      }} /></button><input type="text" value={filter} onChange={(e)=>{
  setFilter(e.target.value)
}} className='rounded-full ml-2 text-sm pl-5 w-96' placeholder='Search Location'/></div>

  <h1 className='buy-usdt mr-20 pr-10'>Buy USDT</h1>
 <button onClick={renderApp}><img src="https://img.icons8.com/external-wanicon-two-tone-wanicon/64/000000/external-refresh-user-interface-wanicon-two-tone-wanicon.png" className='w-16 h-16' alt="" /></button>

</div>

<div className=' rounded-2xl flex flex-row border-2 flex-wrap overflow-y-scroll tablee mb-10 mt-5 bg-white '>

<div className='w-full h-24   flex border-b-2 border-black title-gradient list'> 
    <div className='w-1/6 flex justify-center items-center text-xl font-semibold border-r-2 border-white'><p>Name</p></div>
    <div className='w-1/6 flex justify-center items-center text-xl font-semibold border-r-2 border-white'><p>Number</p></div>
    <div className='w-1/6 flex justify-center items-center text-xl font-semibold border-r-2 border-white'><p>Location</p></div>
    <div className='w-1/6 flex justify-center items-center text-xl font-semibold border-r-2 border-white'><p>Amount</p></div>
    <div className='w-1/6 flex justify-center items-center text-xl font-semibold border-r-2 border-white'><p>Price</p></div>
    <div className='w-1/6 flex justify-center items-center text-xl font-semibold '><p>Delivery</p></div>
</div>

{}
{showSortedArrayAsc   ?      sortedAsc : <></>}
{showSortedArrayDesc  ?      sortedDesc:<></>} 
{filter         ?      filtered : renderedArray}
{showArray ? renderedArray : <></>}





</div>


</div>    );
}
export default Buy;



