import React, { useState, useEffect } from 'react';
import { Header } from './components/ui/Header';
import { CharacterGrid } from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios';
import './App.scss';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setCharacters(result.data);
      setIsLoading(false);
    };

    fetchCharacters();
  }, [query]);

  return (
    <>
      <Header />
      {/* passing the query up from Search component. setQuery is part of our state. We're setting query by using setQuery. The query is being sent up from the search component. We pass the function as a prop to the Search component where it brings back the query and feeds it to setQuery */}
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </>
  );
}

export default App;
