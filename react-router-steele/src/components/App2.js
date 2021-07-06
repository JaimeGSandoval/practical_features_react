import React, { useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

// This way of doing client side routing is decent but there are a better solutions:
// It does let us show different views/"pages". All in the front end without requesting and loading new pages from the server.
// Drawbacks about using this technique:
// 1. we do not get a new url as we move around to different views/"pages". The url stays the same no matter what page we go to.
// 2. we do not get the ability to move backwards and forwards by using the browsers backwards and forwards buttons
// 3. we do not have a way to bookmark any of the pages on the site. All the different pages will point to the home url
function App() {
  const [page, setPage] = useState('Home');

  const renderPage = () => {
    if (page === 'home') {
      return <Home />;
    } else if (page === 'about') {
      return <About />;
    } else if (page === 'contact') {
      return <Contact />;
    }
  };

  const anchorStyles = {
    padding: '30px',
    background: 'gray',
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <>
      <nav>
        <a onClick={() => setPage('home')} style={anchorStyles}>
          Home
        </a>
        <a onClick={() => setPage('about')} style={anchorStyles}>
          About
        </a>
        <a onClick={() => setPage('contact')} style={anchorStyles}>
          Contact
        </a>
      </nav>
      {renderPage()}
    </>
  );
}

export default App;
