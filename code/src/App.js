import React from 'react'
import data from './data.json'
import "./app.css"
import { MusicContainer } from "./components/MusicContainer"
import { Header } from 'components/Header'

export const App = () => {
  // Sending data to musicContainer as props named "albums"
  return (
    <>
    <Header />
    <main>
      <MusicContainer albums={data.albums.items}/> 
    </main>
    </>
  )
}

