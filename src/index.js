/* eslint-disable no-unused-vars */
import { render } from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import {
    
    Routes,
    Route
  } from "react-router-dom";
  import Welcome from "./components/Welcome";
  import Login from "./components/Login";
  import Nav from "./components/Navbar";
  import Front from "./components/Front"
  import Footer from "./components/Footer";
const rootElement = document.getElementById("root");
render(  <div><Router basename="/"> 
     <Front/> 
    <App/>
   {/* <Footer/> */}
  </Router></div>, rootElement);