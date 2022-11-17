import React from "react";
import "./modal.css"

export default function Modal({closeModal}){
    return(
        <div className="modal-wrap">
            <div className="modal-content">
                <div className="top-modal">
                    <p>Connect Wallet</p>
                    <a onClick={()=>closeModal(false)} href="#" className="cancel"><img src="./x.svg"/></a>
                </div>
                 <div className="line"></div>
                <div className="bottom-modal">
                    <p>Choose your preferred wallet:</p>
                 <div className="bottom-wallets">
                    <a  href="#" className="wallets">
                        <img className="rt-img" src="./matamaskwallet.svg"/>
                        <img src="./arrow.svg"/>  
                    </a>

                    <a href="#" className="wallets">
                        <img className="rt-img" src="./walletconnect.svg"/>
                        <img src="./arrow.svg"/>
                    </a>
                 </div> 
                </div>
            </div>
        </div>
    )
}