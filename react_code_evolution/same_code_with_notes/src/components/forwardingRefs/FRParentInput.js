// Ref forwarding is a technique for automatically passing a ref through a component to one of its children. It is rarely used in applications.
// In this example what we're trying to achieve is when we click on the button in the parent component the input in the child component should receive focus. We'll use forwarding ref technique to alert the parent component to directly reference the native input element. Forward ref can be achieved by using the React forward ref method from the react library

// Breakdown: The parent component creates a ref, then attaches to the child component as a ref attribute. The child component sees that ref and tells the parent that it's not the what it's looking for. You want the native input element. The child receives the ref from the parent component. Now the parent component can directly access the input element using 'this.referenceVar.current'. The child element is forwarding the reference
// 1. create ref in the parent component and passes it to the native input element as a ref

// In  Vanilla Javascript , to get the element you use something like document.getElementById() and then set the focus on it when the button is clicked ( Simple) . I would describe ref , createRef () and forwardRef() as a way  to pass a property down to a child control , and then that child control sets the value to a DOM node, and then the parent can get hold of it and do things , like in this case setting the focus. , but the React  team suggest  only to use this when its absolutely  needed and this is an escape hatch.  as its accessing the underlining DOM element not the virtual DOM, things that use this method  will most likely be uncontrolled  components

import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    // Because we're using forward ref technique current points to the native input element and not the FRInput component
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
