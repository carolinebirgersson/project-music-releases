import React from "react"
import {AlbumCard} from "./AlbumCard"
import "./musiccontainer.css"

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