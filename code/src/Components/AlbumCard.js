import React from "react";
import "./albumcard.css"
import { Play, Heart, Dots } from "./Icons"


export const AlbumCard = props => {
  
  // const { title, artists, href } = props
  // const { album } = props
  const title = props.album.name
  const artists = props.album.artists
  const href = props.album.external_urls.spotify
  const img = props.album.images[0].url
  
  const cardStyle = { 
    backgroundImage: `url(${img})`
  }

  return (
    <article className="albumcard" style={cardStyle}>
      <h1>{title}</h1>
      {artists.map(artist => {
        return <p key={artist.name}>{artist.name}</p>  
      })}
            <a href={href}>
              <p>hej</p>
              <Heart />
            </a>
    </article>
  )
}

console.log(AlbumCard)


________________________________________



