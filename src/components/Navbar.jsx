import React from "react";
import "./navbar.css"
import Modal from "./Modal"
import {Link} from "react-router-dom"

export default function Navbar(){
    const[openModal,setOpenModal] = React.useState(false)
    const[toggleMenu , setToggleMenu]=React.useState(false)

    const toggleNav = ()=>{
        setToggleMenu(!toggleMenu)
    }
    
    return(
    <div className="navbar">
        <img src="./logo.png"/>
       <nav> 
        { toggleMenu && (<ul className="menu">
            <Link >Home</Link>
            <Link to="./PlaceToStay">Place to stay</Link> 
            <a href="#">NFTs</a>
            <a href="#">Community</a>
        </ul>)}
        <button onClick={toggleNav} className="menu-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></button>
       </nav> 
        <button onClick={()=>setOpenModal(true)} className="connect-btn">Connect wallet</button>  
        {openModal && <Modal closeModal={setOpenModal}/>}
   </div>
    )
}