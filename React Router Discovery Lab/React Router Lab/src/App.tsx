// Part 1 & 6: the route table — TODO:
// 1. Import `Routes` and `Route` from 'react-router-dom', plus your pages and NavBar
// 2. Replace the Vite starter JSX below with:
//      - <NavBar /> (outside <Routes>, so it shows on every page)
//      - <Routes> containing one <Route path="..." element={<SomePage />} /> per page:
//          "/"              -> Home
//          "/pokemon"       -> PokemonList
//          "/pokemon/:name" -> PokemonDetail   (the ":" makes `name` a URL parameter)
//          "/about"         -> About
//          "*"              -> NotFound        (catch-all, matches anything else)
// 3. You can then delete the unused starter imports (heroImg, logos, useState)

//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.tsx'
import Home from './pages/Home.tsx'
import PokemonList from './pages/PokemonList.tsx'
import PokemonDetail from './pages/PokemonDetail.tsx'
import About from './pages/About.tsx'
import NotFound from './pages/NotFound.tsx'

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
