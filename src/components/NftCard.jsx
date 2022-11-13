import React from "react";
import "./nftcard.css"
export default function NftCard(props){
    return(
       <div className="card ">
         <img className="nft-img" src={props.image}/>
         <div className="card-info">
            <div className="top-info">
                <p className="detail">Desert king</p>
                <h4>1MBT per night</h4>
            </div>
            <div className="middle-info">
                <p className="detail">2345km away</p>
                <p className="detail">available for 2weeks stay</p>
            </div>
            <img className="stars" src="./stars.svg" />
         </div>
       </div>

    )
}