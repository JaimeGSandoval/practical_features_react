import React from 'react';

export default function Counter1(props) {
  return (
    <div>
      <button onClick={props.incrementCounter}>{props.count}</button>
    </div>
  );
}
