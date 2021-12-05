import React, { createContext, useReducer } from 'react';
import reducer from './AppReducer';

// So we import AppReducer and pass it to useReducer which is in the provider, and we can access state values from our initial state and we're passing that into the value that's in the provider.

// initial state
const initialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initialState);

// create provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {/* The children prop is all of the components within the App component which are children of the GlobalProvider in the App component*/}
      {children}
    </GlobalContext.Provider>
  );
};
