import React, { useState, useEffect } from 'react';
import { Header } from './components/ui/Header';
import axios from 'axios';
import './App.scss';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
      setCharacters(result.data);
      setIsLoading(false);
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
