import React from "react";
import Navbar  from "./Navbar";
import "./topcontent.css"

export default function TopContent(){
    return (
        <div className="top-content">
          <Navbar/>
          <div className="main-content">
                <div className="form-content">
                    <h2>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h2>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                     <form className="form-email">
                        <input className="input" placeholder="Search for location"></input>
                        <button className="submit-btn">Search</button>
                     </form>
                </div>

                <div className="side-img">
                    <div className="left-img">
                     <img className="aside-img" src="./image 4.png"/>
                     <img className="aside-img"src="./image 6.png"/>
                     </div>

                    <div className="right-img">
                     <img className="aside-img" src="./image 3.png"/>
                     <img className="aside-img" src="./image 5.png"/>
                     </div>
                </div>

          </div>

        </div>
    )
}