import React, { useReducer } from 'react';
// this version shows an example of using state and action as objects. The advantage of using state & action as objects is: First is concerning the value by which we need to increment or decrement the counter. By making use of action as an abject we can use additional data in the reducer function

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

function reducer(state, action) {
  // action refers to an entire object. type is a property on that object
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function CounterTwo() {
  // count refers to the entire state object
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>First Counter: {count.firstCounter}</div>
      <div>Second Counter: {count.secondCounter}</div>

      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
        decrement counter 2
      </button>
      <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
        Increment Counter 2
      </button>
    </>
  );
}
