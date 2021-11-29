import React, { Component } from 'react';
import ComponentE from './ComponentE';

// 3 Steps to implement when making use of context:
// 1. Create the context
// 2. Provide a context value
// 3. Consume the context value in the necessary components

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <ComponentE />
      </div>
    );
  }
}

export default ComponentC;
