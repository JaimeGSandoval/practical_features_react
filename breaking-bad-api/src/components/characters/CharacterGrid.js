import React from 'react';
import { Character } from './Character';
import Spinner from '../ui/Spinner';
export const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {characters.map((character) => (
        <Character character={character} key={character.char_id} />
      ))}
    </section>
  );
};
