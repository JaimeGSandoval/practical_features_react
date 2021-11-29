import React from 'react';

export default function Counter2(props) {
  return (
    <div>
      <button style={{ color: 'teal' }} onClick={props.incrementCounter}>
        {props.count}
      </button>
    </div>
  );
}
