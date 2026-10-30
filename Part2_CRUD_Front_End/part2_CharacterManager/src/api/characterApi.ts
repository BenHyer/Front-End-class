import type { Character, CharacterInput } from '../types/Character'

const BASE_URL = 'http://localhost:5285/api/characters'

async function getErrorMessage(response: Response): Promise<string> {
  try {
    const body = await response.json()
    if (body.error) return body.error
    if (body.errors) return Object.values(body.errors).flat().join(' ')
    if (body.title) return body.title
  } catch {
    // response had no JSON body
  }
  return `Request failed with status ${response.status}`
}

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch(BASE_URL)
  if (!response.ok) throw new Error(await getErrorMessage(response))
  return response.json()
}

export async function createCharacter(character: CharacterInput): Promise<Character> {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(character),
  })
  if (!response.ok) throw new Error(await getErrorMessage(response))
  return response.json()
}

export async function updateCharacter(character: Character): Promise<void> {
  const response = await fetch(`${BASE_URL}/${character.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(character),
  })
  if (!response.ok) throw new Error(await getErrorMessage(response))
}

export async function deleteCharacter(id: string): Promise<void> {
  const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
  if (!response.ok) throw new Error(await getErrorMessage(response))
}