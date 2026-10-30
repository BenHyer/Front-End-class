import {useState} from 'react'
import type {ChangeEvent, FormEvent} from 'react'
import type {Character, CharacterInput} from '../types/Character'


interface CharacterFormProps {
    character: Character | null
    onSave: (input: CharacterInput) => 
        Promise<boolean>
    onCancel: () => void
}

const emptyForm: CharacterInput = {name: '', class: '', level: 1, health: 100, mana: 50}

function CharacterForm({ character, onSave, onCancel }: CharacterFormProps) {
    const [form, setForm] = useState<CharacterInput>(character ?
        {
            name: character.name, 
            class: character.class, 
            level: character.level, 
            health: character.health, 
            mana: character.mana
        } 
    : emptyForm
    )
    const [saving, setSaving] = useState(false)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'number' ? Number(value) : value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSaving(true)
    const success = await onSave(form)
    setSaving(false)
    if (success && !character) setForm(emptyForm)
  }

  return (
    <form className="character-form" onSubmit={handleSubmit}>
      <h2>{character ? `Edit ${character.name}` : 'Add Character'}</h2>

      <label>
        Name
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>
        Class
        <input name="class" value={form.class} onChange={handleChange} required />
      </label>
      <label>
        Level
        <input name="level" type="number" value={form.level} onChange={handleChange} />
      </label>
      <label>
        Health
        <input name="health" type="number" value={form.health} onChange={handleChange} />
      </label>
      <label>
        Mana
        <input name="mana" type="number" value={form.mana} onChange={handleChange} />
      </label>

      <button type="submit" disabled={saving}>
        {saving ? 'Saving...' : character ? 'Save Changes' : 'Create Character'}
      </button>
      {character && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  )
}

export default CharacterForm