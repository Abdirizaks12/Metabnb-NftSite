import React from "react";
import ImageData from "./images"
import "./adventure.css"
import NftCard from "./NftCard";

export default function Nftmarket(){
    let newArray=[]
    for (let i=0;i<16;i++){
      newArray.push(ImageData[i])

    }
  const Images =  newArray.map(item => {
    return <NftCard key={item.id} image={item.img}/>})
  

    return(
        <div className="adventure">
            <div className="nft-images">
              {Images}
            </div>
        </div>
    )
}