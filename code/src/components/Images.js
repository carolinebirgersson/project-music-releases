import React from "react"
import "./images.css"
import { Play, Heart, Dots } from "./Icons"


export const Images = (props) => {

  // const img = props.album.images[0].url
  const img = props.img
  // const {img} = props

  const cardStyle = { 
    backgroundImage: `url(${img})`
  }

  return (
    <article className="images" style={cardStyle}>
      <div className="icons">
          <Heart className="heart" />
          <Play className="play" />
          <Dots className="dots" />
      </div>
    </article>
  )

}