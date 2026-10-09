

import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type Status = 'loading' | 'success' | 'not-found' | 'error'
type Pokemon = {
  name: string
  id: number
  sprites: {
    front_default: string
  }
  types: { type: { name: string } }[]
  height: number
  weight: number
}

function PokemonDetail() {
  const { name } = useParams<{ name: string }>()
  const [status, setStatus] = useState<Status>('loading')
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    async function fetchPokemon() {
      if (!name) {
        setStatus('error')
        return
      }
      setStatus('loading')
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        if (response.status === 404) {
          setStatus('not-found')
          return
        }
        if (!response.ok) {
          setStatus('error')
          return
        }
        const data: Pokemon = await response.json()
        setPokemon(data)
        setStatus('success')
      } catch (error) {
        console.error(error)
        setStatus('error')
      }
    }
    fetchPokemon()
  }, [name])

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'not-found') {
    return (
      <main>
        <h1>Pokemon not found</h1>
        <Link to="/pokemon">Back to the list</Link>
      </main>
    )
  }

  if (status === 'error') {
    return (
      <main>
        <h1>Error fetching Pokemon</h1>
        <Link to="/pokemon">Back to the list</Link>
      </main>
    )
  }

  if (!pokemon) {
    return null
  }


  return (
    <main>
      <h1>Pokemon: {pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Types: {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <Link to="/pokemon">Back to the list</Link>

    </main>
  )
}

export default PokemonDetail
