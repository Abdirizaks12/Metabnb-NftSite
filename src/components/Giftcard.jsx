import React from "react";
import"./giftcard.css"
export default function Giftcard(){
    return(
        <div className="giftcard">
            <div className="gift-content">
            <h1>Metabnb NFTs</h1>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button className="learn-btn" >Learn more</button>
            </div>

            <div className="gift-img">
               <img className="gift-nft-img" alt="Image of various places in the metaverse" src="./giftcards.png"/> 
            </div>
        </div>
    )
}