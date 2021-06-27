import React from 'react';
import { Character } from './Character';

export const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {characters.map((character) => (
        // <h1 key={character.char_id}>{character.name}</h1>
        <Character character={character} key={character.char_id} />
      ))}
    </section>
  );
};
