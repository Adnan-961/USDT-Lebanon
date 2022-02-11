/* eslint-disable no-unused-vars */
import React from 'react';
import style from "./style.css"
import Footer from "./Footer"
import Navbar from "./Navbar";

import { BrowserRouter as Router } from "react-router-dom";
import {
    
    Routes,
    Route,Link
  } from "react-router-dom";
function App() {
  return (

      <div className='welcome-parent gradient-parent '>
        


<div className='image flex items-center justify-center '>
<img src="https://cdn-icons-png.flaticon.com/512/825/825508.png" alt="usdt"  className='usdt-img '/>
</div>
<div className='h-32  flex justify-center items-center text-5xl text-white font-bold welcome-text-container'>
 <h1 className='welcome-text'>First USDT Trading Social Network</h1>
</div>

<div className='mt-20  w-4/5  flex justify-center items-center text-5xl  text-cont'>
 <h1 className='leading-relaxed ml-12 pt-10 rm-padding'>At USDT Lebanon, We Aim to connect all Sellers and Buyers with each other, Users will be able to Search and Filter Results to achieve the best opportunity. </h1>
</div>
<div className='flex justify-center items-center  cont'>
<div className='h-96 flex items-center justify-around    w-3/4 flex buttons-cont'>
<button className='weclome-btn  bg-green-500 text-5xl rounded-3xl text-white hover:bg-green-700'><Link to="/buy"><p className='btn-text'> View offers</p></Link></button>

<button className='weclome-btn  bg-green-500 text-5xl rounded-3xl ml-4  text-white hover:bg-green-700'><Link to="/sell"><p  className='btn-text'> Put Offer</p></Link></button>
</div></div>

</div>  );
}
export default App;