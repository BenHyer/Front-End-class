import type {Character} from "../types/Character";

import CharacterCard from "./CharacterCard";

interface CharacterListProps {
  characters: Character[];
  onEdit: (character: Character) => void;
  onDelete: (id: string) => void;
}   

function CharacterList({ characters, onEdit, onDelete }: CharacterListProps) {
    return (
        <div className="character-list">
            {characters.map((character) => (
                <CharacterCard
                    key={character.id}
                    character={character}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default CharacterList;