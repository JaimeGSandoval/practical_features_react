import React from 'react';
import spinner from '../../img/spinner.gif';
const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="loading gif"
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  );
};

export default Spinner;
