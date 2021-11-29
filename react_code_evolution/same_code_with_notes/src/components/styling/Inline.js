import React from 'react';

// 2 ways to implement styles:
// 1. create a stylesheet and import it into the js file that needs it
// 2. use inline styling

// Inline styling example
const heading = {
  fontSize: '72px',
  color: 'blue',
};

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;
