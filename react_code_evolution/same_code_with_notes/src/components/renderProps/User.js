import React, { Component } from 'react';

// In react it's possible to use a prop whose value is a function to control what is actually rendered by a component. This is what the render props pattern is based on.

// The term render prop is refers to a technique for sharing code between componentsusing a prop whose value os a function.

class RenderPropsUser extends Component {
  render() {
    return <div>{this.props.render(false)}</div>;
  }
}

export default RenderPropsUser;
