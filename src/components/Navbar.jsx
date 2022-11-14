import React from "react";
import "./navbar.css"
import Modal from "./Modal"
import {Link} from "react-router-dom"

export default function Navbar(){
    const[openModal,setOpenModal] = React.useState(false)
    return(
    <div className="navbar">
        <img src="./logo.png"/>
        <ul className="menu">
            <Link >Home</Link>
            <Link to="./PlaceToStay">Place to stay</Link> 
            <a href="#">NFTs</a>
            <a href="#">Community</a>
        </ul>
        <button onClick={()=>setOpenModal(true)} className="connect-btn">Connect wallet</button>  
        {openModal && <Modal closeModal={setOpenModal}/>}
   </div>
    )
}