import React from "react";
import "./navbar.css"
// import {a} from "react-router-dom"

export default function Navbar(){
    return(
    <div className="navbar">
        <img src="./logo.png"/>
        <ul className="menu">
            <a href="#">Home</a>
            <a href="#">Place to stay</a>
            <a href="#">NFTs</a>
            <a href="#">Community</a>
        </ul>
        <button className="connect-btn">Connect wallet</button>  
        
   </div>
    )
}