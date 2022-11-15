import './home.css'
// import { BrowserRouter as Router, Route,  Routes}  from "react-router-dom";
import React from 'react'
import TopContent from './TopContent'
import Partners from './Partners'
import Adventure from './Adventure'
import Giftcard from './Giftcard'
import Footer from './Footer'



function Homepage() {
return(
  // <div className='main-app'>
  <div className='app'>
    <TopContent/>
    <Partners/>
    <Adventure/>
    <Giftcard/>
    <Footer/>
   
  {/* </div> */}
 </div> 
)


  
}

export default Homepage
