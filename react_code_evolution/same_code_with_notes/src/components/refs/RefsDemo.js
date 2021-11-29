import React, { Component } from 'react';
// Refs make it possible to access DOM nodes directly
// This is an example of how to create a ref for an input field and have the input field be focused on automatically when the page loads

// With the createRef() approach you create a reference using React.createRef(). You attach a reference to an element using a ref prop and assigning the property. The element can be accessed using the
// 'this.referenceVar.current' property.
// With the cbRef approach you first create a property then create a method that assigns the property with a DOM element as a parameter. You attach the ref to an element using the method that in turn assigns the element ot the property. In the call back approach it is directly accessed using 'this.referenceVar'

class RefsDemo extends Component {
  // it's common to create refs in the constructor so it can be referenced throughout the component
  constructor(props) {
    super(props);
    // creates reference to input element
    this.inputRef = React.createRef();
    // older way of setting a ref
    // this.cbRef = null;
    // this.setCbRef = (element) => {
    //   this.cbRef = element;
    // };
  }

  componentDidMount() {
    // The current property is what points to the DOM node
    console.log(this.inputRef);
    this.inputRef.current.focus();

    // older way
    // if (this.cbRef) {
    //   this.cbRef.focus();
    // }
  }

  // onclick this will get the text from the input field. Access Ref
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;

// ADDING A REF TO A DOM ELEMENT

// This code uses a ref to store a reference to a DOM node:
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

// React will assign the current property with the DOM element when the component mounts, and assign it back to null when it unmounts. ref updates happen before componentDidMount or componentDidUpdate lifecycle methods.

// ADDING A REF TO A CLASS COMPONENT
// If we wanted to wrap the CustomTextInput above to simulate it being clicked immediately after mounting, we could use a ref to get access to the custom input and call its focusTextInput method manually:
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return <CustomTextInput ref={this.textInput} />;
  }
}
// Note that this only works if CustomTextInput is declared as a class:

class CustomTextInput extends React.Component {
  // ...
}

// REF AND FUNCTION COMPONENTS
// By default, you may not use the ref attribute on function components because they don’t have instances.

// If you want to allow people to take a ref to your function component, you can use forwardRef (possibly in conjunction with useImperativeHandle), or you can convert the component to a class.

// You can, however, use the ref attribute inside a function component as long as you refer to a DOM element or a class component:

function CustomTextInput(props) {
  // textInput must be declared here so the ref can refer to it
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}
