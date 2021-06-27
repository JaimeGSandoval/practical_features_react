import React from 'react';

export const Character = ({ character }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={character.img} alt={character.name + 'img'} />
        </div>
        <div className="card-back">
          <h1>{character.name}</h1>
          <ul>
            <li>
              <strong>Actor name: </strong>
              {character.portrayed}
            </li>
            <li>
              <strong>Nickname: </strong>
              {character.nickname}
            </li>
            <li>
              <strong>Birthday: </strong>
              {character.birthday}
            </li>
            <li>
              <strong>Status: </strong>
              {character.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
