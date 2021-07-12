import React, { useState } from 'react';

// app.js sends a function as a prop to the search component
// search component has state (term) for the input field, controlled.
// the function sent to the search component as a prop from app.js is placed in the onSubmit function
// when the form is submitted, te onSubmit function gets called, which calls the function sent to the search component by app.js. The function gets the state term as an argument. App.js uses the term to make a get request.
// the request comes back with videos based on the term.

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
