import React from "react";
import "./footer.css"

export default function Footer(){
  return(
      <div className="footer">
        <div className="socials">
          <img src="./footerlogo.png"/>
          <div>
           <a> <img src="./fb.png"/> </a>
           <a> <img src="./insta.png"/></a>
           <a> <img src="./twt.png"/></a>
          </div>
          <p>© 2022 Metabnb</p>
        </div>  

        <div className="footer-col">
          <h1>Community</h1>
          <ul>
            <a href="#">NFT</a>
            <a href="#">Tokens</a>
            <a href="#">Landlord</a>
            <a href="#">Discord</a>
          </ul>
        </div> 

        <div className="footer-col">
        <h1>Places</h1>
          <ul>
            <a href="#">Castle</a>
            <a href="#">Farms</a>
            <a href="#">Beach</a>
            <a href="#">Learn more</a>
          </ul>
        </div> 

        <div className="footer-col">
        <h1>About us</h1>
          <ul>
            <a href="#">Road map</a>
            <a href="#">Creators</a>
            <a href="#">Careers</a>
            <a href="#">Contact us</a>
          </ul>
        </div> 

      </div>
  )
}