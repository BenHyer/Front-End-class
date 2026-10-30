import type { Character } from "../types/Character";

interface CharacterCardProps {
  character: Character;
  onEdit: (character: Character) => void;
  onDelete: (id: string) => void;
}

function CharacterCard({ character, onEdit, onDelete }: CharacterCardProps) {
    return (
        <div className="character-card">
            <h2>{character.name}</h2>
            <p>Class: {character.class}</p>
            <p>Level: {character.level}</p>
            <p>Health: {character.health}</p>
            <p>Mana: {character.mana}</p>
            <button onClick={() => onEdit(character)}>Edit</button>
            <button onClick={() => onDelete(character.id)}>Delete</button>
        </div>
    );
}

export default CharacterCard;

