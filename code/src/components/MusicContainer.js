import React from "react"
import {AlbumCard} from "./AlbumCard"
import "./musiccontainer.css"

export const AlbumContainer = props => {

  const { albums } = props
  // albums = items
  
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





 