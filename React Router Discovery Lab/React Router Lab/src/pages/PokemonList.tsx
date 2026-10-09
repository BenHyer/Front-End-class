

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type PokemonListItem = {
  name: string
  url: string
}

function PokemonList() {

  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPokemonList() {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        if (!response.ok) {
          setError('Failed to fetch Pokemon list')
          return
        }
        const data: { results: PokemonListItem[] } = await response.json()
        setPokemonList(data.results)
      } catch (err) {
        console.error(err)
        setError('Network error')
      } finally {
        setLoading(false)
      }
    }
    fetchPokemonList()
  }, [])

  if (loading) {
    return (
      <main>
        <h1>Pokemon</h1>
        <p>Loading...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main>
        <h1>Pokemon</h1>
        <p>Error: {error}</p>
      </main>
    )
  }


  return (
    <main>
      <h1>Pokemon</h1>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default PokemonList
