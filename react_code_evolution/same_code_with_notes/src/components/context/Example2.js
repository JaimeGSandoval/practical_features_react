import React from 'react';
import ReactDOM from 'react-dom';

const ExpletiveContext = React.createContext('shit');

function ContextualExclamation() {
  return (
    <ExpletiveContext.Consumer>
      {(word) => <span>Oh {word}</span>}
    </ExpletiveContext.Consumer>
  );
}

function VisitGrandmaHouse() {
  <ExpletiveContext.Provider value="crap">
    <h1>Grandma's House</h1>
    <ContextualExclamation />
  </ExpletiveContext.Provider>;
}

function VisitFriendHouse() {
  <>
    <h1>Friend's House</h1>
    <ContextualExclamation />
  </>;
}

function App() {
  return (
    <>
      <VisitFriendHouse />
      <VisitGrandmaHouse />
    </>
  );
}
export default Example2;
