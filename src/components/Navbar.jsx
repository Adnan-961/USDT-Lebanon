/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import style from "./style.css"
import {Navbar} from "react-bootstrap"
import { NavDropdown } from "react-bootstrap";
import {Nav} from "react-bootstrap"
import {Container} from "react-bootstrap"
function NavUs() {


  return (

<>
<Navbar bg="dark" variant="dark">
   
<div className="flex justify-center items-center"></div>
    <Nav className="me-auto">

     <div className="w-auto flex justify-between  rm space-x-6"> 
     <div><Link to="/"><span className="  text-2xl text-green-500 ml-10">USDT-Lebanon</span></Link></div>
      <div><Link to="/buy"><span className="text-2xl text-green-500">Buy</span></Link></div>
      <div><Link to="/sell"><span  className="text-2xl text-green-500">Sell</span></Link></div>
     </div>
  </Nav>
 
  </Navbar>
</>
  
  );
}

export default NavUs;
