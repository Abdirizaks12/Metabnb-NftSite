import React from "react";
import ImageData from "./images"
import "./adventure.css"
import NftCard from "./NftCard";

export default function Adventure(){
    let newArray=[]
    for (let i=0;i<8;i++){
      newArray.push(ImageData[i])

    }
  const Images =  newArray.map(item => {
    return <NftCard key={item.id} image={item.img}/>})
  

    return(
        <div className="adventure">
            <h1 className="header-note">Inspiration for your next adventure</h1>
            <div className="nft-images">
              {Images}
            </div>
        </div>
    )
}