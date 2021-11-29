import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

export class ComponentE extends Component {
  render() {
    return (
      <div>
        {/* ComponentE is now able to render the username too */}
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}

ComponentE.contextType = UserContext;

export default ComponentE;
