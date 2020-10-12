import React from 'react'
import data from './data.json'
import {Header} from "./Header"
import {AlbumsContainer} from "./AlbumsContainer"
import {Artists} from "./Artists"
import {Albums} from "./Albums"
import {Icons} from "./Icons"

console.log(data)

export const App = () => {
  return (
    <>
      <Header />
      <Albums />
      <Artists />
      <Icons />

    </>
};
