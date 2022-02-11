/* eslint-disable no-unused-vars */
import style from "./style.css"
export default function App(props) { 

return(
    <div className={`list-data-cont ${props.Color}`}>
    <div><span className="list-data">{props.Name}</span></div>
    <div><span className="list-data">{props.Amount} <span id="usdt"><sub>USDT</sub></span></span></div>  
    <div><span className="list-data">{props.Price}{"$"}</span></div> 
    <div><span className="list-data">{props.Location}</span></div> 
    <div><span className="list-data">{props.Number}</span></div>    
    <div><span className="list-data half">{props.Delivery}</span></div>  
    </div>
)}