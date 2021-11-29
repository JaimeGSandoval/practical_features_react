import { useState } from 'react';

function useToggle(initialVal = false) {
  // call useState, "reserve piece of state"
  const [state, setState] = useState(initialVal);

  const handleToggle = () => {
    setState(!state);
  };

  // return piece of state AND a function to toggle it
  return [state, handleToggle];
}
export default useToggle;
