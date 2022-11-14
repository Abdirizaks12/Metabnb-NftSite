import './home.css'
// import { BrowserRouter as Router, Route,  Routes}  from "react-router-dom";
import React from 'react'
import TopContent from './TopContent'
import Partners from './Partners'
import Adventure from './Adventure'
import Giftcard from './Giftcard'
import Footer from './Footer'

// import BuyPage from "./BuyPage"

function Homepage() {
return(
  <div className='main-app'>
  <div className='app'>
    <TopContent/>
    <Partners/>
    <Adventure/>
    <Giftcard/>
    <Footer/>

  </div>
 </div> 
)

  // return (
  //   <Router>
  //     <Routes>
  //       <Route exact path="/" element={<Homepage />} />
  //       <Route path="/" element={<BuyPage />} />
  //     </Routes>
  //   </Router>   
  
}

export default Homepage
