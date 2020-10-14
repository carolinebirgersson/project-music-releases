import React from "react"
import "./title.css"

export const Title = (props) => {

  const title = props.album.name
  const artists = props.album.artists
  const href = props.album.external_urls.spotify
  const artist = props.album.artists[0].external_urls.spotify



    return (
      <article>
        <a href={href}>
          <h1 className="album-title">{title}</h1>
        </a>
        {artists.map(artist => {
          return <p className="artist-title" key={artist.name}>{artist.name}</p>  
        })}
      </article>
    )


}

