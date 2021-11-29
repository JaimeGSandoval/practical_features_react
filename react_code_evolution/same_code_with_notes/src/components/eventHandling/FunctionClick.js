import React from 'react';

function FunctionClick() {
  function clickHandler() {
    console.log('Clicked the function button');
  }

  return (
    <div>
      {/* leave out the parenthesis for the function. You want it to only fire when clicked. If you leave the parenthesis the function will be called right away, instead of only when a click happens. */}
      <button onClick={clickHandler}>Function Component Click</button>
    </div>
  );
}

export default FunctionClick;
