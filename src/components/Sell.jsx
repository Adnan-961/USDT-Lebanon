/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import style from "./style.css"
import { AuthContext } from './AuthContext';
import { useState,useContext } from 'react';
import Login from "./Login"
import { getDatabase, ref,child, set,get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import FireDB from "./firebase";
import {ToastContainer,toast} from "react-toastify"
function Signup(props) {
  let isAuth = props.isAuth
  const {setFireUser} = useContext(AuthContext);
  const {fireUser} = useContext(AuthContext); // CONTINUE , PUT CONTEXT IN NUMBER /SELL
  const {isLogged} = useContext(AuthContext);
  const {setIsLogged} = useContext(AuthContext);
  const {phone} = useContext(AuthContext);
  const {setPhone} = useContext(AuthContext);
  const {usersArray} = useContext(AuthContext);
  const {setUsersArray} = useContext(AuthContext);
const [name,setName] = useState("");
const [number,setNumber] = useState("");
const [location,setLocation] = useState("");
const [amount,setAmount] = useState("");
const [price,setPrice] = useState("");
const [delivery,setDelivery] = useState(false);
let isDelivery = delivery ? 'Yes' : 'No';
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
// console.log("Hereee")
// console.log(usersArray)
const user = {
  name:name,
  number:phone,
  location:location,
  amount:amount,
  price:price,
  delivery:isDelivery
}
const submitSell = ()=>{
  toast.success("Lised Your Offer!", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    })
}
function writeUserData() {
  const dbRef = ref(getDatabase());
  const db = getDatabase();

  get(child(dbRef, `users/${phone}`)).then((snapshot) => {
    // if (snapshot.exists()) {
      // console.log("User Already Exist!")
    // } else {
      set(ref(db, `users/${phone}`), user);
      // console.log(`User Successfully Registerd !! \n Welcome ${name}`)
      submitSell();
    
  }).catch((error) => {
    console.error(error);
  })
  
  resetInput()
}
function resetInput(){
  setDelivery(false)
  setAmount("")
  setDelivery("")
  setLocation("")
  setName("")
  setNumber("")
  setPrice("")
}
function readData(){

  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/`)).then((snapshot) => {
    if (snapshot.exists()) {
      let obj = snapshot.val()

      console.log(obj);
      
      Object.entries(obj).map(item => {
        console.log(item[1])
        setUsersArray([...usersArray,item[1]])
      })
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

}

if(isLogged)
  return (
      
      <div className='flex flex-col w-full h-screen items-center bg-red-300'><ToastContainer/>
<div className='w-full header text-6xl flex justify-center mt-10 font-semibold pb-10'><h1>Account Sign-up</h1></div>
<div className='w-1/4 flex justify-center mt-3 '>
<div className='flex flex-start w-1/2'>
<p className='text-3xl semi-bold pr-10 flex-none'>Full-Name:</p>
</div>
<div className='flex flex-end '>
<input type="text" onChange={(e)=>{setName(e.target.value)}}  value={name} placeholder="Esmak ya m3alem" className='pl-5 text-2xl w-62 h-16 rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
</div>

</div>
<div className='w-1/4 flex justify-center mt-3 '>
<div className='flex flex-start w-1/2'>
<p className='text-3xl semi-bold pr-10'>Number:</p>
</div>
<div className='flex flex-end '>
<input type="text" onChange={(e)=>{setNumber(e.target.value)}}  value={phone} disabled={true} placeholder={phone} className='pl-5 text-2xl w-62 h-16 rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
</div>
</div>
<div className='w-1/4 flex justify-center  mt-3 '>
<div className='flex flex-start w-1/2'>
<p className='text-3xl semi-bold pr-10'>Location:</p>
</div>
<div className='flex flex-end '>
<input type="text" onChange={(e)=>{setLocation(e.target.value)}} value={location}  placeholder="Beirut..." className='pl-5 text-2xl w-62 h-16 rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
</div>
</div>
<div className='w-1/4 flex justify-center mt-3 '>
<div className='flex flex-start w-1/2'>
<p className='text-3xl semi-bold pr-10 flex-none'>Amount:</p>
</div>
<div className='flex flex-end '>
<input type="text" onChange={(e)=>{setAmount(e.target.value)}}  value={amount} placeholder="100 USDT" className='pl-5 text-2xl w-62 h-16 rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
</div>
</div>
<div className='w-1/4 flex justify-center mt-3'>
<div className='flex flex-start w-1/2'>
<p className='text-3xl semi-bold pr-10'>Price:</p>
</div>
<div className='flex flex-end '>
<input type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price}  placeholder="101 USD" className='pl-5 text-2xl w-62 h-16 rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
</div>
</div>
<div className='w-full flex justify-center items-center mt-3 '>
<p className='text-3xl semi-bold pr-10'>Delivery Available ?</p><input type="checkbox" onChange={(e)=>{setDelivery(!delivery)}} value={delivery}  className=' w-8 h-8 pl-5 text-2xl w-62 h-16  rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
    
</div>
<button onClick={readData}>Read data</button> 
<div className='w-full flex justify-center items-center mt-20 '>
  <button className='bg-green-500 w-80 h-20 rounded-3xl text-3xl text-white font-semibold hover:bg-green-600' onClick={writeUserData}>List Offer </button>
    
</div>

</div>    );
else return <Login/>
}
export default Signup;