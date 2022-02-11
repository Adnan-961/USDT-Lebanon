/* eslint-disable no-unused-vars */
import React from "react";
import Front from "./Front";
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";
import "./style.css";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
const Bodyy = ()=> {
let type1 = <Zoom right>  <Typewriter
onInit={(typewriter) => {
  typewriter
  
    .typeString("Lebanon's First USDT Exchange Network")
    .callFunction((state) => {
       // turn off animation
       state.elements.cursor.style.animation = 'none'
       // hide cursor
       state.elements.cursor.style.display = 'none'
    })
    .start()
}}
/></Zoom>


    return (
    <>
      
    <div className="big">
   


      <div className="cont">

        <div className="content">

        <div className="first-half">
  
          <div className="title">
          <Fade top>
            <p>USDT Lebanon</p>   </Fade>
          </div>
       
          <div className="text-content">{type1}
          </div>
          <div className="buttons">
           <button  className="btn1"><Link style={{color:"white"}}  to="/buy">Buy</Link></button>
          <button className="btn2"><Link style={{color:"white"}}  to="/sell">Sell</Link></button>
          </div>
        </div>


     


        </div>


      </div>
      <Fade bottom>
      <div className="second-cont">
        
      </div>
      </Fade>

          </div>

</>
)


}
export default Bodyy;