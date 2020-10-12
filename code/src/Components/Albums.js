import React from "react";

const Albums = (props) => {
  const {albums} = props

  return (
    <article className="album">
      {albums.map(album => {
        return (
            <h2>{album.name}</h2>
        )
      })}
    </article>
  )
}
export default Albums;