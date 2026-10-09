

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
