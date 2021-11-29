import React, { Component } from 'react';
import { UserConsumer } from './userContext';

// In between the opening and closing tags of the consumer component, we need to specify the a function. The function gets the usercontext value, which is "Jaime" as its parameter which can then be used within the function body to return a react element. In our example the parameter is called username, which the context provides.

// So what happens is we are passing a function as a child to the consumer component. The consumer component tells ComponentF "Hey you need the username. le me provide it to you. What you want to do with the username is up to you. Just make sure you return the proper JSX." ComponentF will simply consume the username and render it as part of the JSX. This will successfully use context to provide a value to deeply nested components without having to pass that value as a prop through every intermediate component.

export class ComponentF extends Component {
  // the parameter username is the value from UserProvider
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
