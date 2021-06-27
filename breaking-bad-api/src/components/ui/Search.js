import React, { useState } from 'react';
// when you have input fields each input field will have it's own useState assigned to it
const Search = () => {
  const [name, setName] = useState('');

  return (
    <section>
      <form className="search">
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>
    </section>
  );
};

export default Search;

// get name from input field
// onChange event will fire the search filter
// if name includes the letter it'll be added to the list of characters to return
