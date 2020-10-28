import React from "react"
import "./images.css"
import { Play, Heart, Dots } from "./Icons"

export const Images = (props) => {
  const img = props.img

  return (
    <div className="image-container">
      <img src={img} alt="album" className="image-cover"></img>
      <div className="icons">
          <span className="heart"><Heart  /></span>
          <span className="play"><Play  /></span>
          <span className="dots"><Dots  /></span>
      </div>
    </div>
  )
}