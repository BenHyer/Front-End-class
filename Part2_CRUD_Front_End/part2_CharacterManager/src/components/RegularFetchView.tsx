import { useEffect, useState } from 'react'
import type { Character, CharacterInput } from '../types/Character'
import {
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from '../api/characterApi'
import CharacterList from './CharacterList'
import CharacterForm from './CharacterForm'

function RegularFetchView() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editing, setEditing] = useState<Character | null>(null)

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  async function handleSave(input: CharacterInput): Promise<boolean> {
    setError(null)
    try {
      if (editing) {
        await updateCharacter({ ...input, id: editing.id })
        setCharacters(await getCharacters())
        setEditing(null)
      } else {
        const created = await createCharacter(input)
        setCharacters((prev) => [...prev, created])
      }
      return true
    } catch (err) {
      setError((err as Error).message)
      return false
    }
  }

  async function handleDelete(id: string) {
    setError(null)
    try {
      await deleteCharacter(id)
      setCharacters((prev) => prev.filter((c) => c.id !== id))
      if (editing?.id === id) setEditing(null)
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <section>
      <h2>Regular Fetch</h2>

      {error && <p className="error">{error}</p>}

      <CharacterForm
        key={editing?.id ?? 'new'}
        character={editing}
        onSave={handleSave}
        onCancel={() => setEditing(null)}
      />

      {loading ? (
        <p className="loading">Loading characters...</p>
      ) : (
        <CharacterList characters={characters} onEdit={setEditing} onDelete={handleDelete} />
      )}
    </section>
  )
}

export default RegularFetchView