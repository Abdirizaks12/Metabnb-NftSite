import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Nftmarket from "./Nftmarket";
import "./PlaceToBuy.css"


export default function PlaceToStay(){
    return(
        <div className="places-page">
            <div className="top-content">
            <Navbar/>
            <div className="place-nav">
                <a>Resturant</a>
                <a>Cottage</a>
                <a>Castle</a>
                <a>fantast city</a>
                <a>beach</a>
                <a>Carbins</a>
                <a>Off-grid</a>
                <a>Farm</a>
                <a className="location-btn"><p>Location</p> <img src="./setting.svg"/></a>
            </div>
            </div>

            <Nftmarket/>
            <Footer/>

        </div>
    )
}