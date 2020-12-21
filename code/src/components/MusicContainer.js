import React from "react"

import "./musiccontainer.css"
import {AlbumCard} from "./AlbumCard"

export const MusicContainer = props => {

  const { albums } = props
    
  return (
    <article className="album-container">
      {albums.map(album => {
        return (
          <AlbumCard key={album.id} album={album}/>
        )
      }
      )} 
    </article>
  )
}