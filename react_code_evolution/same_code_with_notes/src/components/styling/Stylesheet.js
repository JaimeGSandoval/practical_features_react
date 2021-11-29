import React from 'react';
import './myStyles.css';

// 2 ways to implement styles:
// 1. create a stylesheet and import it into the js file that needs it
// 2. use inline styling

// Import stylesheet example
function Stylesheet({ primary }) {
  const className = primary ? 'primary' : '';
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  );
}

export default Stylesheet;
