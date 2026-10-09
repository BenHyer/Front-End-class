// Parts 3 & 4: ONE component that handles /pokemon/pikachu, /pokemon/charizard, ...
//
// API: https://pokeapi.co/api/v2/pokemon/<name>
//   useful fields: name, id, sprites.front_default, types[].type.name, height, weight
//   an unknown name returns HTTP 404 (not a thrown error!)
//
// TODO:
// 1. In App.tsx, give this route a path with a URL parameter: "/pokemon/:name"
// 2. Here, import `useParams` from 'react-router-dom' and read `name` from it
//    - in TypeScript, `name` is `string | undefined`; handle the undefined case
// 3. State for the four situations the assignment lists:
//      loading (waiting) | success (data) | not found (404) | request failed (network/other)
// 4. useEffect that fetches `.../pokemon/${name}`
//    - put `name` in the dependency array, so going from /pokemon/a -> /pokemon/b refetches
//    - reset loading/error state at the start of each fetch
//    - `response.status === 404` -> "no such Pokemon"; other `!response.ok` -> generic error
//    - try/catch for network failures
//    - (bonus) lowercase the name; the API only accepts lowercase
// 5. Render a different block for each state; on success show name, image, types
// 6. Add a <Link to="/pokemon"> back to the list

import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

type Status = 'loading' | 'success' | 'not-found' | 'error'
type pokemon = {
  name: string
  id: number
  sprites: {
    front_default: string
  }
  types: {type: {name: string}}[]
  height: number
  weight: number
}

function PokemonDetail() {
  const {name} = useParams<{name: string}>()
  const [status, setStatus] = useState<Status>('loading')
  const [pokemon, setPokemon] = useState<pokemon | null>(null)

  
  

  return (
    <main>
      <h1>Pokemon detail</h1>
      <p>{name}</p>
      <Link to="/pokemon">Back to the list</Link>
  
    </main>
  )
}

export default PokemonDetail
