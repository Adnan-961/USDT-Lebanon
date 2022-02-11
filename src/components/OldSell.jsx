/* eslint-disable no-unused-vars */
import React from 'react';
import { getDatabase, ref, set,get,child } from "firebase/database";
import { initializeApp } from "firebase/app";
import style from "./style.css"
import { useState } from 'react';
function Sell(props) {
  const [amount,setAmount] = useState("");

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrdUfFt2Cgg3yPFXZzByeXH6KL_ZgjtqU",
  authDomain: "usdt-leb.firebaseapp.com",
  databaseURL: "https://usdt-leb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "usdt-leb",
  storageBucket: "usdt-leb.appspot.com",
  messagingSenderId: "873574350690",
  appId: "1:873574350690:web:b92b4f5a0d72d8021a763b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

  const handleAmount = (e)=> {
    setAmount(e.target.value)
  }
  let count = 0;
  function writeUserData() {
    const db = getDatabase();
    set(ref(db, 'users/'), {
      name:"name",
  number:"number",
  location:"locatioune",
  password:"passwordzzzz"
    });
  count++;
  }

  

  return (
      
      <div className='flex flex-col w-full h-screen items-center '>
<div className='w-full header text-6xl flex justify-center mt-10 font-semibold'><h1>Sell USDT <button className='bg-red-600' onClick={writeUserData}>CLICK PLZ</button></h1></div>
<div className='w-1/2 flex justify-center items-center mt-10  '>
 <p className='text-3xl semi-bold pr-10 mr-4'>USDT Amount :</p> <input type="text" onChange={handleAmount} placeholder="USDT" className='pl-5 ml-4 text-2xl w-62 h-16   rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
    
</div>
<div className='w-full flex justify-center items-center mt-3 '>
<p className='text-3xl semi-bold pr-10'>Price (USD):</p><input type="text" placeholder="$" className=' ml-20 pl-5 text-2xl w-62 h-16 rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
    
</div>

<div className='w-full flex justify-center items-center mt-3 '>
<p className='text-3xl semi-bold pr-10'>Delivery Available ?</p><input type="checkbox"  className=' w-8 h-8 pl-5 text-2xl w-62 h-16  rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
    
</div>


<div className='w-full flex justify-center items-center mt-20 '>
  <button className='bg-green-500 w-80 h-20 rounded-3xl text-3xl text-white font-semibold hover:bg-green-600'>List Offer </button>
    
</div>

</div>    );
}
export default Sell;