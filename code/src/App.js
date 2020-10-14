import React from 'react'
import data from './data.json'
import "./app.css"
import {AlbumContainer} from "./components/AlbumContainer"

console.log(data)
console.log("data info", data)
console.log("data", data)


export const App = () => {
  // Sending data to AlbumContainer as props named "albums"
  return (
    <AlbumContainer albums={data.albums.items}/> 
  )
};

console.log(App)

