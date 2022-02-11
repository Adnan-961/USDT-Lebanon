/* eslint-disable no-unused-vars */
import React from 'react';
import style from "./style.css"
import { useState } from 'react';
import { getDatabase, ref,child, set,get } from "firebase/database";
import { initializeApp } from "firebase/app";
import FireDB from "./firebase";
function Signup() {
const [name,setName] = useState("");
const [number,setNumber] = useState("");
const [location,setLocation] = useState("");
const [password,setPassword] = useState("");
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

const user = {
  name:name,
  number:number,
  location:location,
  password:password
}

function writeUserData() {
  const dbRef = ref(getDatabase());
  const db = getDatabase();

  get(child(dbRef, `users/${number}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log("User Already Exist!")
    } else {
      set(ref(db, `users/${number}`), user);
      console.log(`User Successfully Registerd !! \n Welcome ${name}`)
    
    }
  }).catch((error) => {
    console.error(error);
  })
  
  
}

function readData(){

  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${number}`)).then((snapshot) => {
    if (snapshot.exists()) {
      let obj = snapshot.val()

      console.log(obj["name"]);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

}


  return (
      
      <div className='flex flex-col w-full h-screen items-center '>
<div className='w-full header text-6xl flex justify-center mt-10 font-semibold'><h1>Account Sign-up</h1></div>
<div className='w-1/2 flex justify-center items-center mt-10  '>
 <p className='text-3xl semi-bold pr-10 mr-4'>Name :</p> <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Name..." className='pl-5 text-2xl w-62 h-16  rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
    
</div>
<div className='w-full flex justify-center items-center mt-3 '>
<p className='text-3xl semi-bold pr-10'>Number:</p><input type="text" onChange={(e)=>{setNumber(e.target.value)}}  placeholder="Phone Number..." className='pl-5 text-2xl w-62 h-16 rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
    
</div>
<div className='w-full flex justify-center items-center mt-3 '>
<p className='text-3xl semi-bold pr-10'>Location:</p><input type="text" onChange={(e)=>{setLocation(e.target.value)}} placeholder="Location..." className='pl-5 text-2xl w-62 h-16  rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
    
</div>
<div className='w-full flex justify-center items-center mt-3 '>
<p className='text-3xl semi-bold pr-10'>Password:</p><input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password..." className='pl-5 text-2xl w-62 h-16  rounded-2xl border-4 border-green-500 hover:border-green-300 target:border-green-700 focus-within:shadow-2xl'/>
    
</div>

<button onClick={readData}>Read data</button> 
<div className='w-full flex justify-center items-center mt-20 '>
  <button className='bg-green-500 w-80 h-20 rounded-3xl text-3xl text-white font-semibold hover:bg-green-600' onClick={writeUserData}>Register </button>
    
</div>

</div>    );
}
export default Signup;