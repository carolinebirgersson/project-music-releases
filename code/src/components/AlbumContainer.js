import React from "react"
import {AlbumCard} from "./AlbumCard"
import "./albumcontainer.css"

export const AlbumContainer = props => {

  const { albums } = props
  // albums = items
  
  return (
    <article className="album">
      {albums.map(album => {
        return (
          <AlbumCard key={album.id} album={album}/>
      )
      }

      )}
      
    </article>
  )
}





 