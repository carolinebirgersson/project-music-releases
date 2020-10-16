import React from "react"
import "./images.css"
import { Play, Heart, Dots } from "./Icons"


export const Images = (props) => {

  // const img = props.album.images[0].url
  const img = props.img
  // const {img} = props

  // const cardStyle = { 
  //  backgroundImage: `url(${img})`
  // } 

  return (
    <div className="image-container">
      <img src={img} alt="image of album" className="image-cover"></img>
      <div className="icons">
          <span className="heart"><Heart  /></span>
          <span className="play"><Play  /></span>
          <span className="dots"><Dots  /></span>
      </div>
    </div>
  )

}