import React from 'react'
import data from './data.json'
import "./app.css"
import {AlbumContainer} from "./components/MusicContainer"
import { Header } from 'components/Header'

console.log(data)

export const App = () => {
  // Sending data to AlbumContainer as props named "albums"
  return (
    <>
      <header>
    <Header />
      </header>
    <main>
      <AlbumContainer albums={data.albums.items}/> 
    </main>
    </>
  )
};

