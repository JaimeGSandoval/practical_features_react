import React, { Component } from 'react';
import Input from './Input';
// Example of how to create a ref for a child component from a parent component. The component has to be a class component. Refs can't be attached to functional components
// When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </>
    );
  }
}

export default FocusInput;
